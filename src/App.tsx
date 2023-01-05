import Menu from "./components/Menu";
import Home from "./components/Home";
import "./styles/app.scss";
import CommonService from "./services/Common";

function App() {
  CommonService.findData("true").then((resp) => {
    console.log("resp", resp);
  });
  
  return (
    <div className="App">
      <Menu />
      <Home />
    </div>
  );
}

export default App;
