import React from 'react';
import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';
import Layout from './components/layouts/layouts';

const App = ({ route }) => {
  const headerTags = () => (
    <Helmet>
      <title>
        React | Redux | Razzle | SEO READY | Server side rendered boilerplate
        with static routing by wabomba bakar
      </title>
      <meta
        property='og:title'
        content='React | Redux | Razzle | SEO READY | Server side rendered boilerplate with static routing by wabomba bakar'
      />

      <meta
        property='og:description'
        content='A React, Redux and Razzle Boilerplate starter application that helps you in the Creatration of hybrid React Applications which are highly optimised for search engines and helps to some a react search engine optmisation problem.'
      />
      <meta name='author' content='Wabomba Bakar' />
    </Helmet>
  );
  return (
    <Layout>
      {headerTags()}
      {renderRoutes(route.routes)}
    </Layout>
  );
};

export default {
  component: App
};
