import React from "react";
import * as Styled from "./App.styled";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Details from "./pages/Details/Details";

const App: React.FC = () => {
  return (
    <Router>
      <Styled.App>
        <Styled.Header></Styled.Header>
        <Route exact path='/' render={() => <Redirect to='/details' />} />
        <Route exact path='/details' component={Details} />
        <Route render={() => <Redirect to='/details' />} />
      </Styled.App>
    </Router>
  );
};

export default App;
