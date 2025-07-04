// components/ProductCard.tsx
import React from "react";

export default function ProductCard(props: {
  images: string;
  badge?: string;
  badgeClass?: string;
  title: string;
  price: number;
  oldPrice?: number;
  brand?: string;
  category?: string;
  rating?: number;
  sold?: string;
  progress?: number;
}) {
  // Tính rating sao (làm tròn 1 số thập phân, mặc định 4 nếu chưa có)
  const rating = props.rating ?? 4.0;
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<i className="fa fa-star filled" key={i} />);
    } else {
      stars.push(<i className="fa fa-star" key={i} />);
    }
  }

  return (
    <div className="product-card selected">
      {/* Badge */}
      {props.badge && (
        <div className={`badge ${props.badgeClass || "badge-hot"}`}>{props.badge}</div>
      )}
      {/* Image */}
      <div className="product-img">
        <img src={props.images } alt={props.title} />
      </div>
      {/* Info */}
      <div className="product-info">
        <div className="category">{props.category || "Category"}</div>
        <div className="name">{props.title}</div>
        <div className="brand">
          By <span className="brand-name">{props.brand || "Brand"}</span>
        </div>
        <div className="price-row">
          <div className="price">${props.price}</div>
          {props.oldPrice && <div className="old-price">${props.oldPrice}</div>}
        </div>
        <div className="rating">
          {stars}
          <span className="rating">{rating}</span>
        </div>
        {props.sold && <div className="sold">Sold: {props.sold}</div>}
        {props.progress !== undefined && (
          <div className="progress">
            <div className="progress-bar" style={{ width: `${props.progress}%` }}></div>
          </div>
        )}
      </div>
      {/* Add to cart */}
      <div className="add-cart-row">
        <button className="add-cart">
          Thêm vào giỏ hàng 
        </button>
      </div>
    </div>
  );
}
