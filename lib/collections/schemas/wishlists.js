import SimpleSchema from "simpl-schema";
import { registerSchema } from "@reactioncommerce/schemas";

export const WishlistItem = new SimpleSchema({
  productId: {
    type: String,
    optional: false,
    index: 1
  },
  variantId: {
    type: String,
    optional: true
  }
});

registerSchema("WishlistItem", WishlistItem);

export const Wishlists = new SimpleSchema({
  "_id": {
    type: String
  },
  "userId": {
    type: String,
    unique: true,
    index: 1
  },
  "items": {
    type: Array
  },
  "items.$": {
    type: WishlistItem
  }
});

registerSchema("Wishlists", Wishlists);
