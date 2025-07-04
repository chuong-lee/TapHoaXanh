// components/FlashSale.tsx
import React from "react";
import ProductCard from "./ProductCard";

const flashSaleProducts = [
  {
    img: "https://cdn.tgdd.vn/Files/2021/07/01/1364680/tg2_1280x720-800-resize.jpg",
    badge: "Save 35%",
    badgeClass: "bg-success",
    title: "All Natural Italian",
    price: 238.85,
    oldPrice: 245.8,
    sold: "90/120",
    progress: 75,
    brand: "Hodo Foods",
  },
  // ... các sản phẩm khác tương tự (lấy từ đoạn html gốc)
];

export default function FlashSale() {
  return (
    <div className="flash-sale-row my-1">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Banner bên trái */}
          <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <div className="flash-sale-banner bg-dark text-white rounded-4 p-4 h-100 d-flex flex-column justify-content-center align-items-start">
              <img className="mb-4 rounded-3" src="https://cdn.tgdd.vn/Files/2021/07/01/1364680/tg2_1280x720-800-resize.jpg" alt="Banner" style={{ width: "100%", maxWidth: "260px" }} />
              <h2 className="fw-bold mb-3">Bring nature<br />into your home</h2>
              <a className="btn btn-danger rounded-pill px-4 py-2 mt-3" href="#">Shop Now →</a>
            </div>
          </div>
          {/* Slider sản phẩm */}
          <div className="col-lg-9">
            <div className="flash-sale-slider position-relative">
              <button className="slick-prev custom-arrow" type="button"><i className="fa fa-chevron-left"></i></button>
              <button className="slick-next custom-arrow" type="button"><i className="fa fa-chevron-right"></i></button>
              <div className="flash-sale-track d-flex gap-3">
                {flashSaleProducts.map((item, idx) => (
                  <ProductCard key={idx} {...item} images={item.img} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
