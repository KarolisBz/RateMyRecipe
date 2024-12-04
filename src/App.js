// importing router for navigation capabilities
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// importing components
import NavBar from './client/components/NavBar';
import Home from './client/components/Home';
import AllRecipes from './client/components/AllRecipes';

function App() {
  return (
    <Router>
      {/* External NavBar componenet*/}
      <NavBar />
      <Routes>
        {/* Routes set to components which contain the JS XML content*/}
        <Route path="/home" element={<Home/>} />
        <Route path="/AllRecipes" element={<AllRecipes/>} />
      </Routes>
    </Router>
  );
}

export default App;