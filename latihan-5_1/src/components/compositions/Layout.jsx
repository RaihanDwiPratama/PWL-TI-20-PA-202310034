import React from "react";

export default function Layout(props) {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-center flex-column flex-column-fluid">
        <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20 bg-dark">
          <h1 className="mb-5 mt-3 text-center text-white">{props.title}</h1>
          <div className="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
