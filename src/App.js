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
import ContactUs from './pages/solar_components/Contact/ContactUs';
import Services from './pages/solar_components/Services/Services';
import ReCalculate from './pages/solar_components/Solar_Calculator/ReCalculate';
import Careers from './pages/solar_components/Careers/Careers';
import Home from './pages/solar_components/Home/Home';
import OurTeam from './pages/solar_components/OurTeam/OurTeam';
import EarnWithUs from './pages/solar_components/EarnWithUS/EarnWithUs';

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
          path: '/home',
          element: <Home />
        }
        ,
        {
          path: '/about',
          element: <About />
        }
        ,
        {
          path: '/contact',
          element: <ContactUs />
        }
        ,
        {
          path: '/services',
          element: <Services />
        }
        ,
        {
          path: '/earnwithus',
          element: <EarnWithUs />
        }
        ,
        {
          path: '/recalculate',
          element: <ReCalculate />
        }
        ,
        {
          path: '/ourteam',
          element: <OurTeam />
        }
        ,
        {
          path: '/careers',
          element: <Careers />
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
          element: <DashboardIndex />,
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
  return <RouterProvider router={router} />

}

export default App;
