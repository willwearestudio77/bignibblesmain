import seoFragment from '../fragments/seo';

const pageFragment = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary

      seo {
        ...seo
      }
      createdAt
      updatedAt
      heroText: metafield(namespace: "custom", key: "hero_text") {
        id
        namespace
        key
        value
      }
      heroImage: metafield(namespace: "custom", key: "hero_image") {
        reference {
          ... on MediaImage {
            id
            image {
              originalSrc
              id
              width
              height
            }
          }
        }
      }
    }
  }
  ${seoFragment}
`;

export const getPageQuery = /* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${pageFragment}
`;

export const getPagesQuery = /* GraphQL */ `
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${pageFragment}
`;
