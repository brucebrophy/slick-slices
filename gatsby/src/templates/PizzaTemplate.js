import { graphql } from 'gatsby';
import React from 'react';

export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      id
      name
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        id
        name
        vegetarian
      }
    }
  }
`;

const PizzaTemplate = ({ data }) => (
  <div>
    <p>{data.pizza.name}</p>
  </div>
);

export default PizzaTemplate;
