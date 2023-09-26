import Image from "next/image";
import Link from "next/link";
import Logo from "../svg/logo.svg";
import NavBarMenu from "./navbar-menu.component";
import EmailLogo from "../svg/email.svg";
import GitHubLogo from "../svg/github.svg";
import LinkedInLogo from "../svg/linkedin.svg";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between w-screen 
    items-center">
      <div
        className="
          flex
          flex-row
          items-center
          gap-3
        "
      >
        <Link href="" scroll>
          <div
            className="
              w-8
            "
          // style={{
          //   width: '50px'
          // }}
          >
            <Logo></Logo>
          </div>
        </Link>
        <span
          className="
            text-base
            font-semibold
            sm:text-2xl
            lg:text-3xl
          "
        >
          Rexter Delos Santos
        </span>
      </div>
      <div
        className="
          hidden
          md:flex
          md:flex-row 
          md:items-center 
          md:gap-2
        "
      >
        <a>
          <div className="w-8 sm:w-10">
            <GitHubLogo></GitHubLogo>
          </div>
        </a>
        <a>
          <div className="w-8 sm:w-10">
            <LinkedInLogo></LinkedInLogo>
          </div>
        </a>
        <a>
          <div className="w-8 sm:w-10">
            <EmailLogo></EmailLogo>
          </div>
        </a>
      </div>
      <div
        className="
          flex
          flex-row
          md:hidden
        "
      >
        <NavBarMenu></NavBarMenu>
      </div>
    </div>
  );
}

export default NavBar;