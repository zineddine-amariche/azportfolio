"use client";
import React, { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  useEffect(() => {}, []);

  const [state, setstate] = useState();
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav containerStyle="hidden xl:flex gap-x-8 items-center" linkStyles='' underlineStyles={''} />
            <ThemeToggler />
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
