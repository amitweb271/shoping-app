import React from 'react';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import Header from './Header';
import Navbar from './Navbar';
import NewArrivelus from './NewArrivelus';
import Shops from './Shops';
function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Shops/>
    <NewArrivelus/>
    <Aboutus/>
    <Contactus/>
    </>
  );
}

export default Home;