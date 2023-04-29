import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import Footer from "./component/Footer";
import BlogDetails from "./pages/blogDetails";
import BlogList from './pages/BlogList'
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blogs" component={BlogList} />
        <Route path={'/blog/:id'} component={BlogDetails}  />
        {/* path={"product/:id"} component={DetailsProduct} */}
        
      </Switch>
      <Footer/>
    </Router>
  );
}
export default App;
