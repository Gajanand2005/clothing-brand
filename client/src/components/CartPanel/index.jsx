import React from 'react'

const CartPanel = () => {
  return (
    <>
       <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4" >
        <div className="cartItem w-full flex items-center gap-4">
          <div className="img w-[30%]">
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/70-home_default/mug-today-is-a-good-day.jpg" alt="" className="w-full"/>
          </div>
          <div className="info w-[70%]">
            <h4>A-line Kurti </h4>
          </div>
        </div>
      </div> 
    </>
  )
}

export default CartPanel
