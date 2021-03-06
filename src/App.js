// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    apikey={this.apikey}
                    key="general"
                    pageSize={12}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/Business"
                element={
                  <News
                    apikey={this.apikey}
                    key="business"
                    pageSize={12}
                    country="in"
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/Entertainment"
                element={
                  <News
                    apikey={this.apikey}
                    key="entertainment"
                    pageSize={12}
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/Health"
                element={
                  <News
                    apikey={this.apikey}
                    key="health"
                    pageSize={12}
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/Science"
                element={
                  <News
                    apikey={this.apikey}
                    key="science"
                    pageSize={12}
                    country="in"
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/Sports"
                element={
                  <News
                    apikey={this.apikey}
                    key="sports"
                    pageSize={12}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/Technology"
                element={
                  <News
                    apikey={this.apikey}
                    key="technology"
                    pageSize={12}
                    country="in"
                    category="technology"
                  />
                }
              />
              <Route
                exact
                path="/General"
                element={
                  <News
                    apikey={this.apikey}
                    key="general"
                    pageSize={12}
                    country="in"
                    category="general"
                  />
                }
              />
            </Routes>
          </div>
        </BrowserRouter>
      </>
    );
  }
}
