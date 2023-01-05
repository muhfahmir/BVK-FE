import { useEffect } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "components/organisms/Footer";
import Routes from "configs/routes";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    document.title = "Catty.";
    Aos.init({ once: true });
  }, []);

  return (
    <Router>
      <Route
        render={(props) => (
          <>
            <Routes {...props} />
            <Footer />
          </>
        )}
      />
    </Router>
  );
}

export default App;
