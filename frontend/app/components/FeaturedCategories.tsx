// components/FeaturedCategories.tsx
import React from "react";

const categories = [
  { img: "/images/cake-milk.png", name: "Cake & Milk", count: 26, className: "bg-yellow" },
  { img: "/images/kiwi.png", name: "Organic Kiwi", count: 28, className: "bg-orange" },
  { img: "/images/peach.png", name: "Peach", count: 14, className: "bg-green" },
  { img: "/images/red-apple.png", name: "Red Apple", count: 54, className: "bg-pink" },
  { img: "/images/snack.png", name: "Snack", count: 56, className: "bg-yellow" },
  { img: "/images/vegetables.png", name: "Vegetables", count: 72, className: "bg-purple" },
  { img: "/images/strawberry.png", name: "Strawberry", count: 36, className: "bg-green" },
  { img: "/images/black-plum.png", name: "Black plum", count: 123, className: "bg-pink" },
  { img: "/images/custard-apple.png", name: "Custard apple", count: 34, className: "bg-yellow" },
  { img: "/images/coffee-tea.png", name: "Coffe & Tea", count: 89, className: "bg-pink" },
];

export default function FeaturedCategories() {
  return (
    <div className="section-featured-categories">
      <div className="featured-categories-header">
        <h2 className="featured-categories-title">Featured Categories</h2>
        <div className="featured-categories-tabs">
          <span className="tab-item active">Cake & Milk</span>
          <span className="tab-item">Coffes & Teas</span>
          <span className="tab-item">Pet Foods</span>
          <span className="tab-item">Vegetables</span>
        </div>
        <div className="featured-categories-nav">
          <button className="nav-btn left"><i className="icon-arrow-left"></i></button>
          <button className="nav-btn right"><i className="icon-arrow-right"></i></button>
        </div>
      </div>
      <div className="featured-categories-list">
        {categories.map((cat, idx) => (
          <div key={idx} className={`featured-category-item ${cat.className}`}>
            <img src={cat.img} alt={cat.name} />
            <div className="category-name">{cat.name}</div>
            <div className="category-count">{cat.count} items</div>
          </div>
        ))}
      </div>
    </div>
  );
}
