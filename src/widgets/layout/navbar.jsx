import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ routes}) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 justify-center">
  {routes.map(({ name, path, href }) => (
    <Typography
      key={name}
      as="li"
      variant="small"
      color="inherit"
      className="capitalize"
    >
      <a href={path} target="_blank">
        <Button variant="gradient" color="orange" size="sm" fullWidth>
          {name}
        </Button>
      </a>
    </Typography>
  ))}
</ul>

  );

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-center text-white">
        
        <div className="hidden lg:block">{navList}</div>
        
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <MobileNav
        className="rounded-xl bg-black opacity-75 px-4 pt-2 pb-2 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          {navList}
          
        </div>
      </MobileNav>
    </MTNavbar>
  );
}





Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
