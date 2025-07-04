'use client'
import React from "react";

const heroTags = [
  { label: "Shopping", active: true },
  { label: "Recips", active: false },
  { label: "Kitchen", active: true },
  { label: "News", active: false },
  { label: "Food", active: true },
];

const HeroSection = () => (
  <section className="hero-subscribe-section position-relative py-5">
    <div className="container">
      <div className="row align-items-center hero-subscribe-section-lg">
        {/* Left side */}
        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
          <div className="text-label mb-2">
            <span className="text-danger fw-bold">100%</span> Organic Vegetables
          </div>
          <h1 className="hero-title mb-3">The best way to<br />stuff your wallet.</h1>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
          </p>
          <form className="d-flex align-items-center gap-2 hero-subscribe-form">
            <div className="input-group rounded-pill bg-white shadow-sm overflow-hidden">
              <span className="input-group-text bg-white border-0">
                <i className="fa fa-envelope text-muted"></i>
              </span>
              <input className="form-control border-0" type="email" placeholder="Your email address" />
            </div>
            <button className="btn btn-success rounded-pill px-4" type="submit">Subscribe</button>
          </form>
        </div>
        {/* Right side */}
        <div className="col-lg-5 col-md-12 text-center position-relative">
          <div className="hero-tags d-flex justify-content-center gap-2 mb-4 flex-wrap">
            {heroTags.map((tag, idx) => (
              <button
                className={`btn hero-tag badge px-3 py-2 fs-6 rounded-pill shadow-sm hvr-float bg-white ${tag.active ? 'text-success border border-success' : 'text-muted border'}`}
                key={idx}
                type="button"
              >
                <i className="fa fa-times-circle text-muted me-1"></i>
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* Banner Image */}
    <div className="hero-subscribe">
      <img className="hero-lettuce" src="/client/images/banner.png" alt="banner" />
    </div>
    {/* Decorative images */}
    <img className="hero-decor1 floating" src="/client/images/decor4.png" alt="decor" />
    <img className="hero-decor2 floating" src="/client/images/decor2.png" alt="decor" />
    <img className="hero-decor3 floating" src="/client/images/decor3.png" alt="decor" />
    <img className="hero-decor4 floating" src="/client/images/decor1.png" alt="decor" />
  </section>
);

export default HeroSection;
