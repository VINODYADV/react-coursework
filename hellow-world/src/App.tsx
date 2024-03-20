import React from 'react';
import PageHeader from './components/payments-ui/PageHeader';
import Search from './components/payments-ui/Search';
import ListTransaction from './components/payments-ui/ListTransaction';
// import logo from './logo.svg';
import './App.css';
// import Greeting from './components/Greeting/Greeting';
import SongList  from './components/Song/SongList';
function App() {
  return (
    <>
    <h1>Hello world</h1>
    {/* <SongList/> */}
    <PageHeader />
 <Search />
 <ListTransaction />
    </>
    
  )
}

export default App;
