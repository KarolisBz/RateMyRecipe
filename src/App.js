// importing router for navigation capabilities
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// importing components
import NavBar from './client/components/NavBar';
import Home from './client/components/Home';
import Recipes from './client/components/Recipes';
import RecipeDetails from './client/components/RecipeDetails';
import CreateRecipe from './client/components/CreateRecipe';

function App() {
  return (
    <Router>
      {/* External NavBar componenet*/}
      <NavBar/>
      <Routes>
        {/* Routes set to components which contain the JS XML content*/}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CreateRecipe" element={<CreateRecipe />} />
        <Route path="/Recipes/:category" element={<Recipes />} />
        <Route path="/RecipeDetails/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;