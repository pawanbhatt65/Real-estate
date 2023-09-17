import { Fragment } from "react";
import AgentDetails from "./components/AgentDetails/AgentDetails";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Location from "./components/Location/Location";
import Header from "./components/Navbar/Header";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
import PropertyGallery from "./components/PropertyGallery/PropertyGallery";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <PropertyDetails />
      <AgentDetails />
      <PropertyGallery />
      <Location />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
