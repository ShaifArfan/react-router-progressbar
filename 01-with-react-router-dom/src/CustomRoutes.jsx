import NProgress from 'nprogress'
import React, { useEffect, useState } from 'react'
import { Routes, useLocation, useNavigate } from 'react-router-dom'

function CustomRoutes({children}) {
   const [prevLoc, setPrevLoc] = useState("")
   const location = useLocation()
   NProgress.configure({ showSpinner: false });

   useEffect(() => {
      setPrevLoc(location.pathname)
      NProgress.start();
      if(location.pathname === prevLoc){
          setPrevLoc('')
      }
   }, [location])

   useEffect(() => {
      NProgress.done();
   }, [prevLoc])

   console.log({prevLoc,location:location.pathname})

  return (
    <>
    <Routes>
      {children}
    </Routes>
    </>
  )
}

export default CustomRoutes