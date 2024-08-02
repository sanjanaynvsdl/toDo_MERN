// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import Login from './Components/Login';
// import Register from './Components/Register';
// import TodoList from './Components/TodoList';
// import './Components/Auth.css'; 
// import ProtectedRoute from './Components/ProtectedRoute'; 

// const App = () => {
//   const handleLogin = () => {
//     // Logic to handle login, e.g., updating state or redirecting
//     console.log('User logged in');
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/register" element={<Register />} />
//           {/* <Route path="/todo" element={<TodoList />} /> */}
//           {/* <ProtectedRoute path="/todo" element={<TodoList />} /> */}
//           {/* <ProtectedRoute path="/todo" element={<TodoList />} /> */}
//           <Route path="/" element={<Navigate to="/login" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import TodoList from './Components/TodoList'; // Assuming you have this component
import './Components/Auth.css'; // Import the CSS
import ProtectedRoute from './Components/ProtectedRoute'; // Import ProtectedRoute component

const App = () => {
  const handleLogin = () => {
    // Logic to handle login, e.g., updating state or redirecting
    console.log('User logged in');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/todo"
            element={<ProtectedRoute element={<TodoList />} />}
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


