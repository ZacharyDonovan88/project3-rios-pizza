import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/Home.js";
import Pizza from "./pages/Pizza.js";

function App() {
  return (
      <Router>
        <>
          <Home />
          <Routes>
            <Route exact path="/" element={<Pizza />} />
          </Routes>
        </>
      </Router>
  );
}

export default App;