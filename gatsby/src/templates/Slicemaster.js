import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PersonGrid = styled.div`
  .gatsby-image-wrapper {
    height: 400px;
  }
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export const query = graphql`
  query($slug: String!) {
    slicemaster: sanityPerson(slug: { current: { eq: $slug } }) {
      id
      name
      description
      name
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

const Slicemaster = ({ data }) => (
  <PersonGrid>
    <Img fluid={data.slicemaster.image.asset.fluid} />
    <div>
      <h1>
        <span className="mark">{data.slicemaster.name}</span>
      </h1>
      <p>{data.slicemaster.description}</p>
    </div>
  </PersonGrid>
);

export default Slicemaster;
