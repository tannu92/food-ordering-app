import React , {lazy,Suspense,useEffect,useState} from 'react';
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

// chunking
// code spitting
// dynamic bundling
//lazy loading
// on demand loading
// dynamic loading

const Grocery= lazy(()=> import("./components/Grocery"))

const AppLayout=()=>{
  const[userName,setUserName]=useState("")

  useEffect(()=>{
    data={
      name:"Tannu"
    }
    setUserName(data.name)
  },[])
    return (
      <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
        <div className='app w-[100%]'>
        <Header/>
        <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body/>,
      },
      {
        path: '/about',
        element: <About/>,
        // children:[{
        //   path: 'profile',
        //   element: <Profile/>,
        // }]
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
      },
      {
        path: '/restaurants/:resId',    // Dynamic id
        element: <RestaurantMenu/>,
      }
    ],
    errorElement: <Error/>
  },
  
])

const root= ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter}/>)