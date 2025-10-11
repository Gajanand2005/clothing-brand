import React from 'react'
import DashboardBoxes from '../../Components/DashboardBoxes'
import cart from '../../assets/cart.jpg'

import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
    <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
    
    <div className='flex items-center justify-between px-5 py-5 '>
      <h2 className='text-[18px] font-[600]'>Products </h2>
    </div>
   
<div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                  <Checkbox {...label} />
                </th>
                <th scope="col" class="px-6 py-3">
                    Product
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Sub Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Brand
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                 <th scope="col" class="px-6 py-3">
                    Rating
                </th>
                 <th scope="col" class="px-6 py-3">
                    Action 
                </th>
            </tr>
        </thead>
        <tbody>
           <tr className='odd:bg-white  dark:border-gray-700'>
             <td scope="col" class="px-6 py-3">
                  <Checkbox {...label} />
                </td>
           </tr>
        </tbody>
    </table>
</div>



    </div>

  {/* make a order table using mY order video number 21, 22 */}
     <div className='card my-4 shadow-md sm:rounded-lg bg-white'>
    <div className='flex items-center justify-between px-5 py-5 '>
      <h2 className='text-[18px] font-[600]'>Recent Orders</h2>
    </div>
  
<div class="relative overflow-x-auto ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                   order id
                </th>
                <th scope="col" class="px-6 py-3">
                    Customer
                </th>
                <th scope="col" class="px-6 py-3">
                    Items
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Created
                </th>
                <th scope="col" class="px-6 py-3">
                    Modeified
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white  border-b  ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white  border-b  ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white  border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white  border-b ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white  border-b" >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>



    </div>
   </>
  )
}

export default Dashboard
