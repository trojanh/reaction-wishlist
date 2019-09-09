import { encodeWishlistOpaqueId } from "../../xforms/wishlist";
import wishlistItems from "./items";

export default {
  _id: (node) => encodeWishlistOpaqueId(node._id),
  userId: (node) => node.userId,
  items: wishlistItems
};
