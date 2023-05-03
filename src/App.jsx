import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { ArticleText } from "./components/article/Article";

function App() {
  return (
    <>
      <NavBar />
      <h1>Header</h1>
      <ArticleText />
    </>
  );
}

export default App;
