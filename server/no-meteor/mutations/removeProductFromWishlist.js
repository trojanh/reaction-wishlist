import ReactionError from "@reactioncommerce/reaction-error";
import { Wishlists } from "../../../lib/collections";

// eslint-disable-next-line require-jsdoc
export function removeFromWishlist({ userId, item }) {
  try {
    check(userId, String);
    Wishlists.update(
      {
        userId
      },
      {
        $pull: {
          items: item
        }
      }
      );
    return item;
  } catch (error) {
    Logger.error(error);
    throw new ReactionError("server-error", "An error occurred removing product.");
  }
}


/**
 * @method removeProductFromWishlist
 * @summary Add one product to wishlist
 * @param {Object} context -  an object containing the per-request state
 * @param {Object} input - mutation input
 * @param {Object} [options] - Options
 * @return {Promise<Object>} An object with `variantId`, `productId` if removed else null
 */
export default async function removeProductFromWishlist(context, input) {
  const { productId, variantId } = input;

  const { collections, userId } = context;
  const { Accounts } = collections;

  const userAccount = await Accounts.findOne({ userId });
  if (!userAccount) throw new ReactionError("not-found", "No account found");

  const aWishlist = await Wishlists.findOne({ userId });

  if (!aWishlist) throw new ReactionError("server-error", "No Wishlist found");

  return removeFromWishlist({ userId, item: { variantId, productId } });
}
