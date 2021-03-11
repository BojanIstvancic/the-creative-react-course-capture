import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          {/* exact - render this route if the path is EXACTLY THE SAME - not /work or /contact */}
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
      {/* Switch renders just one route per page - first one that matches the URL */}
    </div>
  );
}

export default App;
