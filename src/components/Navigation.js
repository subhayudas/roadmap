"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useAuth } from "../contexts/AuthContext";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signOut } = useAuth();

  // Navigation items
  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "Frontend", href: "/frontend" },
    { name: "Backend", href: "/backend" },
    { name: "Tech Stacks", href: "/tech-stacks" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('navigation-dropdown');
      const button = document.getElementById('navigation-button');
      if (dropdown && button && !dropdown.contains(event.target) && !button.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    setIsDropdownOpen(false);
  };

  // Navbar variants for animation
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Link hover animation variants (commented out as not currently used)
  // const linkVariants = {
  //   initial: { y: 0, scale: 1, rotateX: 0 },
  //   hover: {
  //     y: -5,
  //     scale: 1.05,
  //     rotateX: 10,
  //     transition: {
  //       type: "spring",
  //       stiffness: 400,
  //       damping: 10
  //     }
  //   }
  // };

  // Enhanced floating animation for navbar (commented out as not currently used)
  // const floatingNavVariants = {
  //   initial: { y: 0, rotate: 0, scale: 1, x: 0 },
  //   animate: {
  //     y: 0,
  //     rotate: 0,
  //     scale: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0,
  //     }
  //   }
  // };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.05
      }
    }
  };

  // Mobile menu item animation variants
  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: -5,
      transition: { duration: 0.1 }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    }
  };

  // Dropdown animation variants
  const dropdownVariants = {
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: "easeOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    }
  };

  const dropdownItemVariants = {
    closed: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.1 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.15 }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 top-0 px-3 sm:px-4 md:px-10 transition-all duration-300 ${scrolled ? "py-1 sm:py-2" : "py-2 sm:py-4"}`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div
          className={`${scrolled ? "py-2" : "py-3"}
          px-4 sm:px-4 md:px-6 rounded-2xl
          bg-gradient-to-r from-[#03001417] via-[#03001440] to-[#03001417]
          backdrop-blur-xl border border-[#ffffff30]
          shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_8px_10px_rgba(0,0,0,0.2)]
          transition-all duration-300 ease-in-out
          transform hover:scale-[1.01]
          hover:border-[#ffffff40]
          flex items-center justify-between
          before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-[#ffffff20] before:to-transparent before:opacity-50 before:pointer-events-none
          relative touch-manipulation`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="cursor-pointer"
            >
              <Link to="/">
                <div className="text-white font-bold text-xl sm:text-2xl">
                  Roadmaps by Subhayu
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2.5 focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-lg touch-manipulation active:scale-95 transition-transform"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <motion.div
                initial={false}
                animate={isMenuOpen ? "open" : "closed"}
                className="w-6 h-6 relative"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 8 }
                  }}
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  style={{ top: "25%" }}
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  style={{ top: "50%" }}
                ></motion.span>
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -8 }
                  }}
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  style={{ top: "75%" }}
                ></motion.span>
              </motion.div>
            </button>
          </div>

          {/* Desktop Navigation with Dropdown */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {/* Navigation Dropdown */}
            <div className="relative">
              <motion.button
                id="navigation-button"
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-medium">Navigate</span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDownIcon className="h-4 w-4" />
                </motion.div>
              </motion.button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    id="navigation-dropdown"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={dropdownVariants}
                    className="absolute top-full left-0 mt-2 w-56 bg-gradient-to-r from-[#03001450] via-[#03001470] to-[#03001450] backdrop-blur-xl border border-[#ffffff20] rounded-xl shadow-xl overflow-hidden z-50"
                  >
                    <div className="py-2">
                      {navigationItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          variants={dropdownItemVariants}
                          className="w-full"
                        >
                          <Link
                            to={item.href}
                            onClick={handleLinkClick}
                            className="w-full text-left px-4 py-2.5 text-white hover:text-orange-400 hover:bg-white/10 transition-all duration-200 flex items-center group"
                          >
                            <span className="font-medium">{item.name}</span>
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img 
                    src={user.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${user.email}&background=random`}
                    alt="Profile" 
                    className="w-8 h-8 rounded-full border-2 border-orange-400"
                  />
                  <span className="text-white text-sm font-medium">
                    {user.user_metadata?.full_name || user.email?.split('@')[0]}
                  </span>
                </div>
                <motion.button
                  onClick={signOut}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-white hover:text-orange-400 transition-colors duration-300 border border-white/20 hover:border-orange-400/50 rounded-lg"
                >
                  Sign Out
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/signin"
                  className="text-white hover:text-orange-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/10"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Social Links */}
            <div className="flex items-center space-x-5">
              <motion.a
                href="https://www.linkedin.com/in/subhayu-das"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors duration-300"
                whileHover={{ y: -5, scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </motion.svg>
              </motion.a>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=9123388359&text=Hey"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-12 overflow-hidden items-center justify-center rounded-xl px-6 font-medium group"
            >
              <motion.span
                className="absolute inset-0 w-full h-full bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  backgroundPosition: ["0% 0%", "100% 100%"],
                  transition: { duration: 1.5, ease: "easeInOut" }
                }}
                style={{ backgroundSize: "200% 200%" }}
              ></motion.span>
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
              <span className="absolute inset-0 w-full h-full border border-white opacity-10 rounded-xl"></span>
              <motion.span
                className="absolute bg-white rounded-full opacity-5"
                initial={{ width: 0, height: 0, x: "50%", y: "50%" }}
                whileHover={{
                  width: 200,
                  height: 200,
                  x: 0,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }}
              ></motion.span>
              <motion.span
                className="relative text-white group-hover:text-white z-10 flex items-center text-base font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Text Us
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ x: 0, opacity: 0.5 }}
                  animate={{ x: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Overlay) - Now includes navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed top-[calc(4rem)] left-3 right-3 bg-gradient-to-r from-[#03001417] via-[#03001450] to-[#03001417] backdrop-blur-lg border border-[#ffffff20] rounded-xl shadow-xl p-4 z-50 max-h-[calc(100vh-5rem)] overflow-y-auto touch-manipulation"
          >
            <div className="flex flex-col space-y-5">
              {/* Navigation Links for Mobile */}
              <motion.div className="space-y-1" variants={menuItemVariants}>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider px-3 py-2 text-center">
                  Navigate
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {navigationItems.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        to={item.href}
                        onClick={handleLinkClick}
                        className="text-white hover:text-orange-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-white/10 text-left block"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Auth Section for Mobile */}
              <motion.div
                className="py-3 border-t border-white/10"
                variants={menuItemVariants}
              >
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 px-3">
                      <img 
                        src={user.user_metadata?.avatar_url || `https://ui-avatars.com/api/?name=${user.email}&background=random`}
                        alt="Profile" 
                        className="w-10 h-10 rounded-full border-2 border-orange-400"
                      />
                      <div>
                        <p className="text-white font-medium">
                          {user.user_metadata?.full_name || user.email?.split('@')[0]}
                        </p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        handleLinkClick();
                      }}
                      className="w-full bg-red-500/20 border border-red-500/30 text-red-300 font-medium py-3 px-4 rounded-xl text-center hover:bg-red-500/30 transition-all duration-300"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Link
                      to="/signin"
                      onClick={handleLinkClick}
                      className="block w-full bg-white/10 text-white font-medium py-3 px-4 rounded-xl text-center hover:bg-white/20 transition-all duration-300"
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      onClick={handleLinkClick}
                      className="block w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 px-4 rounded-xl text-center hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </motion.div>

              <motion.div
                className="flex justify-center space-x-6 py-3 border-t border-white/10"
                variants={menuItemVariants}
              >
                <motion.a
                  href="https://linkedin.com/in/subhayu-das"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
              </motion.div>

              <motion.div variants={menuItemVariants} className="pt-2">
                <a
                  href="https://api.whatsapp.com/send?phone=9123388359text=Hey"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="block w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 px-4 rounded-xl text-center hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                >
                  Text Us
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
