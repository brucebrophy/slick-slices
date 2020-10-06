import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const StyledPizzaCard = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  h1,
  p {
    margin: 0;
  }
`;

const PizzaCard = ({ pizza }) => (
  <StyledPizzaCard>
    <Link to={`/pizzas/${pizza.slug.current}`}>
      <h2>
        <span className="mark">{pizza.name}</span>
      </h2>
    </Link>
    <p>{pizza.toppings.map((topping) => topping.name).join(', ')}</p>
    <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
  </StyledPizzaCard>
);

const PizzaList = ({ pizzas }) => (
  <PizzaGrid>
    {pizzas.map((pizza) => (
      <PizzaCard key={pizza.id} pizza={pizza} />
    ))}
  </PizzaGrid>
);
export default PizzaList;
