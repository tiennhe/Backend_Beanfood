var express = require("express");
var router = express.Router();
var apiU = require("../controllers/user.controllers");
var apiOder = require("../controllers/orderControllers");
var apiHistory = require("../controllers/historyOrderController");
var apiVoucher = require("../controllers/voucher.controller");
var apiSlider = require("../controllers/slider.controller");
var apiDiscount = require("../controllers/discount.controller");
var apiComment = require("../controllers/comment.controller");

router.get("/users", apiU.listUser);
router.post("/users/register", apiU.register);
router.post("/users/login", apiU.login);

// đơn hàng
router.get("/order", apiOder.getOrders);
router.post("/add/order", apiOder.createOrder);

// lịch sủ mua hàng
router.get("/history", apiHistory.getHistoryOrder);
router.delete("/history/delete", apiHistory.deleteHistoryOrder);
router.get("/ordersByUser/:userId", apiHistory.getHistoryUserOrder);
//vouchers
router.get("/voucher/getAll", apiVoucher.getVouchers);
router.post("/voucher/create", apiVoucher.postVoucher);
//slider
router.get("/slider/getAll", apiSlider.getSliders);

//discount
router.get("/discount/getAll", apiDiscount.getDiscounts);

//comment
router.get("/comment/getAll", apiComment.getComment);
router.post("/comment/create", apiComment.postComment);

module.exports = router;
