import React from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import cart from '../../assets/cart.jpg'
const Dashboard = () => {
  return (
   <>
   <div className='w-full p-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between'>
    <div className='info'>
       <h1 className='text-[35px] font-bold leading-10 mb-3'>Good Morning,<br /> Cameron </h1>
       <p>Here's What happening on your store today. See the statistics at once.</p>
    </div>
  <img src={cart} alt="Cart" className="w-[300px]" />
   </div>
    <DashboardBoxes/>
 
   </>
  )
}

export default Dashboard
