import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductZoom from "../../components/ProductZoom";
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox";

const ProductDetails = () => {

const [productActionIndex, setProductActionIndex]= useState(null);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Fashion
            </Link>
            <Link underline="hover" color="inherit" className="link transition">
              Cropped Satin Bomber jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5">
        <div className="container flex gap-9">
          <div className="productZoomContainer w-[40%] ">
            <ProductZoom />
          </div>

          <div className="productContent w-[60%] ">
            <h1 className="text-[24px] font-[600] !mb-2">
              Chikankari Woven Kurta
            </h1>
            <div className="flex items-center gap-3 text-[13px]">
              <span className="text-gray-400">
                Brand :{" "}
                <span className="font-[500] text-black opacity-75">
                  S-Mal Couture
                </span>
              </span>
            </div>
            <div className="flex items-center gap-4 py-1 !mt-4">
              <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
                $58.00
              </span>
              <span className="oldPrice text-orange-600 font-bold text-[20px]">$12.00</span>

            <span className="text-[15px]" >Available In Stock: <span className="text-green-600 text-[15px] font-[600]">147 Items</span></span>

            </div>
            
            <p className="!mt-2 pr-10 !mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit repellendus sit ad aspernatur officiis, recusandae
              est libero dolorum, esse vel earum laudantium ducimus, obcaecati
              quisquam odio quasi non placeat numquam.
            </p>
            <div className="flex items-center gap-3">
            <span className="text-[16 px]">Size :</span>
            <div className="flex items-center gap-1 actions">
              <Button className={`${productActionIndex === 0 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(0)} >XS</Button>
              <Button className={`${productActionIndex === 1 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(1)}>S</Button>
              <Button className={`${productActionIndex === 2 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(2)}>M</Button>
              <Button className={`${productActionIndex === 3 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(3)}>L</Button>
              <Button className={`${productActionIndex === 4 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(4)}>XL</Button>
              <Button className={`${productActionIndex === 5 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(5)}>2XL</Button>
              <Button className={`${productActionIndex === 6 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(6)}>3XL</Button>
              <Button className={`${productActionIndex === 7 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(7)}>4XL</Button>
              <Button className={`${productActionIndex === 8 ? '!bg-orange-600 !text-white': ''}`} onClick={()=>setProductActionIndex(8)}>5XL</Button>
            </div>
            </div>

          <div className="flex items-center">
            <div className="qtyBoxWrapper">
              <QtyBox/>
            </div>
          </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
