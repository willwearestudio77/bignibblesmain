export const getHomeQuery = /* GraphQL */ `
  query getHome {
    metaobjects(first: 10, type: "home_hero") {
      edges {
        node {
          id
          handle
          fields {
            value
            key
            reference {
              ... on ProductVariant {
                id
                availableForSale
                image {
                  url
                }
              }
            }
          }
          type
        }
      }
      nodes {
        fields {
          value
        }
        id
      }
    }
  }
`;
