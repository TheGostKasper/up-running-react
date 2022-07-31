import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDetails from "./components/Games/GameDetails";
import GameWrapper from "./components/Games/GameWrapper";

import Header from "./components/Header";
import Missions from "./components/missions-components/Missions";
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
  return (
    <Router>
      <Header title="Users"></Header>
      <div className="container mission-wrapper mt-5 ">
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
