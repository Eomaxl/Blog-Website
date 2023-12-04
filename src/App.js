import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";  
import './App.css';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <>
      <Navbar/>
    </>
  );
}

const appRouter = createBrowserRouter([
  {
      path:"/",
      element:<App/>     
  }
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter}/>);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
)