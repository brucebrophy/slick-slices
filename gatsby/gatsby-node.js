import path from 'path';
import { URLSearchParams } from 'url';

async function turnPizzasIntoPages({ graphql, actions }) {
  // get a template
  const pizzaTemplate = path.resolve('./src/templates/PizzaTemplate.js');

  // query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);

  // loop and create page for each pizza
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      path: `/pizzas/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

async function turnToppingsIntoPages({ graphql, actions }) {
  // get a template
  const toppingTemplate = path.resolve('./src/pages/pizzas.js');

  // query all pizzas
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          id
          name
        }
      }
    }
  `);

  // loop and create page for each pizza
  data.toppings.nodes.forEach((topping) => {
    actions.createPage({
      path: `/toppings/${topping.name}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
      },
    });
  });
}

export async function createPages(params) {
  await Promise.all([
    turnPizzasIntoPages(params),
    turnToppingsIntoPages(params),
  ]);
}
