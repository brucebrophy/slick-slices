import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import SEO from '../components/SEO';
import useForm from '../components/UseForm';
import calculatePizzaPrice from '../utils/CalculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export const query = graphql`
  query {
    pizzas: allSanityPizza {
      nodes {
        id
        slug {
          current
        }
        name
        price
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 100) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const order = ({ data }) => {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
  });

  return (
    <>
      <SEO title="🍕 Order a Pizza!" />
      <div>
        <form>
          <fieldset>
            <legend>Your Info</legend>
            <label htmlFor="name">
              Name
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={updateValue}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                id="email"
                value={values.email}
                onChange={updateValue}
              />
            </label>
          </fieldset>
          <fieldset>
            <legend>Menu</legend>
            {data.pizzas.nodes.map((pizza) => (
              <div key={pizza.id}>
                <Img
                  width="50"
                  height="50"
                  fluid={pizza.image.asset.fluid}
                  alt={pizza.name}
                />
                <div>
                  {['S', 'M', 'L'].map((size) => (
                    <button type="button">
                      {size} -{' '}
                      {formatMoney(calculatePizzaPrice(pizza.price, size))}
                    </button>
                  ))}
                </div>
                <h2>{pizza.name}</h2>
              </div>
            ))}
          </fieldset>
          <fieldset>
            <legend>Order</legend>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default order;
