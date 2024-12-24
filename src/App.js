import React from 'react';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Index from './pages/solar_components/Index/Index';
import About from './pages/solar_components/About/About'; // Import About component
import SolarCalculator from './pages/solar_components/Solar_Calculator/SolarCalculator';
import DashboardLogin from './pages/dashboard/DashboardLogin';
import Landing from './pages/solar_components/Landing';
import SignUp from './pages/dashboard/SignUp';
import DashboardLayout from './pages/dashboard/DashboardLayout'
import DashboardIndex from './pages/dashboard/DashboardIndex';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
      children: [
        {
          index: true,
          element: <Index />
        },
        {
          path: '/about',
          element: <About />
        }
        ,
        {
          path: '/solar_calculator',
          element: <SolarCalculator />
        }
      ]
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <DashboardIndex/>,
        },
        
      ]
    },
    {
      path: '/dashboardlogin', // Route for the SignIn page
      element: <DashboardLogin />,
    },
    { 
      path: '/signup', // Route for the SignIn page
      element: <SignUp />,
    },
    
  ])
  return  <RouterProvider router={router} />
   
}

export default App;
