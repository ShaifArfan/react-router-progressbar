import { BrowserRouter, Route } from "react-router-dom"
import About from "./About"
import CustomRoutes from "./CustomRoutes"
import Home from "./home"
import 'nprogress/nprogress.css';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <CustomRoutes>
               <Route exact path='/' element={<Home></Home>} />
               <Route exact path='/about' element={<About></About>} />
            </CustomRoutes>
         </BrowserRouter>
      </>
   )
}

export default App

