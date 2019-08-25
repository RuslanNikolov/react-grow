import React from "react";
import * as SC from "./App.styled";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <Router>
      <SC.RootApp>
        <Header />
        <Route exact path='/' render={() => <Redirect to='/details' />} />
        <Route exact path='/details' component={Details} />
        <Route render={() => <Redirect to='/details' />} />
      </SC.RootApp>
    </Router>
  );
};

export default App;
