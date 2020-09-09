import React from 'react';
import './App.scss';
import Header from "./components/Header";
import InfoBox from "./components/InfoBox";

function App() {
  return (
    <div className="App">
      <Header/>
      <InfoBox title="C"/>
    </div>
  );
}

export default App;
