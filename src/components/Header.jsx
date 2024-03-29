import { useState, useEffect } from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { TfiWorld } from "react-icons/tfi";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0); // Scroll değeri 0'dan büyükse, sayfa kaydırılmıştır.
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      className={`border-b-2 ${
        isScrolled
          ? "fixed top-0 left-0 w-full z-10 shadow-md transition-all duration-500"
          : ""
      }`}
    >
      <Link to="/">
        <img
          className="w-44 "
          src="https://b2b.secilstore.com/public/img/secilstore.svg"
          alt="secil_logo"
        />
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-4 mt-2 md:order-2 justify-between text-2xl text-gray-600">
        <Link to="/" className="hidden lg:block ">
          <MdOutlineLocalShipping />
        </Link>
        <Link to="/">
          <HiOutlineShoppingBag />
        </Link>
        <Link to="/" className="hidden lg:block">
          <TfiWorld />
        </Link>
        <Link to="/" className="flex flex-row gap-2 ">
          <CiUser />
          <span className="flex text-sm mt-1">Giriş Yap</span>
        </Link>
      </div>
    </Navbar>
  );
}
