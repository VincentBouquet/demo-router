import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from "./pages/HomePage"
import ArticlePage from "./pages/ArticlePage";

const articles = [
    {id: 50, title: "super article"},
    {id: 53, title: "un autre article"},
    {id: 60, title: "encore un super article"},
    {id: 38, title: "celui-ci est plutôt moyen"},
    {id: 29, title: "super article 29"},
    {id: 17, title: "super article 17"}
]

function App() {
    return (
        <div className="App">
            <Router>
                <nav>
                    <ul>
                        {articles.map(article => (<li>
                            <Link to={"/article/" + article.id}>
                                {article.title}
                            </Link>
                        </li>))}
                    </ul>
                </nav>
                <Link to="/">Lien Accueil</Link>
                <br/>
                <Link to="/bonjour/1">Lien 1</Link>
                <Link to="/bonjour/2">Lien 2</Link>
                <Link to="/bonjour/3">Lien 3</Link>
                <br/>
                <Link to="/article/500">Lien article 500</Link>
                <Switch>
                    <Route exact path="/" component={HomePage}>
                        <HomePage/>
                    </Route>
                    {/*<Route exact path="/">
                <HomePage/>
            </Route>*/}
                    <Route path="/article/:idArticle/" component={ArticlePage}/>
                    <Route path="/bonjour/1">
                        <h1>Salut</h1>
                    </Route>
                    <Route path="/bonjour/2">
                        <h1>à</h1>
                    </Route>
                    <Route path="/bonjour/3">
                        <h1>tous</h1>
                    </Route>
                    <Route>
                        <h1>404</h1>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
