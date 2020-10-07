import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        rating {
          reviews
          average
        }
      }
    }
  }
`;

const StyledBeerGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const StyledBeer = styled.div`
  padding: 2rem;
  border: 1px solid var(--grey);
  text-align: center;
  img {
    display: grid;
    width: 100%;
    height: 200px;
    object-fit: contain;
    align-items: center;
    font-size: 10px;
  }
`;

const BeersPage = ({ data }) => {
  console.log(data);
  return (
    <>
      <SEO title="Beers" />
      <h2 className="center">
        We have {data.beers.nodes.length} Beers Available. Dine in Only!
      </h2>
      <StyledBeerGrid>
        {data.beers.nodes.map((beer) => {
          const rating = Math.round(beer.rating.average);
          return (
            <StyledBeer key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3 className="name">{beer.name}</h3>
              {beer.price}
              <p title={`${rating} out of 5 stars`}>
                {'⭐️'.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {'⭐️'.repeat(5 - rating)}
                </span>
                <span>({beer.rating.reviews})</span>
              </p>
            </StyledBeer>
          );
        })}
      </StyledBeerGrid>
    </>
  );
};

export default BeersPage;
