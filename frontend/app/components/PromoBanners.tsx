// components/PromoBanners.tsx
import React from "react";

export default function PromoBanners() {
  return (
    <div className="promo-banners my-2">
      <div className="promo-grid">
        <div className="row">
          <div className="col-lg-6">
            <div className="promo-banner bg-blue">
              <div className="promo-content">
                <div className="promo-badge">Flat 20% Discount</div>
                <div className="promo-title my-3">Purely Fresh<br />Vegetables</div>
                <a className="promo-btn" href="#">Shop Now</a>
              </div>
              <div className="promo-image"><img className="img-pr" src="http://127.0.0.1:5500/html/client/images/water.png" alt="Water Bottle" /></div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="promo-banner bg-yellow">
              <div className="promo-conten-b">
                <div className="promo-badge">Flat 25% Discount</div>
                <div className="promo-title my-3">Fresh Fruits<br />Pure Qualitty</div>
                <a className="promo-btn" href="#">Shop Now</a>
              </div>
              <div className="promo-image"><img className="img-pr" src="http://127.0.0.1:5500/html/client/images/coffe.png" alt="Coffee Beans" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
