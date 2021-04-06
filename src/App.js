import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import { Accessiblility } from './components/accessibility';
// import('./components/accessibility').then(math => {
//   console.log(math.Add(322, 330));
// });

const Navbar = React.lazy(() => import("./components/navbar"));
const Home = React.lazy(() => import("./components/home"));
const List = React.lazy(() => import("./components/list"));
const Context = React.lazy(() => import("./components/advanced_guides/context"));

function App() {
  return (
      <Router>
        <Suspense fallback={<div>Loading.........</div>}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/context" component={Context} />
          </Switch>
        </Suspense>
      </Router>
  );
}

export default App;