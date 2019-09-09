import Reaction from "/imports/plugins/core/core/server/Reaction";
import ReactionError from "@reactioncommerce/reaction-error";
import get from "lodash/get";
import Logger from "@reactioncommerce/logger";
import { Wishlists } from "../../../lib/collections";
import { encodeWishlistOpaqueId } from "../xforms/wishlist";


/**
 * @method sendDropAHintEmail
 * @summary Sends "Drop a Hint" email
 * @param {Object} context - an object containing the per-request state
 * @param {Object} input - mutation input
 * @param {Object} [options] - Options
 * @return {Promise<Object>}
 */
export default async function sendDropAHintEmail(context, input, options = {}) {
  const { collections: { Catalog, Accounts }, userId: userIdFromContext } = context;
  const { dbAccountId, recipientMail } = input;

  if (!dbAccountId) {
    throw new ReactionError("not-found", "No account provided");
  }

  if (dbAccountId !== userIdFromContext) {
    throw new ReactionError("access-denied", "Access denied");
  }

  if (!recipientMail) {
    throw new ReactionError("not-found", "No recipient provided");    
  }

  const wishlist = await Wishlists.findOne({ "userId": dbAccountId });

  if (!wishlist) {
    throw new ReactionError("not-found", "Account doesn't have a wishlist");
  }

  const { firstName: userName = "this" } = await Accounts.findOne({ _id: dbAccountId });

  const encodedWishlistId = encodeWishlistOpaqueId(wishlist._id);

  const catalogItem = await Catalog.findOne({ "product._id": wishlist.items[0].productId });
  const productImage = get(catalogItem, "product.media[0].URLs.medium") ?
  `${process.env.ROOT_URL}${get(catalogItem, "product.media[0].URLs.medium")}` :
  `${process.env.STOREFRONT_URL}/static/images/placeholder.gif`

  const dataForEmail = {
    userName,
    wishlistUrl: `${process.env.STOREFRONT_URL}/wishlist/${encodedWishlistId}`,
    productImage,
    emailLogo: `${process.env.STOREFRONT_URL}/static/images/logo.png`,
    links: {
      whatsNew: `${process.env.STOREFRONT_URL}/collections/whats-new`,
      shopInstagram: `${process.env.STOREFRONT_URL}/instagram/`,
      bestsellers: `${process.env.STOREFRONT_URL}/collections/best-sellers`
    },
    socialLinks: {
      facebook: {
        icon: "https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/facebook_96.png",
        link: "https://www.facebook.com/LocalEclecticUSA/"
      },
      youtube: {
        icon: "https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/youtube_96.png",
        link: "https://www.youtube.com/channel/UC_Mvtt6tHOGGkYo7B-ZWz-w"
      },
      twitter: {
        icon: "https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/twitter_96.png",
        link: "https://twitter.com/LocalEclectic"
      },
      pinterest: {
        icon: "https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/pinterest_96.png",
        link: "https://br.pinterest.com/localeclectic/"
      },
      instagram: {
        icon: "https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/subtle/instagram_96.png",
        link: "https://www.instagram.com/LocalEclectic/"
      }
    },
  };
  
  const template = "account/shareWishlist";
  const subject = "account/shareWishlist/subject";

  SSR.compileTemplate(template, Reaction.Email.getTemplate(template));
  SSR.compileTemplate(subject, Reaction.Email.getSubject(template));

  try {
    Reaction.Email.send({
      to: recipientMail,
      from: process.env.MAIL_FROM_ADDRESS,
      subject: SSR.render(subject, dataForEmail),
      html: SSR.render(template, dataForEmail)
    });

    return { dbAccountId };
  } catch (ex) {
    Logger.error(ex);
    return { dbAccountId };
  }
}
