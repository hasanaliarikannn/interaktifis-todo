import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {AddItem} from "./components/AddItem";
import {ItemList} from "./components/ItemList";
import {GlobalProvider} from "./contexts/GlobalState";
import {Summary} from './components/Summary';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <AddItem />
        <Summary />
        <ItemList />
      </div>
    </GlobalProvider>
    
  );
}

export default App;
