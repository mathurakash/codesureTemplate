import React from "react";
import { NavLink } from "react-router-dom";

const Footer=()=>{
    return(
        <>
            <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item m-1"><NavLink to="/" class="nav-link px-2 text-muted">Home</NavLink></li>
      <li class="nav-item m-1"><NavLink to="/service" class="nav-link px-2 text-muted">Services</NavLink></li>
      <li class="nav-item m-1"><NavLink to="/about" class="nav-link px-2 text-muted">About</NavLink></li>
      <li class="nav-item m-1"><NavLink to="/contact" class="nav-link px-2 text-muted">Contact</NavLink></li>
      
    </ul>
    <p class="text-center text-muted">&copy; 2021 Company, Inc</p>
  </footer>
</div>
        </>
    );
};

export default Footer;