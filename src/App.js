import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
// Global Style
import GlobalStyle from "./components/GlobalStyle";
// Router
import { Switch, Route, useLocation } from "react-router-dom";
// Animation
import { AnimatePresence } from "framer-motion";
/* 
  it allows the animation when the component unmounts
  wrap <Switch> in <AnimatePresence>
  framer motion requires location and key to animate the page -> thats why we can use useLocation() function
  exitBeforeEnter -> property - which says to start animate another component when the first one finishes with the animation
 */

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            {/* exact - render this route if the path is EXACTLY THE SAME - not /work or /contact */}
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            {/* :id - dynamic text */}
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
        {/* Switch renders just one route per page - first one that matches the URL */}
      </AnimatePresence>
    </div>
  );
}

export default App;
