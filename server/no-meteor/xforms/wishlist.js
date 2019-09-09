import { decodeOpaqueIdForNamespace, encodeOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/id";
import customNamespaces from "../util/namespaces";

export const decodeWishlistOpaqueId = decodeOpaqueIdForNamespace(customNamespaces.Wishlist);
export const encodeWishlistOpaqueId = encodeOpaqueId(customNamespaces.Wishlist);
