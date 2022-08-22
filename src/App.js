import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProjectPage from './ProjectPage';
import BugsPage from './BugsPage';
import NavigationPage from './NavigationPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Projects" element={<NavigationPage/>}/>
          <Route path="/projects/:id" element={<ProjectPage/>}/>
          <Route path="/projects/:project_id/Bugs" element={<BugsPage/>}/>
        </Routes>
      </main>
    </BrowserRouter>
    );
  }
}

export default App;
