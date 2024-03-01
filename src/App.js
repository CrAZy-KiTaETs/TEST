import MainContent from "./components/main/MainContent.jsx";
import NavBar from "./components/nav/NavBar.jsx";
import './app.css'

function App() {
  return (
    <div className="main">
      <NavBar/>
      <MainContent />
    </div>
  );
}

export default App;
