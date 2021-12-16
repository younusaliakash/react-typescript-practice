import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Common/Header';
const Help = React.lazy(() => import('./Pages/Help/Help'));
const Home = React.lazy(() => import('./Pages/Home/Home'));

function App() {
  return (
    <>
      <Router>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
