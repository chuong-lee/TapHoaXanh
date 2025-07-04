// components/Footer.tsx
import React from "react";

const Footer = () => (
  <footer className="footer my-3 bg-white shadow-sm rounded-3">
    <div className="container">
      <div className="row">
        {/* Cột 1: Giới thiệu công ty */}
        <div className="footer-col company col-lg-3 mb-4 mb-lg-0">
          <h4>GIỚI THIỆU CÔNG TY</h4>
          <p className="footer-desc">
            Đà Lạt GAP là công ty đầu tiên tại Việt Nam xây dựng và duy trì hệ thống quản lý chất lượng tiêu chuẩn Toàn Cầu GlobalG.A.P (Global Good Agriculture Practice) từ năm 2008 đến nay - chứng nhận bởi tập đoàn Control Union - Hà Lan.
          </p>
          <ul className="footer-contact list-unstyled">
            <li><i className="fa fa-map-marker-alt me-2"></i>Chi nhánh CTY TNHH Thực Phẩm Sạch Dalat G.A.P.<br />403 Hai Bà Trưng, Phường Võ Thị Sáu, Quận 3, Tp. HCM</li>
            <li>MST : 0312080949</li>
            <li><i className="fa fa-phone me-2"></i>028 38 20 27 20</li>
            <li><i className="fa fa-envelope me-2"></i>cs@dalatgapstore.com</li>
          </ul>
        </div>
        {/* Cột 2: Thông tin */}
        <div className="footer-col info col-lg-3 mb-4 mb-lg-0">
          <h4>THÔNG TIN</h4>
          <ul className="list-unstyled">
            <li>GIỚI THIỆU</li>
            <li>CHỨNG NHẬN</li>
            <li>CHÍNH SÁCH BẢO MẬT</li>
            <li>ĐIỀU KHOẢN & ĐIỀU KIỆN</li>
            <li>VIDEO</li>
          </ul>
        </div>
        {/* Cột 3: Dịch vụ */}
        <div className="footer-col service col-lg-3 mb-4 mb-lg-0">
          <h4>DỊCH VỤ</h4>
          <ul className="list-unstyled">
            <li>HƯỚNG DẪN MUA HÀNG</li>
            <li>VẬN CHUYỂN & GIAO HÀNG</li>
            <li>THẺ THÀNH VIÊN</li>
            <li>PHIẾU QUÀ TẶNG</li>
            <li>VIDEO</li>
          </ul>
        </div>
        {/* Cột 4: Liên hệ */}
        <div className="footer-col contact col-lg-3">
          <h4>LIÊN HỆ</h4>
          <ul className="list-unstyled">
            <li>LIÊN HỆ</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom py-3 border-top d-flex flex-column flex-md-row align-items-center justify-content-between mt-3 px-3">
      <div className="footer-bottom-left mb-2 mb-md-0">
        © Bản quyền thuộc về DalatGap Store
      </div>
      <div className="footer-bottom-right">
        <img src="/client/images/bct.png" height={40} alt="Đã thông báo Bộ Công Thương" />
      </div>
    </div>
    <a className="back-to-top btn btn-success rounded-circle" href="#">
      <i className="fas fa-arrow-up"></i>
    </a>
  </footer>
);

export default Footer;
