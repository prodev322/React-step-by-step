import './App.css';
import { Accessiblility } from './components/accessibility';
import('./components/accessibility').then(math => {
  console.log(math.Add(322, 331));
})

function App() {
  return (
    <div className="App">
      <Accessiblility />
    </div>
  );
}

export default App;