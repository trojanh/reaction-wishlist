import Reaction from "/imports/plugins/core/core/server/Reaction";
import schemas from "./server/no-meteor/schemas";
import resolvers from "./server/no-meteor/resolvers/index";
import queries from "./server/no-meteor/queries";
import mutations from "./server/no-meteor/mutations";
import startup from "./server/startup";

Reaction.registerPackage({
  label: "Wishlists",
  name: "wishlists",
  icon: "fa fa-vine",
  autoEnable: true,
  graphQL: {
    schemas,
    resolvers
  },
  queries,
  mutations,
  functionsByType: {
    startup: [startup]
  }
});