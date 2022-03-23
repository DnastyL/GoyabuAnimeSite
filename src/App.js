import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router} from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <Router>
      <section>
        <Header />
        <AppRoutes />
        <Footer />
      </section>
    </Router>
  );
};
export default App;
