import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider"; // Ensure useAuth is correct

function App() {
  const [authUser, setAuthUser] = useAuth();  // Ensure useAuth works properly
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster /> {/* No changes to the Toaster position */}
      </div>
    </>
  );
}

export default App;






