import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Footer from "./components/Footer";
import Big from "@material-ui/core/Button";
import { useState, useEffect } from 'react';


function App() {


  return (
    <div className="App">
      <Header />
      <Main2 />
      <Footer />
    </div>
  );
}

export default App;