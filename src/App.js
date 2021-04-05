import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import { Accessiblility } from './components/accessibility';
// import('./components/accessibility').then(math => {
//   console.log(math.Add(322, 330));
// });

const List = React.lazy(() => import("./components/list"));
const Home = React.lazy(() => import("./components/home"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading.........</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/List" component={List} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;