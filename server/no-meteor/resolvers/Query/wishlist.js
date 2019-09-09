// eslint-disable-next-line require-jsdoc
export default async function wishlist(_, { _id }, context) {
  return context.queries.wishlist(context, _id);
}
