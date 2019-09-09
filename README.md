# reaction-wishlist

[Reaction](https://github.com/reactioncommerce/reaction) plugin to add Wishlist support for users.
- It helps user add products to Wishlist 

APIs
```
extend type Query {
  "Return Wishlist for logged in user"
  wishlist(_id: ID): Wishlist

  "Returns if a product is in Wishlist or not"
  isProductInWishlist(productId: ID!, variantId: ID): Boolean
}

extend type Mutation {
  "Add product with/without variant to Wishlist"
  addProductToWishlist(input: AddProductWishlistInput!): addProductToWishlistPayload!

  "Remove product with/without variant from Wishlist"
  removeProductFromWishlist(input: removeProductFromWishlistInput!): removeProductFromWishlistPayload!

  "Send wishlist share email"
  sendWishlistMail(input: ShareWishlistInput!): ShareWishlistPayload!
}
```
