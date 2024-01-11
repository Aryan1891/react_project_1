import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
 <h1 className="head">hello by </h1>
);

const Heading = () => (
  
    <div>
      <Title />
      <h2 className="head">hello by react components</h2>
    </div>
  
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
