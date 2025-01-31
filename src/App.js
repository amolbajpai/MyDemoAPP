import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './screens/About';
import Contact from './screens/Contact';
import Register from './screens/Register';
import UserList from './screens/UserList';
import ToDo from './screens/ToDo';
import NavBar from './components/NavBar';



const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { index: true, element: <Register /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "users", element: <UserList /> },
      { path: "todo", element: <ToDo /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;