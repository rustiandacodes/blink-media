// import router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateArticle from './pages/CreateArticle';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/create-article" element={<CreateArticle />}></Route>
        <Route path="/update-article/:article_id" element={<CreateArticle />}></Route>
        <Route path="/profile/:user_id" element={''}></Route>
        <Route path="/article/:article_id" element={''}></Route>
      </Routes>
    </Router>
  );
};

export default App;
