import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Homepage from '../components/Homepage';

const Index = () => (
  <Layout type="index">
    <SEO title="Rubén Vara 🚀 Mi blog sobre Javascript y otras teconologías web" />
    <Homepage />
  </Layout>
);

export default Index;
