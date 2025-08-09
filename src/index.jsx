import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx"; // din kode

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout currentPageName="Dashboard">
      <div>Velkommen til ADHD Assistent!</div>
    </Layout>
  </BrowserRouter>
);
