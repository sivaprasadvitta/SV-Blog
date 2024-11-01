import React from 'react'
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';

export default function Dashboard() {
  const location = useLocation();
  const [tab,setTab  ]=useState(0);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tab = urlParams.get('tab');
    // console.log(tab);
    if(tab){
      setTab(tab);
    }

  }, [location.search]); 

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className='md:w-56'>
        {/* side bar */}
        <DashSidebar/>
      </div>
      {/* profile */}
      {
        tab === 'profile' && <DashProfile/>
      }
    </div>
  )
}




// import React from 'react'

// function Dashboard() {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard
