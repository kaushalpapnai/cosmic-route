import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sattelite from "./components/Sattelite";
import SpaceTourConatainer from "./components/SpaceTourConatainer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <SpaceTourConatainer/>
      <Sattelite/>
    </div>
  );
}

export default App;
