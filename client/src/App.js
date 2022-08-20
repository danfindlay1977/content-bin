import "./App.css";
import { Route, Routes } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { Wrapper } from "./components/Wrapper";
import { ExampleHaeder } from "./components/ExampleHeader";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <ExampleHaeder />
      <Wrapper>
        <Main />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
