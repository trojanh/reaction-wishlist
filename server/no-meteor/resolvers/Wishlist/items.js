import { encodeProductOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/product";

// eslint-disable-next-line require-jsdoc
export default function wishlistItems(wishlist) {
  const { items } = wishlist;
  if (!items || items.length === 0) return [];

  return items.map((item) => ({
    productId: encodeProductOpaqueId(item.productId),
    variantId: encodeProductOpaqueId(item.variantId)
  }));
}
