import gql from 'graphql-tag';

export const ALL_PRODUCTS = gql`
    query getProducts {
        product {
            available
            id
            image
            name
            priceMember
            pricePromotional
            priceStock
        }
    }
`;
