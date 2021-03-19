import "./App.css";
import { Header } from './components/header.component';
import { loadCSS } from "fg-loadcss";
import React from 'react';
import { NavigationBar } from "./components/navbar.component";
import { Switch, Route } from "react-router-dom";
import { HomePage } from './pages/homepage.component';
import { PostPage } from './pages/post-page.component';

function App() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <NavigationBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/posts/:slug' component={PostPage} />
      </Switch>
    </div>
  );
}

export default App;
