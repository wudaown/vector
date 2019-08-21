import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { CssBaseline } from "@material-ui/core";
import { Route, BrowserRouter, Redirect } from "react-router-dom";
import Login from "./common/login";
import Header from "./common/header";
import New from "./common/new";

import store from "./store";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <React.Fragment>
      <Provider store={store}>
        <CssBaseline />
        <BrowserRouter>
          <Header />
          <New />
          {/* <Route exact path="/login" component={Login} />
          {!isAuthenticated ? (
            <Route exact path="/new" component={New} />
          ) : (
              <Redirect to="/login" />
            )} */}
        </BrowserRouter>
      </Provider>
    </React.Fragment>
  );
}

export default App;
