// components/NewsletterBanner.tsx
import React from "react";

const NewsletterBanner = () => (
  <section className="newsletter-banner py-5" data-aos="fade-up">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-7">
          <h2 className="fw-bold">Stay home & get your daily<br />needs from our shop</h2>
          <p className="mb-4">Start your shopping with DalatGap Store!</p>
          <form className="d-flex gap-2">
            <input className="form-control rounded-pill shadow-sm" placeholder="Your email address" type="email" />
            <button className="btn btn-success rounded-pill" type="submit">Subscribe</button>
          </form>
        </div>
        <div className="col-lg-5 text-center">
          <img src="/client/images/girl.png" alt="Newsletter" className="img-fluid floating" style={{ maxWidth: 320 }} />
        </div>
      </div>
    </div>
  </section>
);
export default NewsletterBanner;
