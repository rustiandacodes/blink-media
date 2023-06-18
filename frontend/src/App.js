// import router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateArticle from './pages/CreateArticle';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-article" element={<CreateArticle />}></Route>
        <Route path="/update-article/:article_id" element={<CreateArticle />}></Route>
        <Route path="/profile/:user_id" element={''}></Route>
        <Route path="/article/:article_id" element={''}></Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
