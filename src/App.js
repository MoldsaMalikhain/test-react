import './css/App.css';
import Panel from './js/components/Panel';
import Header from './js/components/Header'
import Cart from './js/components/Cart'



function App() {
  return (
    <div className="App">
      <Header/>
      <Cart/>
      <div>
        <Panel/>
      </div>
    </div>
  );
}

export default App;
