import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Statics from "./components/Statics";
import Pump from "./components/Pump"
import Feedbacks from "./components/Feedbacks";
import Howitsworks from "./components/Howitsworks";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Backtotop from "./components/Backtotop";
import { Lines } from "react-preloaders";
function App() {
  return (
    <>
      <Header />
      <Statics />
      <Pump />
      <Feedbacks />
      <Howitsworks />
      <About />
      <Faqs />
      <Backtotop />
      {/* <Lines background="#f7f7f7" />; */}
    </>
  );
}

export default App;
