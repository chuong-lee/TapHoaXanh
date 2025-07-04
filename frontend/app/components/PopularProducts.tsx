// import React, { useState, useEffect } from "react";
// import api from "@/lib/axios";
// import ProductCard from "./ProductCard";

// interface Category {
//   id: number;
//   name: string;
// }

// interface Product {
//   id: number;
//   img?: string;
//   image?: string;
//   title?: string;
//   name?: string;
//   price?: number;
//   badge?: string;
//   badgeClass?: string;
//   oldPrice?: number;
//   sold?: string;
//   progress?: number;
//   brand?: string;
// }

// export default function PopularProducts() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [activeTab, setActiveTab] = useState<Category | null>(null);
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Fetch categories on mount
//   useEffect(() => {
//     api.get("/categories")
//       .then(res => {
//         const data = Array.isArray((res as any).data)
//           ? (res as any).data
//           : ((res as any).data?.categories || []);
//         setCategories(data);
//         if (data.length > 0) setActiveTab(data[0]);
//       })
//       .catch(console.error);
//   }, []);
  
  
//   // Fetch products when activeTab changes
//   useEffect(() => {
//     if (!activeTab) return;
//     setLoading(true);
//     api.get(`/products/cate/${activeTab.id}`)
//       .then((res) => {
//         setProducts(Array.isArray(res.data) ? res.data : []);
//         setLoading(false);
//       })
//       .catch(() => {
//         setProducts([]);
//         setLoading(false);
//       });
//   }, [activeTab]);
  
//   // 3 tab đầu & các tab còn lại
//   const mainTabs = categories.slice(0, 3);
//   const restTabs = categories.slice(3);

//   return (
//     <div className="products w-100 my-1">
//       <div className="d-flex justify-content-lg-between align-items-center flex-wrap justify-content-center">
//         <h2>Popular Products</h2>
        
//         <ul className="nav nav-tabs" role="tablist">
//           {categories.length === 0 ? (
//             <li className="nav-item">Đang tải danh mục...</li>
//           ) : (
//             <>
//               {mainTabs.map((cate) => (
//                 <li className="nav-item" role="presentation" key={cate.id}>
//                   <button
//                     className={`nav-link ${activeTab?.id === cate.id ? "active" : ""}`}
//                     onClick={() => setActiveTab(cate)}
//                     type="button"
//                     role="tab"
//                   >
//                     {cate.name}
//                   </button>
//                 </li>
//               ))}
//               {restTabs.length > 0 && (
                
//                 <li className="nav-item dropdown position-static">
//                   <button
//                     className="nav-link dropdown-toggle"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                     id="megaDropdown"
//                   >
//                     Khác
//                   </button>
//                   <div className="dropdown-menu custom-dropdown-mega p-3 mt-2 border-0 shadow-lg" aria-labelledby="megaDropdown">
//                     <div className="mega-table">
//                     {Array.from({ length: Math.ceil(restTabs.length / 5) }).map((_, rowIdx) => (
//                         <div className="mega-table-row d-flex" key={rowIdx}>
//                           {restTabs.slice(rowIdx * 5, (rowIdx + 1) * 5).map(cate => (
//                             <button
//                               key={cate.id}
//                               className={`dropdown-item px-3 py-2 rounded-3 fw-medium ${activeTab?.id === cate.id ? "active" : ""}`}
//                               style={{ minWidth: 140, color: "#222", background: "#fff" }}
//                               onClick={() => setActiveTab(cate)}
//                             >
//                               {cate.name}
//                             </button>
//                           ))}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </li> 

                
//                 // <li className="nav-item dropdown position-static" key="more">
//                 //   <button
//                 //     className="nav-link dropdown-toggle"
//                 //     type="button"
//                 //     data-bs-toggle="dropdown"
//                 //     aria-expanded="false"
//                 //   >
//                 //     Khác
//                 //   </button>
//                 //   <div className="dropdown-menu custom-dropdown-mega p-3 mt-2 border-0 shadow-lg">
//                 //     <div className="mega-table">
//                 //       {Array.from({ length: Math.ceil(restTabs.length / 5) }).map((_, rowIdx) => (
//                 //         <div className="mega-table-row d-flex" key={rowIdx}>
//                 //           {restTabs.slice(rowIdx * 5, (rowIdx + 1) * 5).map(cate => (
//                 //             <button
//                 //               key={cate.id}
//                 //               className={`dropdown-item px-3 py-2 rounded-3 fw-medium ${activeTab?.id === cate.id ? "active" : ""}`}
//                 //               style={{ minWidth: 140, color: "#222", background: "#fff" }}
//                 //               onClick={() => setActiveTab(cate)}
//                 //             >
//                 //               {cate.name}
//                 //             </button>
//                 //           ))}
//                 //         </div>
//                 //       ))}
//                 //     </div>
//                 //   </div>
//                 // </li>
              
//               )}
//             </>
//           )}
//         </ul>

//       </div>

//       <div className="tab-content">
//         <div className={`tab-pane fade show active`}>
//           <div className="product-list">
//             <div className="row row-cols-2 row-cols-lg-5 g-3 g-lg-3 mt-2">
//               {loading ? (
//                 <div className="w-100 text-center py-5">
//                   <span className="spinner-border spinner-border-sm"></span> Đang tải sản phẩm...
//                 </div>
//               ) : (
//                 products.map((item, idx) => (
//                   <div className="col" key={item.id ?? idx}>
//                     <ProductCard
//                       img={item.img || item.image || "/default.png"}
//                       title={item.title || item.name || "No title"}
//                       price={item.price ?? 0}
//                       badge={item.badge}
//                       badgeClass={item.badgeClass}
//                       oldPrice={item.oldPrice}
//                       sold={item.sold}
//                       progress={item.progress}
//                       brand={item.brand}
//                     />
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect, useRef } from "react";
import api from "@/lib/axios";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
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

export default function PopularProducts() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState("Khác");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5   // số sản phẩm trên 1 trang       
  // const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = products.slice(startIndex, endIndex)

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Đóng dropdown khi click ngoài
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Fetch categories on mount
  useEffect(() => {
    api
      .get("/categories")
      .then((res) => {
        const data = Array.isArray((res as any).data)
          ? (res as any).data
          : (res as any).data?.categories || [];
        setCategories(data);
        if (data.length > 0) setActiveTab(data[0]);
      })
      .catch(console.error);
  }, []);

  // Fetch products when activeTab changes
  useEffect(() => {
    if (!activeTab) return;
    setLoading(true);
    api
      .get(`/products/cate/${activeTab.id}`)
      .then((res) => {
        setProducts(Array.isArray(res.data) ? res.data : []);
        setLoading(false);
      })
      .catch(() => {
        setProducts([]);
        setLoading(false);
      });

    // Đổi label dropdown
    if (categories.length > 3 && activeTab) {
      const mainTabs = categories.slice(0, 3);
      if (!mainTabs.find((tab) => tab.id === activeTab.id)) {
        setDropdownLabel(activeTab.name);
      } else {
        setDropdownLabel("Khác");
      }
    }
  }, [activeTab, categories]);

  const mainTabs = categories.slice(0, 3);
  const restTabs = categories.slice(3);

  return (
      <div className="products w-100 my-1">
        <div className="d-flex justify-content-lg-between align-items-center flex-wrap justify-content-center">
          <h2>Popular Products</h2>
          <ul className="nav nav-tabs" role="tablist">
            {categories.length === 0 ? (
              <li className="nav-item">Đang tải danh mục...</li>
            ) : (
              <>
                {mainTabs.map((cate) => (
                  <li className="nav-item" role="presentation" key={cate.id}>
                    <button
                      className={`nav-link ${activeTab?.id === cate.id ? "active" : ""}`}
                      onClick={() => {
                        setActiveTab(cate);
                        setDropdownOpen(false);
                      }}
                      type="button"
                      role="tab"
                    >
                      {cate.name}
                    </button>
                  </li>
                ))}
                {restTabs.length > 0 && (
                  <li className="nav-item dropdown position-relative" ref={dropdownRef as unknown as React.RefObject<HTMLLIElement>}>
                    <button
                      className={
                        "nav-link dropdown-toggle" +
                        (dropdownOpen ? " show" : "") +
                        (restTabs.some(tab => tab.id === activeTab?.id) ? " selected" : "")
                      }
                      type="button"
                      aria-expanded={dropdownOpen ? "true" : "false"}
                      onClick={() => setDropdownOpen(open => !open)}
                    >
                      {dropdownLabel}
                    </button>
                    <div
                      className={`dropdown-menu custom-dropdown-mega-grid${dropdownOpen ? " show" : ""}`}
                    >
                      {restTabs.map((cate) => (
                        <button
                          key={cate.id}
                          className={`dropdown-item ${activeTab?.id === cate.id ? "active" : ""}`}
                          onClick={() => {
                            setActiveTab(cate);
                            setDropdownOpen(false);
                          }}
                        >
                          {cate.name}
                        </button>
                      ))}
                    </div>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      
        <div className="tab-content">
          <div className="tab-pane fade show active">
            <div className="product-list">
              <div className="row row-cols-2 row-cols-lg-5 g-3 g-lg-3 mt-2 w-100">
                {loading ? (
                  <div className="w-100 text-center py-5">
                    <span className="spinner-border spinner-border-sm"></span> Đang tải sản phẩm...
                  </div>
                ) : products.length === 0 ? (
                  <div className="w-100 text-center py-5">
                    <p className="w-100">Hiện tại đã hết sản phẩm</p>
                  </div>
                ) : (
                  currentProducts.map((item, idx) => (
                    <div className="col-12 col-md-6 col-lg" key={item.id ?? idx} style={{ wordBreak: "break-word" }}>
                      <div className=" h-100">
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
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <Pagination
              currentPage={currentPage}
              totalItems={products.length}
              itemsPerPage={itemsPerPage}
              onPageChange={setCurrentPage}
          />
          </div>
        </div>
      </div>
  );
}
