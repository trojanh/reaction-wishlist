import Reaction from "/imports/plugins/core/core/server/Reaction";
import html from "./no-meteor/templates/wishlist";

/**
 * @summary Called on startup
 * @param {Object} context Startup context
 * @param {Object} context.collections Map of MongoDB collections
 * @returns {undefined}
 */
export default async function startup(context) {
  const { collections: { Templates } } = context;

  const exists = await Templates.findOne({ name: "account/shareWishlist" });

  if (exists) return;

  const template = {
    name : "account/shareWishlist",
    shopId : Reaction.getShopId(),
    type : "email",
    enabled : true,
    language : "en",
    parser : "handlebars",
    priority : 1,
    provides : "template",
    subject: "Check out {{userName}} wishlist from Local Eclectic",
    template : html,
    title : "Account/Share Wishlist"
  }

  await Templates.insert(template);
}