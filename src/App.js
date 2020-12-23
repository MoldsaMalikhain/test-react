import './css/App.css';
import Panel from './js/components/Panel';
import Header from './js/components/Header'
import Cart from './js/components/Cart'



function App() {
  return (
    <div className="App">
      <header><p>Shopping Cart</p></header>
      <main>
        <div className = 'content'>
          <div className='main-content'>
            <Panel/>
          </div>
          <div className = 'sidebar'>
            Cart Items
          </div>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
