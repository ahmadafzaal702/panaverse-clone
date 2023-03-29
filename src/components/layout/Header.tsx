// imports
// imports
import Image from "next/image";
import Link from "next/link";

// shared components import
import Wrapper from "../shared/Wrapper";
import LinkHover from "../shared/LinkHover";

// logo import
import Logo from "/public/logo.png";

// Header FC
const Header = () => {
  return (
    <>
      <Wrapper>
        <header className="bg-white sticky flex justify-between items-center py-3">
          <div>
            <Image src={Logo} alt="Panaverse-logo" />
          </div>
          <ul className="flex space-x-5 font-semibold">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </header>
      </Wrapper>
    </>
  );
};

export default Header;
