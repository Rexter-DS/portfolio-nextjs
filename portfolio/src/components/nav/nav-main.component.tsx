import Link from "next/link";
import Logo from "../svg/logo.svg";
import NavMenu from "./nav-menu.component";
import NavResume from "./nav-resume.component";
import NavGithub from "./nav-github.component";
import NavLinkedin from "./nav-linkedin.component";
import ButtonContactMe from "../button/button-contact.component";

const NavMain = () => {
  return (
    <div className="flex flex-row justify-between w-screen 
    items-center">
      {/* Logo and name */}
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
              sm:w-9
              lg:w-10
            "
          >
            <Logo></Logo>
          </div>
        </Link>
        <span
          className="
            text-base
            font-bold
            sm:text-lg
            lg:text-xl
          "
        >
          Rexter Delos Santos
        </span>
      </div>

      {/* Regular Nav */}
      <div
        className="
          hidden
          md:flex
          md:flex-row 
          md:items-center 
          md:gap-4
          lg:gap-5
        "
      >
        <div>
          <span className="text-base font-bold">Projects</span>
        </div>
        <div>
          <NavResume></NavResume>
        </div>
        <div
          className="
            flex
            flex-row
            gap-2
          "
        >
          <div
            className="
            w-8 
            sm:w-9
            lg:w-10
          "
          >
            <NavGithub></NavGithub>
          </div>
          <div
            className="
            w-8 
            sm:w-9
            lg:w-10
          "
          >
            <NavLinkedin></NavLinkedin>
          </div>
        </div>
        <ButtonContactMe></ButtonContactMe>
      </div>

      {/* Nav Menu. */}
      <div
        className="
          flex
          flex-row
          md:hidden
        "
      >
        <NavMenu></NavMenu>
      </div>
    </div>
  );
}

export default NavMain;