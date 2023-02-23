import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/Home.js";
import Pizza from "./pages/Pizza.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Sides from "./pages/Sides"

function App() {
  return (
      <Router>
        <>
          <Home />
          <Navbar />
          <Routes>
            <Route exact path="/Pizza" element={<Pizza />} />
            <Route exact path="/Sides" element={<Sides />} />
          </Routes>
          <Footer />
        </>
      </Router>
  );
}

export default App;