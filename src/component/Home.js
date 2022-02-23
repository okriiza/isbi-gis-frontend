import React from 'react';
import Footer from './Footer';
import Navbar from './Dashboard/Navbar'
import Products from './Dashboard/Products'
import Deskripsi from './Dashboard/Deskripsi'
import About from './Dashboard/About'
import Map from './Map';

export default function Home() {

  return (
    <>
      <Navbar />
      <Map />
      <Deskripsi />
      <Products />
      <About />
      <Footer />
    </>

  );
}
