import { Container } from "react-bootstrap";
import Hypotenuse from './pages/Hypotenuse';
import CircleArea from './pages/CircleArea';
import SphereArea from './pages/SphereArea';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/hypotenuse">
            <Hypotenuse />
          </Route>
          <Route path="/circle-area">
            <CircleArea />
          </Route>
          <Route path="/sphere-area">
            <SphereArea />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
