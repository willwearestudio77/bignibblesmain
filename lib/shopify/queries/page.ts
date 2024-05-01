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
      aboutHeader: metafield(namespace: "custom", key: "about_header") {
        id
        namespace
        key
        value
      }
      aboutText: metafield(namespace: "custom", key: "about_text") {
        id
        namespace
        key
        value
      }
      followLink: metafield(namespace: "custom", key: "follow_link") {
        id
        namespace
        key
        value
      }
      fourthSectionTitle: metafield(namespace: "custom", key: "fouth_section_title") {
        id
        namespace
        key
        value
      }
      fourthSectionBody: metafield(namespace: "custom", key: "fourth_section_body") {
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
      cookbookTitleOne: metafield(namespace: "custom", key: "cookbook_title_first_word") {
        id
        namespace
        key
        value
      }
      cookbookTitleTwo: metafield(namespace: "custom", key: "cookbook_title_second_word") {
        id
        namespace
        key
        value
      }
      cookbookTitleThree: metafield(namespace: "custom", key: "rest_of_cookbook_title") {
        id
        namespace
        key
        value
      }
      cookbookProduct: metafield(namespace: "custom", key: "product") {
        reference {
          ... on Product {
            id
            title
            handle
            totalInventory
            variants(first: 10) {
              edges {
                node {
                  id
                  priceV2 {
                    amount
                    currencyCode
                  }
                  title
                  availableForSale
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
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
      secondSectionImage: metafield(namespace: "custom", key: "second_section_images") {
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
      listOfCities: metafield(namespace: "custom", key: "list_of_cities") {
        id
        namespace
        key
        value
      }
      secondSectionTitleOne: metafield(namespace: "custom", key: "second_section_one_title") {
        id
        namespace
        key
        value
      }
      secondSectionTitleTwo: metafield(namespace: "custom", key: "second_section_two_title") {
        id
        namespace
        key
        value
      }
      secondSectionSubtileOne: metafield(
        namespace: "custom"
        key: "second_section_first_subheading"
      ) {
        id
        namespace
        key
        value
      }
      secondSectionSubtileTwo: metafield(namespace: "custom", key: "second_section_two_sub") {
        id
        namespace
        key
        value
      }
      secondSectionBodyOne: metafield(namespace: "custom", key: "second_section_one_body") {
        id
        namespace
        key
        value
      }
      secondSectionBodyTwo: metafield(namespace: "custom", key: "section_two_body_two") {
        id
        namespace
        key
        value
      }
      bottomSectionBody: metafield(namespace: "custom", key: "bottom_section_body_cookbook") {
        id
        namespace
        key
        value
      }
      bottomSectionTitle: metafield(
        namespace: "custom"
        key: "bottom_section_cookbook_title_text"
      ) {
        id
        namespace
        key
        value
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
