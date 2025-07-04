import React, { useState, useEffect } from "react";
import api from "@/lib/axios";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


interface Product {
  id?: string | number;
  images?: string;
  title?: string;
  name?: string;
  price?: number;
  badge?: string;
  badgeClass?: string;
  oldPrice?: number;
  sold?: string;
  progress?: number;
  brand?: string;
}

export default function BestSells() {
  const [bestSellProducts, setBestSellProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    // Sửa lại icon của Swiper thành FontAwesome
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');
    if (nextBtn && !nextBtn.querySelector('i')) {
      nextBtn.innerHTML = '<i class="fa fa-chevron-right"></i>';
    }
    if (prevBtn && !prevBtn.querySelector('i')) {
      prevBtn.innerHTML = '<i class="fa fa-chevron-left"></i>';
    }
  });

  useEffect(() => {
    setLoading(true);
    api
      .get("/products/cate/1")
      .then(res => {
        let data = [];
        if (Array.isArray(res.data)) {
          data = res.data;
        } else if (
          res.data &&
          typeof res.data === "object" &&
          "products" in res.data &&
          Array.isArray(res.data.products)
        ) {
          data = res.data.products;
        }
        setBestSellProducts(data);
        setError("");
      })
      .catch(err => {
        setBestSellProducts([]);
        setError("Có lỗi xảy ra khi tải sản phẩm!");
        console.error(err);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  

  return (
    <div className="section-best-sells">
      <div className="row g-3 my-2">
        {/* Banner desktop */}
        <div className="col-lg-2 d-none d-lg-block h-100 wow fadeInLeft">
          <div className="promo-banner">
            <img className="img-fluid rounded" src="http://127.0.0.1:5500/html/client/images/water.png" style={{ height: "418px" }} />
          </div>
        </div>
        {/* Tên danh mục mobile */}
        <div className="col-12 d-block d-lg-none mb-2">
          <h5 className="fw-bold text-success">Category: Sản phẩm dinh dưỡng</h5>
        </div>
        {/* Danh sách sản phẩm dạng slide */}
        <div className="col-12 col-lg-10">
          {loading ? (
            <div className="text-center w-100 py-5">
              <span className="spinner-border spinner-border-sm"></span> Đang tải sản phẩm...
            </div>
          ) : error ? (
            <div className="text-danger w-100 text-center">{error}</div>
          ) : bestSellProducts.length === 0 ? (
            <div className="w-100 text-center">Không có sản phẩm nào!</div>
          ) : (
            <Swiper
              spaceBetween={24}
              slidesPerView={2}
              breakpoints={{
                576: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                992: { slidesPerView: 4 }
                
              }}
              modules={[Navigation]}
              navigation
              // Nếu muốn thêm navigation: import Navigation từ 'swiper' và dùng navigation
              // navigation
            >
              {bestSellProducts.map((item, idx) => (
                <SwiperSlide key={item.id ?? idx}>
                  <ProductCard
                    images={item.images || "/default.png"}
                    title={item.title || item.name || "No title"}
                    price={item.price ?? 0}
                    badge={item.badge}
                    badgeClass={item.badgeClass}
                    oldPrice={item.oldPrice}
                    sold={item.sold}
                    progress={item.progress}
                    brand={item.brand}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}
