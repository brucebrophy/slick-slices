import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slick Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: 'The best pizza place in toronto',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'uqk5c717',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_SECRET,
      },
    },
  ],
};
