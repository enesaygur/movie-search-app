import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h3>404</h3>
      <div>Page not found</div>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
