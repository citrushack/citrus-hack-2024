import footer from "@/public/svg/footer/footer.svg";
import logo from "@/public/svg/footer/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full relative flex flex-col items-center">
      <Image
        src={footer}
        alt="footer"
        className="absolute bottom-0 left-0 w-full z-0"
      />
      <Image src={logo} alt="logo" className="z-10 relative w-1/2 md:w-1/3" />

      <div className="z-10 my-4 relative text-white flex flex-col items-center">
        Made with ❤ by the Citrus Hack team at University of California,
        Riverside.
        <Link
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
          className="no-underline flex items-center text-citrus-orange"
        >
          MLH Code of Conduct
          <FaLink className="mx-2" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
