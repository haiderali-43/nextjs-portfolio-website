import Link from "next/link";
import Image from "next/image";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute w-full z-30 flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  items-center justify-between gap-y-6 py-8">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              width={220}
              height={48}
              alt="logo"
              priority={true}
            />
          </Link>
          {/* Socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
