"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownComponent from "./DropdownComponent";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Đóng Offcanvas và reset body khi đổi route
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Tắt class show của offcanvas (nếu có)
      document.querySelectorAll('.offcanvas.show').forEach(el => {
        el.classList.remove('show');
        el.setAttribute('aria-hidden', 'true');
      });
      // Remove backdrop (nếu có)
      document.querySelectorAll('.offcanvas-backdrop').forEach(el => el.remove());
      // Reset overflow body (nếu có)
      document.body.style.overflow = "";
    }
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`header fixed-top ${scrolled ? "header-scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg" id="mainNavbar">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <img
              className="img-logo"
              src="/client/images/logo.png"
              alt=""
              style={{ height: "auto", borderRadius: 100 }}
            />
          </Link>

          {/* Offcanvas cho menu mobile */}
          <div
            className="offcanvas offcanvas-start"
            id="menu"
            tabIndex={-1}
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title">
                <img
                  className="img-logo"
                  src="/client/images/logo.png"
                  alt=""
                  style={{ height: "auto", borderRadius: 100 }}
                />
              </h5>
              <button
                className="btn p-0 border-0"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark text-secondary fa-2x"></i>
              </button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-2 gap-3 gap-lg-5">
                <li className="nav-item">
                  <Link
                    className={`nav-link me-lg-2 ${pathname === "/home" ? "active text-warning" : ""}`}
                    aria-current="page"
                    href="/home"
                  >
                    Trang Chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link me-lg-2 ${pathname.startsWith("/main/category") ? "active text-warning" : ""}`}
                    href="/main/category"
                  >
                    Cửa Hàng
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link me-lg-2 ${pathname.startsWith("/main/blog") ? "active text-warning" : ""}`}
                    href="/main/blog"
                  >
                    Bài Viết
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link me-lg-2 ${pathname.startsWith("/main/about") ? "active text-warning" : ""}`}
                    href="/main/about"
                  >
                    Về Chúng Tôi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link me-lg-2 ${pathname.startsWith("/main/contact") ? "active text-warning" : ""}`}
                    href="/main/contact"
                  >
                    Liên hệ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-lg-2" href="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </Link>
                </li>
                <DropdownComponent />
              </ul>
            </div>
          </div>

          {/* Nút hamburger menu cho mobile */}
          <button
            className="navbar-toggler text-success border-0 pe-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#menu"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars fa-2x"></i>
          </button>
        </div>
      </nav>
      <style jsx global>{`
        .header {
          transition: background 0.22s, box-shadow 0.22s;
          background: rgba(255, 255, 255, 0.02);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          z-index: 200;
          backdrop-filter: blur(0px);
        }
        .header-scrolled {
          background: #fff !important;
          box-shadow: 0 4px 24px rgba(60, 64, 67, 0.11),
            0 1.5px 0 #f4f4f4;
          backdrop-filter: blur(5px);
        }
      `}</style>
    </div>
  );
}
