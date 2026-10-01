import React from 'react';
import './App.css';
import Layout from './components/layout/layout';
import Body from './components/body/body';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <Layout>
      <Header />
      <Body />
      <Footer />
    </Layout>
  );
}

export default App;
