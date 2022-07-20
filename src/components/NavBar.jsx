import { useState, useEffect } from "react";
import { NavBar, Container } from "react-bootstrap";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("croll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <NavBar bg="light" expand="lg">
      <Container>
        <NavbarBrand.Brand href="#home">
          <img src={""} alt="Logo" />
        </NavbarBrand.Brand>
        <NavbarBrand.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </NavbarBrand.Toggle>
        <NavbarBrand.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={""} alt="" />
              </a>
              <a href="#">
                <img src={""} alt="" />
              </a>
              <a href="#">
                <img src={""} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </NavbarBrand.Collapse>
      </Container>
    </NavBar>
  );
};
