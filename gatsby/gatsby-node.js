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
      path: `/pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await turnPizzasIntoPages(params);
}
