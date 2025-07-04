'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function LoginPage() {
  const [mode, setMode] = useState<'signup' | 'login'>('signup')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* HEADER */}
      <header className={`py-2 ${scrolled ? 'bg-success shadow fixed-top' : 'bg-transparent position-absolute w-100'}`} style={{ transition: 'all 0.3s' }}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="rounded-circle" />
            <h5 className={`ms-2 mb-0 ${scrolled ? 'text-white' : 'text-dark'}`}>Tạp Hóa Xanh</h5>
          </div>
          <nav className="nav">
            {['Trang Chủ', 'Cửa Hàng', 'Bài Viết', 'Về Chúng Tôi', 'Liên hệ'].map((item, idx) => (
              <Link key={idx} className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`} href="#">{item}</Link>
            ))}
            <Link className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`} href="#"><i className="bi bi-cart"></i></Link>
            <Link className={`nav-link ${scrolled ? 'text-white' : 'text-dark'}`} href="#"><i className="bi bi-person"></i></Link>
          </nav>
        </div>
      </header>

      <main className="container my-5 pt-5 d-flex justify-content-center">
        <div style={{ maxWidth: 600, width: '100%', marginTop: '80px' }}>
          <div className="text-center mb-3">
            <Image src="/images/logo.png" alt="Logo nhỏ" width={60} height={60} className="rounded-circle" />
            <h2 className="mt-2">Get Started Now</h2>
            <p>Create an account or log in to explore about our app</p>
          </div>

          <div className="d-flex mb-3">
            <button
              className={`btn flex-fill ${mode === 'signup' ? 'btn-warning text-dark fw-bold' : 'btn-outline-warning'}`}
              style={{ borderRadius: '30px' }}
              onClick={() => setMode('signup')}
            >
              Sign Up
            </button>
            <button
              className={`btn flex-fill ${mode === 'login' ? 'btn-warning text-dark fw-bold' : 'btn-outline-warning'}`}
              style={{ borderRadius: '30px' }}
              onClick={() => setMode('login')}
            >
              Log In
            </button>
          </div>

          {mode === 'signup' && (
            <form>
              <div className="mb-2">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-2">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" required />
              </div>
              <div className="mb-2">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" required />
              </div>
              <div className="mb-2">
                <label className="form-label">Invite Code</label>
                <input type="text" className="form-control" placeholder="Enter your code" />
              </div>
              <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                  I agree <a href="#">Terms & Conditions</a>
                </label>
              </div>
              <button className="btn btn-warning w-100 rounded-pill">Sign Up</button>
            </form>
          )}

          {mode === 'login' && (
            <form>
              <div className="mb-2">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-2">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" placeholder="Enter your password" required />
              </div>
              <button className="btn btn-warning w-100 rounded-pill">Log In</button>
            </form>
          )}
        </div>
      </main>

      <footer className="pt-4">
  <div className="container text-dark">
    <div className="row">
      {/* Bên trái */}
      <div className="col-md-6 mb-3">
        <h6 className="fw-bold">GIỚI THIỆU CÔNG TY</h6>
        <p>
          Đà Lạt GAP là công ty đầu tiên tại Việt Nam xây dựng và duy trì hệ thống quản lý chất lượng tiêu chuẩn Toàn Cầu GlobalG.A.P (Global Good Agriculture Practice) từ năm 2008 đến nay - chứng nhận bởi tập đoàn Control Union - Hà Lan.
        </p>
        <p>
          <i className="bi bi-geo-alt-fill"></i> Chi nhánh CTY TNHH Thực Phẩm Sạch Dalat G.A.P.<br />
          403 Hai Bà Trưng, Phường Võ Thị Sáu, Quận 3, Tp. HCM<br />
          MST : 0312080949
        </p>
        <p>
          <i className="bi bi-telephone-fill"></i> 028 38 20 27 20
        </p>
        <p>
          <i className="bi bi-envelope-fill"></i> cs@dalatgapstore.com
        </p>
      </div>

      {/* Bên phải */}
      <div className="col-md-6 mb-3">
        <div className="row">
          <div className="col-4">
            <h6 className="fw-bold">THÔNG TIN</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Giới thiệu</a></li>
              <li><a href="#" className="text-dark">Chứng nhận</a></li>
              <li><a href="#" className="text-dark">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-dark">Điều khoản & điều kiện</a></li>
              <li><a href="#" className="text-dark">Video</a></li>
            </ul>
          </div>
          <div className="col-4">
            <h6 className="fw-bold">DỊCH VỤ</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="text-dark">Vận chuyển & giao hàng</a></li>
              <li><a href="#" className="text-dark">Thẻ thành viên</a></li>
              <li><a href="#" className="text-dark">Phiếu quà tặng</a></li>
              <li><a href="#" className="text-dark">Video</a></li>
            </ul>
          </div>
          <div className="col-4">
            <h6 className="fw-bold">LIÊN HỆ</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark">Liên hệ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center my-2">
      <Image src="/images/bct.png" alt="Đã thông báo" width={150} height={50} />
    </div>
    <div className="text-center small">© Bản quyền thuộc về DalatGap Store</div>
  </div>
</footer>

    </>
  )
}
