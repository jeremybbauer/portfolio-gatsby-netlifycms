import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>&copy; <script>new Date().getFullYear()>2010&&document.write(" "+new Date().getFullYear())</script>, Jeremy Bauer. Thanks for visiting <span className="icon -love"><RiHeart2Line/></span></p>
    </div>
  </footer>
)

export default Footer