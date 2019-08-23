
/**
 * Returns an index using the slug as a key
 * @param {Object} authors Remark nodes from graphql
 */
export function buildAuthorIndex(authors) {
  const index = {};

  authors.edges.forEach((author) => {
    const slug = author.node.fields.slug.replace(/\//ig, '').substring(7);

    index[slug] = author.node;
  });

  return index;
}
