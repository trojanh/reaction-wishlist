/* eslint-disable require-jsdoc */
import { decodeProductOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/product";

export default async function isProductInWishlist(_, input, context) {
  const productId = decodeProductOpaqueId(input.productId);
  const variantId = decodeProductOpaqueId(input.variantId);

  return context.queries.isProductInWishlist(context, {
    productId,
    variantId
  });
}
