import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

const Home = () => {
  return <h1>Strona startowa </h1>;
};

const News = () => {
  return <h1>Aktualności</h1>;
};

const Contact = () => {
  return <h1>Kontakt do nas</h1>;
};

const ErrorPage = () => {
  return <h1>Strona nie istnieje</h1>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    exect="true"
                    className={({ isActive }) =>
                      isActive ? "home_selected" : "inactive"
                    }
                  >
                    Start
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/news"
                    className={({ isActive }) =>
                      isActive ? "news_selected" : "inactive"
                    }
                  >
                    Aktualności
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "contact_selected" : "inactive"
                    }
                  >
                    Kontakt
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <Routes>
              <Route path="/" exect="true" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
