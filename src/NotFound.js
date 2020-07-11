import React from 'react';
import { useLocation } from "react-router-dom";

/**
 * stateless NotFound component to print no matching route with a typed url
 * it states typed url part as a user-friendly message with the benefit of useLocation hook 
 */
const NotFound = () => {
    let location = useLocation();

    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
}

export default NotFound;