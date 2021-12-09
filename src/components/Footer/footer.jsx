import React, { useState } from "react";
import "./footer.css";

const Footer = () => (
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-xs-12">
          <div class="first">
            <h4>Navigation</h4>
            <p>
              <a href="http://localhost:3000/">Home</a> <br />
              <a href="http://localhost:3000/products/all">Products</a>
              <br />
              <a href="http://localhost:3000/login">Login</a>
              <br />
            </p>
          </div>
        </div>

        <div class="col-md-4 col-xs-12">
          <div class="second">
            <img src="https://i.ibb.co/T051YYG/Blank-2000-x-2000-6.png" />
          </div>
        </div>

        <div class="col-md-4 col-xs-12">
          <div class="third">
            <h4> Contact</h4>
            <strong>DevCode Upholstry</strong> <br />
            123-456-7891 <br />
            2021 Coding Way <br />
            Chicago, IL 60649
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Footer;

// const Footer = () => (
//   <footer>
//     <div class="container">
//       <div class="row">
//         <div class="col-lg-4 col-md-5">
//           <h3>Site Map</h3>
//           <ul class="list-unstyled two-column">
// <li>
// <a href="http://localhost:3000/">Home</a>
// </li>
// <li>
// <a href="http://localhost:3000/products/all">Products</a>
// </li>
// <li>
//   <a href="http://localhost:3000/login">Login</a>
// </li>
//           </ul>
//         </div>

//         <div class="col-lg-4 col-md-5">
//           <h3> </h3>
//           <div class="logo">
//             <img src="https://i.ibb.co/n79GMw5/Blank-2000-x-2000-500-x-500.png" />
//           </div>

//           <div class="col-lg-5">
//             <h3>Contact Us</h3>
// <div class="contact-body">
//   <strong>DevCode Upholstry</strong> <br />
//   123-456-7891 <br />
//   2021 Coding Way <br />
//   Chicago, IL 60649
// </div>
//           </div>
//         </div>
//       </div>
//       <div class="copyright text-center">
//         Copyright &copy; 2021 <span>DevCode Upholstry</span>
//       </div>
//     </div>
//   </footer>
// );
// export default Footer;
