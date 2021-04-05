import React, { Suspense } from 'react';
import './App.css';
// import { Accessiblility } from './components/accessibility';
// import('./components/accessibility').then(math => {
//   console.log(math.Add(322, 330));
// });

const Accessiblility = React.lazy(() => import("./components/accessibility"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading.........</div>}>
        <Accessiblility />
      </Suspense>
    </div>
  );
}

export default App;