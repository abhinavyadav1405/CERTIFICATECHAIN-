import { NavLink } from "react-router-dom";
import {
  Home,
  PlusCircle,
  ShieldCheck,
  Blocks,
  FileCheck,
  Info
} from "lucide-react";

function Navbar() {
  const links = [
    { path: "/", name: "Home", icon: Home },
    { path: "/create", name: "Create", icon: PlusCircle },
    { path: "/verify", name: "Verify", icon: ShieldCheck },
    { path: "/blockchain", name: "Blockchain", icon: Blocks },
    { path: "/certificates", name: "Certificates", icon: FileCheck },
    { path: "/about", name: "About", icon: Info }
  ];

  return (
    <>
      <header className="top-navbar">
        <div className="brand">
          <div className="brand-icon">⛓</div>

          <div>
            <h2>CertificateChain</h2>
            <span>DECENTRALIZED VERIFICATION</span>
          </div>
        </div>

        <nav className="desktop-nav">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <Icon size={18} />
                {link.name}
              </NavLink>
            );
          })}
        </nav>
      </header>

      {/* Mobile Instagram-style bottom navigation */}
      <nav className="mobile-nav">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "mobile-link active" : "mobile-link"
              }
            >
              <Icon size={21} />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </>
  );
}

export default Navbar;
