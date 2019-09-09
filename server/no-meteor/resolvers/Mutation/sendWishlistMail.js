import { encodeAccountOpaqueId, decodeAccountOpaqueId } from "@reactioncommerce/reaction-graphql-xforms/account";

/**
 * @name "Mutation.sendWishlistMail"
 * @method
 * @memberof Cart/GraphQL
 * @summary resolver for the sendWishlistMail GraphQL mutation
 * @param {Object} parentResult - unused
 * @param {Object} args.input - an object of all mutation arguments that were sent by the client
 * @param {Object} context - an object containing the per-request state
 * @return {Promise<Object>} AddCartItemsPayload
 */
export default async function sendWishlistMail(parentResult, { input }, context) {
  const { accountId, clientMutationId = null, recipientMail } = input;
  const dbAccountId = decodeAccountOpaqueId(accountId);
  const result = await context.mutations.sendWishlistMail(context, { dbAccountId, recipientMail });

  return { accountId: encodeAccountOpaqueId(result.dbAccountId), clientMutationId };
}