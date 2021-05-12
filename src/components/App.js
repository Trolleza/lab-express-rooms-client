import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RoomFeed from "../routes/RoomFeed";
import Navbar from "./Navbar";
import RoomCreate from "../routes/RoomCreate";

function App() {
  return (
    <div className="container mt-5">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={RoomFeed} />
          <Route exact path="/create" component={RoomCreate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
