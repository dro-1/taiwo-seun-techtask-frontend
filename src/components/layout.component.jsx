import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer.component";
import { Navbar } from "./navbar/navbar.component";

export const Layout = (props) => (
  <div className="layoutWrapper" style={{ position: "relative" }}>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);
