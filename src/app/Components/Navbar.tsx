"use client";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import '../Styles/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      {/* Logo Section */}
      <div>
        <Link href="#" className="logo">
          Hammad.
        </Link>
      </div>

      {/* Hamburger Menu Button for Mobile */}
      <button
        className="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Navigation Links */}
      <div
        className={`${isOpen ? "nav-open" : "nav-hidden"} nav-links-container`}
      >
        <nav className="nav-links">
          <Link href="#" className="nav-link">
            Home
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="#Projects" className="nav-link">
            Projects
          </Link>
          <Link href="#Skills" className="nav-link">
            Skills
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
