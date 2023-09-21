import React from 'react'
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import './index.css'
import { App } from './pages/App';
import { HomeFeed } from './pages/HomeFeed';
import "./index.css"
import { Task } from './pages/Task';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index path="feed" element={<HomeFeed />}/> 
      <Route path='task' element={<Task/>}/>
      <Route path='*' element={<HomeFeed/>}/>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
