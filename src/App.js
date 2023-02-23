import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./components/Home.js";
import Pizza from "./pages/Pizza.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Sides from "./pages/Sides";
import Drinks from "./pages/Drinks.js";
import Desserts from "./pages/Desserts.js";

function App() {
  return (
      <Router>
        <>
          <Home />
          <Navbar />
          <Routes>
            <Route exact path="/Pizza" element={<Pizza />} />
            <Route exact path="/Sides" element={<Sides />} />
            <Route exact path="/Drinks" element={<Drinks />} />
            <Route exact path="/Desserts" element={<Desserts />} />
          </Routes>
          <Footer />
        </>
      </Router>
  );
}

export default App;