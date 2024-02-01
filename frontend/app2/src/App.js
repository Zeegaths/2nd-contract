import Resgistry from "./Resgistry";

function App() {
  const contractAddress = "0x39aBE5265d9839b6342f6D93f62fbfb59ebcE48C";  

  return (
    <div className="App">
      <Resgistry contractAddress={contractAddress}/>
    </div>
  );
}

export default App;
      


