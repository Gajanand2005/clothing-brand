import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListing from "./Pages/ProductListing/index.jsx";
import Home from "./Pages/Home/index.jsx";
import ProductDetails from "./Pages/ProductDetails/index.jsx";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductZoom from "./components/ProductZoom/index.jsx";
import { IoClose } from "react-icons/io5";
import ProductDetailsComponent from "./components/ProductDetails/index.jsx";
import Login from "./Pages/Login/index.jsx";
import Register from "./Pages/Register/index.jsx";
import Drawer from '@mui/material/Drawer';
import CartPanel from "./components/CartPanel/index.jsx";

const MyContext = createContext();

const App = () => {
  const [openProductDetailsModal, setOpenProductDetailsModel] = useState(false);
  const [maxWidth, setMaxWidth] = useState("lg");
  const [fullWidth, setFullWidth] = useState(true);
  const [openCartPanel, setOpenCartPanel] =useState(false)

  const handleCloseProductDetailsModal = () => {
    setOpenProductDetailsModel(false);
  };

  const toggleCartPanel = (newOpen)=>()=>{
    setOpenCartPanel(newOpen);
  }

  const value = {
    setOpenProductDetailsModel,
    setOpenCartPanel,
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={value}>
          <Header />
          <Routes>
            <Route path={"/"} exact={true} element={<Home />} />
            <Route
              path={"/productListing"}
              exact={true}
              element={<ProductListing />}
            />
            <Route
              path={"/product/:id"}
              exact={true}
              element={<ProductDetails />}
            />
            <Route path={"/login"} exact={true} element={<Login />} />
            <Route path={"/register"} exact={true} element={<Register />} />
          </Routes>
          <Footer />
        </MyContext.Provider>
      </BrowserRouter>
      <Dialog
        open={openProductDetailsModal}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseProductDetailsModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="productDetailsModal"
      >
        <DialogTitle id="alert-dialog-title">
          <div className="flex items-center w-full productDetailsModalContainer relative ">
            <Button
              className="!w-[40px] !h-[40px] min-w-[40px] !rounded-full !text-[#000] !absolute top-[0px] right-[0px] "
              onClick={handleCloseProductDetailsModal}
            >
              <IoClose className="text-[20px]" />
            </Button>
            <div className="col1 w-[40%] px-3">
              <ProductZoom />
            </div>

            <div className="col2 w-[60%] py-8 px-8">
              <ProductDetailsComponent />
            </div>
          </div>
        </DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
      {/* cart panel */}
    <Drawer open={open} onClick={toggleCartPanel(false)} anchor={"right"} className="cartPanel">
       <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[#000]">
        <h4>Shopping Cart (1)</h4>
        <IoClose className="text-[20px] cursor-pointer" onClick={toggleCartPanel(false)}/>
       </div>

        <CartPanel/>

      </Drawer>

    </>
  );
};

export default App;
export { MyContext };
