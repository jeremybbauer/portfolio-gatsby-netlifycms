import React from "react"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>&copy; <script type="text/javascript">
        document.write(new Date().getFullYear());
</script>, Jeremy Bauer. Thanks for visiting <span className="icon -love"><RiHeart2Line /></span></p>
    </div>
  </footer>
)

export default Footer