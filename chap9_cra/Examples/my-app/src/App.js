import { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link,
  Switch,
  NavLink
} from "react-router-dom";

import Post from './components/Post';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

class App extends Component {

  
  // la news 4 => REDIRECTION vers le DASHBORAD voir dans le composant Post

  render() {
    const newsContent = [1, 2, 3, 4];
    //<> </> représente un fragment à la place de <React.Fragment>

    // Router définit un conteneur
    return (
      <Router>
        <ul>
          <li><Link to="/" >Home </Link></li>
          <li><Link to="/post" >Mon post </Link></li>
          <li><NavLink to="/category" activeClassName="active" >Category</NavLink></li>
          {newsContent.map((id, i) =>(
            <li>
              <NavLink to={`/news/${id}`} >news id : {id}</NavLink>
            </li>

          ))}
          <li>
            <Link to="/post/not-match">Also Will Not Match</Link>
          </li>
          <li>
            <Link to="/protected">protected</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" >
            <p>Home !</p>
          </Route>
          <Route exact path="/post" component={Post} />
          <Route exact path="/category" >
           <p>Ma catégory</p>
          </Route>
            {/** Route avec un paramètre */}
          <Route path="/news/:id" component={Post} />
          <Route path="/login">
              <p>Page de login</p>
          </Route>
          <PrivateRoute path="/protected">
              <p>Je suis logged !</p>
          </PrivateRoute>
          <Route path="*">
            <p>No Match</p>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;