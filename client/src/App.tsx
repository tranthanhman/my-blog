import './index.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '~layouts/MainLayout';
import Home from '~pages';
import NoMatch from '~pages/404';
import About from '~pages/about';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
