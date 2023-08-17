import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import About from './pages/About';
// import BlogPosts from './pages/BlogPosts';
// import Dashboard from './pages/Dashboard';
// import Ecuations from './pages/Ecuations';
// import Home from "./pages/Home";
// import Candidato from "./components/Candidato";
import Listado from "./pages/Listado";
import Gestion from "./pages/Gestion";
import NotFound from "./pages/NotFound";


// import ManageFiles from "./pages/ManageFiles";
import Navbar from "./components/Navbar";
// import Preferences from './pages/Preferences';
// import Users from './pages/Users';
// import User from './pages/User';
// import IngresandoValor from './pages/IngresandoValor';


// import Login from './pages/Login';
// import Logout from './pages/Logout';

// import logo from './logo.svg';
// import './App.css';
import './normalize.css';

// import { InputText } from 'primereact/inputtext';

function App() {
  // const [value, setValue] = useState('');
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Gestion />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/blogposts" element={<BlogPosts />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/ecuations" element={<Ecuations />} /> */}
        {/* <Route path="/escribir" element={<IngresandoValor />} /> */}
        {/* <Route path="/candidato" element={<Candidato />} /> */}
        <Route path="/listado" element={<Listado />} />
        <Route path="/gestion" element={<Gestion />} />

        {/* <Route path="/managefiles" element={<ManageFiles />} /> */}
        {/* <Route path="/users" element={<Users />} /> */}
        {/* <Route path="/user" element={<User />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
        {/* <Route path="/preferences" element={<Preferences />} /> */}
        <Route component={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
