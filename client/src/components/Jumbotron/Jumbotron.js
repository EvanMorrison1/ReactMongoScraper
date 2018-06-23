import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
   <div class="jumbotron text-center">
  <div class="overlay">
  </div>
  <div class="background-image">
  </div>
  <div class="caption">
    <h1>Mongo Scraper</h1>
    <p>New York Times Edition</p>
  </div>
</div>
<div class="container-fluid article-container">
</div>
  </div>
);

export default Jumbotron;
