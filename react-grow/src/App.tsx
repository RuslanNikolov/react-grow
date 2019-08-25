import React from "react";
import * as S from "./App.styled";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <S.App>
      <Router>
        <Header />
        <Route exact path='/' render={() => <Redirect to='/details' />} />
        <Route exact path='/details' component={Details} />
        <Route render={() => <Redirect to='/details' />} />
      </Router>
    </S.App>
  );
};

export default App;
