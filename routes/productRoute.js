import express from "express";
import { isAdmin, requireSignIn } from "../middleares/authMiddleware.js";
import {
  UpdateProductController,
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getProductPhotoController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  relatedProductController,
  searchProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//update product
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  UpdateProductController
);

//get product
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get-photo
router.get("/product-photo/:pid", getProductPhotoController);

//delete-product
router.delete("/delete-product/:pid", deleteProductController);

//filter product
router.post("/product-filters", productFilterController);

//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payment route token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, braintreePaymentController);
export default router;
