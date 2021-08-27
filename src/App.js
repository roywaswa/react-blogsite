import React from 'react';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
import About from './pages/About'
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='body'>
        <Switch>  
          <Route exact path='/'><Blogs/></Route>
          <Route path='/create-post'><CreateBlog/></Route>
          <Route path='/about'><About/></Route>
        </Switch>
      </div>
      <Footer/> 
    </div>
  );
}

export default App;
