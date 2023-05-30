import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
              <a href="#" className="btn btn-info">
                Hello
              </a>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}
export default App;
