import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from './Nav';
import Typography from '../styles/Typography';
import GlobalStyles from '../styles/GlobalStyles';
import stripes from '../assets/images/stripes.svg';
import 'normalize.css';

const StyledContent = styled.div`
  background: white;
  padding: 2rem;
`;

const SiteBorder = styled.div`
  max-width: 1000px;
  margin: 12rem auto 4rem auto;
  margin-top: clamp(2rem, 10vh, 12rem);
  background: white url(${stripes});
  background-size: 80em;
  padding: 5px;
  padding: clamp(5px, 1vw, 25px);
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.044);
  border: 5px solid white;
  @media (max-width: 1100px) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <SiteBorder>
      <StyledContent>
        <Nav />
        {children}
        <Footer />
      </StyledContent>
    </SiteBorder>
  </>
);

export default Layout;
