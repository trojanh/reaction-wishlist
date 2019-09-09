import { decodeWishlistOpaqueId } from "../xforms/wishlist";
import { Wishlists } from "../../../lib/collections";

/**
 * @name wishlist
 * @method
 * @summary Query the Wishlists collection
 * @param {Object} context - an object containing the per-request state
 * @param {String} _id - WishlistId
 * @return {Promise<Object>|undefined} - An object with the wishlist's items
 */
export default async function wishlist(context, _id) {
  const { userId, collections: { Accounts } } = context;

  const selectors = _id ? { _id: decodeWishlistOpaqueId(_id) } : { userId };
  const wishlist = await Wishlists.findOne(selectors);

  if(!wishlist) return wishlist;

  const userAccount = await Accounts.findOne({ userId: wishlist.userId });

  return {...wishlist, userName: userAccount.firstName };
}
