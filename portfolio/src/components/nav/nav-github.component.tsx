import Link from "next/link";
import GitHubLogo from "../svg/github.svg";

const NavGithub = () => {
  return (
    <Link href="https://github.com/rexter-ds" target="_blank">
      <GitHubLogo></GitHubLogo>
    </Link>
  )
}

export default NavGithub;