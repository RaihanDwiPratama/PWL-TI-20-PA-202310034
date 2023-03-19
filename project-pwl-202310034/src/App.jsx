import React from 'react';
import SimpleHandler from './components/SimpleHandler';
import Statement from './components/Statement';
// import Form from "./components/Form";
// import StickyNotes from "./components/StickyNotes";


export default function App() {
  return (
    // <Form />
    // <StickyNotes />
    // <Statement />
    <SimpleHandler />
  )
}


// import { useState } from "react";
// import "./App.css";
// import FormInput from "./components/FormInput";

// const App = () => {
//   const [values, setValues] = useState({
//     npm: "",
//     firstname: "",
//     middlename: "",
//     lastname: "",
//     birthdate: "",
//   });

//   const inputs = [
//     {
//       id: 1,
//       name: "npm",
//       type: "text",
//       placeholder: "Input your NPM",
//       errorMessage:
//         "Field isian NPM harus berupa numeric dan maksimal 10 angka!",
//       label: "npm",
//       pattern: "^[A-Za-z0-9]{3,10}$",
//       required: true,
//     },
//     {
//       id: 2,
//       name: "firstname",
//       type: "firstname",
//       placeholder: "Input your Firstname",
//       errorMessage: "Field isian Firstname wajib diisi!",
//       label: "firstname",
//       required: true,
//     },
//     {
//       id: 3,
//       name: "middlename",
//       type: "middlename",
//       placeholder: "Input your Middlename",
//       label: "middlename",
//     },
//     {
//       id: 4,
//       name: "lastname",
//       type: "lastname",
//       placeholder: "Input your Lastname",
//       errorMessage: "Field isian Lastname wajib diisi!",
//       label: "lastname",
//       required: true,
//     },
//     {
//       id: 5,
//       name: "birthdate",
//       type: "birthdate",
//       placeholder: "Input your Birthdate",
//       errorMessage: "Field isian Birthdate wajib diisi!",
//       label: "birthdate",
//       required: true,
//     },
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   const onChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <div className="app">
//         <form onSubmit={handleSubmit}>
//           <h1>Register</h1>
//           {inputs.map((input) => (
//             <FormInput
//               key={input.id}
//               {...input}
//               value={values[input.name]}
//               onChange={onChange}
//             />
//           ))}
//           <button data-bs-toggle="modal" data-bs-target="#exampleModal">
//             Submit
//           </button>
//         </form>
//       </div>
//       <div className="modal" id="exampleModal" tabIndex="-1">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Modal title</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">
//               <p>NPM: {values.npm}</p>
//               <p>
//                 Fullname:{" "}
//                 {`${values.firstname} ${values.middlename} ${values.lastname}`}
//               </p>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
