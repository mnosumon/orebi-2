import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import RouteLayout from './layout/RouteLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Journal from './pages/Journal';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route element={<RouteLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/journal' element={<Journal/>}/>
        </Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router}/>
  )
}

export default App