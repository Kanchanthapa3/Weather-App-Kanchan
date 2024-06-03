import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import CurrentWeather from "./pages/CurrentWeather";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<>Hello</>} />
      <Route path="/current-weather" element={<CurrentWeather/>} />
      <Route path="/forecast" element={<>Hi</>} />


    </Routes>
    </>    
  );
}

export default App;