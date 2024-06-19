import RemotePage from 'poc_remote_a/page';
import LoginPage from 'poc_login/page';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import React from 'react';

function Layout() {
  return (
    <div className="bg-yellow-400">
      <nav>
        <ul className="flex flex-row gap-5">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/remote">remote</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  const token = sessionStorage.getItem('token');
  if (!token) {
    return (
      <div className="h-screen bg-teal-600">
        <Routes>
          <Route path="*" element={<LoginPage React={React} />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="bg-blue-500 p-10 h-screen">
      HOST APP
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route path="remote" element={<RemotePage />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
