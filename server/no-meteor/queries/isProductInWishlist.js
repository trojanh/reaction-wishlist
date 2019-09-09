/* eslint-disable require-jsdoc */
import { Wishlists } from "../../../lib/collections";

export default async function isProductInWishlist(context, input) {
  const { productId, variantId } = input;
  context.userId = context.userId || "wQe3CvFk4J3tcQCwB";
  const { collections, userId } = context;
  const { Accounts } = collections;

  const userAccount = await Accounts.findOne({ userId });
  if (!userAccount) throw new ReactionError("not-found", "No account found");

  const result = Wishlists.findOne({
    userId,
    "items.productId": productId,
    "items.variantId": variantId
  })

  return !!result;
}
