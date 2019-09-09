/* eslint-disable require-jsdoc */
import ReactionError from "@reactioncommerce/reaction-error";
import Random from "@reactioncommerce/random";
import { WishlistItem as WishlistItemSchema, Wishlists as WishlistsSchema} from "../../../lib/collections/schemas";
import { Wishlists } from "../../../lib/collections";
import Logger from "@reactioncommerce/logger";

function createWishlist({ userId, item }) {
  const wishlist = {
    _id: Random.id(),
    userId,
    items: [item]
  };
  WishlistsSchema.validate(wishlist);
  return Wishlists.insert(wishlist);
}

function updateWishlist({ userId, item }) {
  return Wishlists.update(
    { userId },
    {
      $addToSet: { items: item }
    }
  );
}

async function addToWishlist({ userId, item }) {
  try {
    WishlistItemSchema.validate(item);
    const aWishlist = await Wishlists.findOne({ userId });
    if (!aWishlist) return createWishlist({ userId, item });
    return updateWishlist({ userId, item });
  } catch (error) {
    Logger.error(error);
    throw new ReactionError("server-error", "An error occurred adding the product.");
  }
}

/**
 * @method addProductToWishlist
 * @summary Add one product to wishlist
 * @param {Object} context -  an object containing the per-request state
 * @param {Object} input - mutation input
 * @param {Object} [options] - Options
 * @return {Promise<Object>} An object with `productId`, `variantId`, if added else null
 */
export default async function addProductToWishlist(context, input) {
  const { productId, variantId } = input;

  const { collections, userId } = context;
  const { Accounts, Products } = collections;

  const userAccount = await Accounts.findOne({ userId });
  if (!userAccount) throw new ReactionError("not-found", "No account found");

  // check if productId to be added to wishlist exists in DB
  // for variants check if a variant with the productId exists
  const selector = variantId ? { _id: variantId, ancestors: productId } : { _id: productId };
  const product = await Products.findOne(selector);
  if (!product) throw new ReactionError("not-found", "No product/variant found");

  return addToWishlist({ userId, item: { productId, variantId } }).then(({ modifiedCount, result }) => {
    // if wishlist didn't update send null values
    if (modifiedCount === 0 || (result && result.ok !== 1)) return { variantId: null, productId: null };
    return { productId, variantId };
  });
}
