// import logo from './logo.svg';
import './App.css';

function App() {

  (async()=>{
    const url = await fetch("https://sunglasses-dugong.cyclic.app/")
    const data = await url.json()
    console.log(data)
  })()

  return (
    <div className="App">
      hello world
    </div>
  );
}

export default App;
