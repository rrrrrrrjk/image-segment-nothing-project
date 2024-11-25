import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Demo from './pages/Demo.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { Provider } from 'react-redux';
import { store } from './state/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFoundPage/>,
    children: [{
      path: '/',
      element: <Home/>
    },{
      path: '/demo',
      element: <Demo/>
    }]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
