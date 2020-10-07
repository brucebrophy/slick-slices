import { graphql, Link } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const SliceMasterGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const SliceMasterCard = styled.div`
  a {
    text-decoration: none;
  }
  .gatsby-image-wrapper {
    height: 400px;
  }
  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }
  .description {
    transform: rotate(1deg);
    background: var(--yellow);
    padding: 2rem;
    margin: 2rem;
    margin-top: -6rem;
    z-index: 2;
    position: relative;
    text-align: center;
  }
`;

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 3) {
    slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        id
        name
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
        description
      }
    }
  }
`;

const SliceMastersPage = ({ data, pageContext }) => {
  const slicemasters = data.slicemasters.nodes;
  return (
    <>
      <SEO title={`Slicemasters Page ${pageContext.currentPage || 1}`} />
      <SliceMasterGrid>
        {slicemasters.map((person) => (
          <SliceMasterCard key={person.id}>
            <Link to={`/slicemasters/${person.slug.current}`}>
              <h2>
                <span className="mark">{person.name}</span>
              </h2>
            </Link>
            <Img fluid={person.image.asset.fluid} />
            <p className="description">{person.description}</p>
          </SliceMasterCard>
        ))}
      </SliceMasterGrid>
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PER_PAGE)}
        totalCount={data.slicemasters.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/slicemasters"
      />
    </>
  );
};

export default SliceMastersPage;
