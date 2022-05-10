import React from "react";
import "./App.css";
import Market from "./pages/Market";
import Nav from "./Components/Nav";
import Portfolio from "./pages/Portfolio";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import News from "./pages/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./store/auth-context";
import { MarketDataProvider } from "./store/MarketData-Context";
import { ChartContextProvider } from "./store/Chart-Context";

function App() {
  return (
    <AuthProvider>
      <MarketDataProvider>
        <ChartContextProvider>
          <Router>
            <div style={{ backgroundColor: "#332e2d", minHeight: "100vh" }}>
              <Nav />
              <Switch>
                <Route path="/" exact component={Market} />
                <Route path="/crypto-watch" component={Market} />
                <Route path='/news' component={News} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
              </Switch>
            </div>
          </Router>
        </ChartContextProvider>
      </MarketDataProvider>
    </AuthProvider>
  );
}

export default App;
