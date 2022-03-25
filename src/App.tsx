import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetails from "./components/Games/GameDetails";
import GameWrapper from "./components/Games/GameWrapper";

import Header from "./components/Header";
import Missions from "./components/missions-components/Missions";
import { LangContextProvider } from "./components/shared-components/lang-context";
import UserList from "./components/Users/User-list";
import UserDetails from "./components/Users/UserDetails";

const routes = [
  {
    path: "",
    element: (
      <main>
        <p>Home page</p>
      </main>
    ),
  },
  {
    path: "home",
    element: (
      <main>
        <p>Home page</p>
      </main>
    ),
  },
  {
    path: "users",
    element: <UserList />,
  },
  {
    path: `users/:id`,
    element: <UserDetails />,
  },
  {
    path: "missions",
    element: <Missions />,
  },
  {
    path: "games",
    element: <GameWrapper />,
  },
  {
    path: `games/:id`,
    element: <GameDetails />,
  },
  {
    path: "*",
    element: (
      <main style={{ padding: "1rem" }}>
        <p>There's nothing here!</p>
      </main>
    ),
  },
];

function App() {
  const [lang, setLang] = useState("en");
  const switchLang = (lng: string) => {
    if (lng !== lang) {
      setLang(lng);
    }
  };
  return (
    <Router>
      <Header title="Users"></Header>
      <LangContextProvider lang={lang}>
        <div className="container mission-wrapper ">
          <div className="d-flex mt-5  w-100">
            <button
              className={`btn ${lang === "en" ? "active" : "default"}`}
              onClick={() => switchLang("en")}
            >
              English
            </button>
            <button
              className={`btn ml-4 ${lang === "es" ? "active" : "default"}`}
              onClick={() => switchLang("es")}
            >
              Spanish
            </button>
          </div>
          <Routes>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Routes>
        </div>
      </LangContextProvider>
    </Router>
  );
}

export default App;
