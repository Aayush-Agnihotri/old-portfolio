import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import Projects from './pages/projects';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/projects' Component={Projects} />
      </Routes>
    </>
  );
}

export default App;
