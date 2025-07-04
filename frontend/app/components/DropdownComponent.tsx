'use client';

import { useEffect } from 'react';

const DropdownComponent = () => {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="javascript:void(0)" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa-solid fa-user"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end">
        <li><a className="dropdown-item" href="#">Cá Nhân</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
      </ul>
    </li>
  );
};

export default DropdownComponent;