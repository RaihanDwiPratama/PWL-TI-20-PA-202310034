import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderNav() {
  const menuList = [
    { id: 1, name: "Home", path: "/home", icon: "bi bi-house-door" },
    { id: 2, name: "Explore", path: "/explore", icon: "bi bi-compass" },
    { id: 3, name: "Messages", path: "/messages", icon: "bi bi-send" },
    { id: 4, name: "Log Out", path: "/log-out", icon: "bi bi-box-arrow-left" },
  ];
  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top shadow bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png"
              alt="ibik-logo"
              style={{ height: "40px" }}
            />
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="d-flex w-100 justify-content-end">
              <div id="main-nav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  {menuList.map((v, index) => (
                    <li className="nav-item me-1" key={index}>
                      <a
                        className="nav-link text-hover-success px-3"
                        href={v.path}
                      >
                        <i className={"bi me-2 fs-5 text-dark" + v.icon}></i>
                        {v.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

// import React from "react";
// import { IoLogoTux } from "react-icons/io5";

// export default function HeaderNav() {
//   return (
//     <header className="p-3 text-bg-dark">
//       <div className="container">
//         <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//           <a
//             href="/"
//             className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
//           >
//             <IoLogoTux style={{width: 30, height: 30}} />
//           </a>

//           <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//             <li>
//               <a href="#" className="nav-link px-2 text-secondary">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-2 text-white">
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-2 text-white">
//                 Pricing
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-2 text-white">
//                 FAQs
//               </a>
//             </li>
//             <li>
//               <a href="#" className="nav-link px-2 text-white">
//                 About
//               </a>
//             </li>
//           </ul>

//           <form
//             className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
//             role="search"
//           >
//             <input
//               type="search"
//               className="form-control form-control-dark text-bg-dark"
//               placeholder="Search..."
//               aria-label="Search"
//             />
//           </form>

//           <div className="text-end">
//             <button type="button" className="btn btn-outline-light me-2">
//               Login
//             </button>
//             <button type="button" className="btn btn-warning">
//               Sign-up
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
