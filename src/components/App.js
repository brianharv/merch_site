import React from "react";
import '../App.css';
import '../index.css';
import Header from "./Header";
import Body from "./Body";


function App() {
  return (
        <React.Fragment>
          <div className='container-fluid align-items-center'>
            <Header />
            <Body />
          </div>
        </React.Fragment>
  );
}

export default App;
