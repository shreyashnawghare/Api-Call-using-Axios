import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import "./sb-admin-2.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardsPage from "./CardsPage";
import ColorsPage from "./ColorsPage";
import Borders from "./Borders";
import ChartsPage from "./ChartsPage";
import PostsTable from "./PostsTable";
import UsersTable from "./UsersTable";
function App() {
  return (
    <>
      <div id="wrapper">
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Dashboard />} />
            <Route exact path="/cards" render={() => <CardsPage />} />
            <Route path="/colors" render={() => <ColorsPage />} />
            <Route path="/borders" render={() => <Borders />} />
            <Route path="/charts" render={() => <ChartsPage />} />
            <Route path="/table" render={() => <PostsTable />} />
            <Route path="/users" render={() => <UsersTable />} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
