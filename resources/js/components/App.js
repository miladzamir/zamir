import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Footer from "./Footer";
import BlogList from "./pages/BlogList";
import Index from "./Index";
import Header from "./Header";
import About from "./pages/About";
import BlogPost from "./pages/BlogPost";

function App() {
    return (
        <Router>

            <Header/>

            <div className="main-wrapper">
                <Switch>
                    <Route path="/" exact={true}>
                        <Index />
                    </Route>
                    <Route path="/BlogList" exact={true}>
                        <BlogList />
                    </Route>
                    <Route path="/About" exact={true}>
                        <About />
                    </Route>
                    <Route path="/BlogPost" exact={true}>
                        <BlogPost />
                    </Route>
                </Switch>

                <Footer/>
            </div>

        </Router>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
