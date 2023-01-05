import { useState } from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { useDebounce } from "./hooks/useDebounce";
import "./styles/app.scss";

function App() {
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  const { data, isLoading } = useDebounce(searchVal, 1000);

  console.log("data", data);
  console.log("isLoading", isLoading);

  const handleShowSearchContainer = () => {
    setShowSearchContainer(!showSearchContainer);
  };

  const onSearch = (val: string) => {
    setSearchVal(val);
  };

  return (
    <div className="App">
      <Menu
        showSearchContainer={showSearchContainer}
        handleShowSearchContainer={handleShowSearchContainer}
        onSearch={onSearch}
      />
      <Home data={data} />
    </div>
  );
}

export default App;
