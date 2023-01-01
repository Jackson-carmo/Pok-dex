import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "./pages/Listing";
import FormCard from "./components/FormCard";
import SearchListing from "./pages/SearchListing";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/pokemon/:id" element={<FormCard />}/>
        <Route path="/search" element={<SearchListing />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
