import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/pageComponents/header";
import AboutPage from "./components/pages/about";
import { Box } from "@chakra-ui/react";
import Footer from "./components/pageComponents/footer";
import AtHome from "./components/pages/athome";
import AtWork from "./components/pages/atwork";
import AtHisBest from "./components/pages/athisbest";

function App() {
  return (
    <Box bg="gray.300" color="gray.100" minH="100vh">
      <Header />

      <Router>
        <Routes>
          <Route path="/" Component={AboutPage} />
          <Route path="/home" Component={AtHome} />
          <Route path="/carrear" Component={AtWork} />
          <Route path="/best" Component={AtHisBest} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;
