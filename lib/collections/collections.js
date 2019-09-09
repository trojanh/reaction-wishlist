import { Mongo } from "meteor/mongo";
import { Wishlists as WishlistsSchema } from "./schemas";

/**
 * @name Sitemaps
 * @memberof Collections
 * @summary Collection for Wishlists
 */
export const Wishlists = new Mongo.Collection("Wishlists");

Wishlists.attachSchema(WishlistsSchema);

