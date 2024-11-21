import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Service from '../components/Service';


const Router = () => {
  return (
    <div>

         <Routes>
          <Route path="Service" element={<Service/>} />
        </Routes>
    </div>
  )
}

export default Router