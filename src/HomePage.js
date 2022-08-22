import React from 'react';
import { Link } from 'react-router-dom';

// Our Home Page.  Exciting stuff.
export default function HomePage() {
  return (
    <div>
      <h1>{'Home Page'}</h1>
      <Link to="/Projects">{'Check out our view projects Page!'}</Link>
      <Link to="/Bugs">{'Check out our bugs Page!'}</Link>
    </div>
  );
}
