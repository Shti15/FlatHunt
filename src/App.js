import Navbar from "./components/Navbar";
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Body from "./components/Body";
import About from "./components/About";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  );
}
export const AppRouter=createBrowserRouter([
      {
        path:"/",
        element:<App/>,
        children:[
          {
            path:"/",
            element:<Body/>
          },
          {
            path:"/about",
            element:<About/>
          },
          {
            path:"/services",
            element:<Services/>
          },
          {
            path:"/blog",
            element:<Blog/>
          },
          {
            path:"/pricing",
            element:<Pricing/>
          },
          {
            path:"contact",
            element:<Contact/>
          }

        ]
      }
      
])


export default App;
