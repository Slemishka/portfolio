import React from "react";
import Layout from './layout/Layout/Layout';
import Home from "./containers/Home/Home";
import { Route, Switch } from 'react-router-dom';
import ContactMe from "./containers/ContactMe/ContactMe";
import Projects from "./containers/Projects/Projects";


function App() {

  return (
    <div>
      <Layout>
          <Switch>
              <Route path={'/'} exact component={Home}/>
              <Route path={'/contact'} component={ContactMe} />
              <Route path={'/projects'} component={Projects}/>
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
