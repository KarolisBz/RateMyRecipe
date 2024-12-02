// importing router for navigation capabilities
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// importing components
import NavBar from './client/components/NavBar';
import Home from './client/components/Home';

function App() {
  return (
    <Router>
      {/* External NavBar componenet*/}
      <NavBar />
      <Routes>
        {/* Routes set to components which contain the JS XML content*/}
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;