import { useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Routes from "configs/routes";
import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";

function App() {
  useEffect(() => {
    document.title = "Catty.";
  }, []);

  return (
    <Router>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </Router>
  );
}

export default App;
