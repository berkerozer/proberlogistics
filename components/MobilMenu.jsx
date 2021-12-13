import Link from "next/link";
import { services } from "../data";

const MobilMenu = () => {
  let service = false;
  const btnHandler = () => {
    if (service) {
      document.getElementById("service-mobile-menu").classList.add("hidden");
      service = false;
    } else {
      document.getElementById("service-mobile-menu").classList.remove("hidden");
      service = true;
    }
  };

  return (
    <nav
      role="navigation"
      className="fixed top-0 z-40 flex items-center justify-between w-screen h-24 px-8 transition-all bg-gray-800 shadow md:hidden"
      id="mobilNavbar"
    >
      <div id="menuToggle" className="transition-all">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>

        <ul
          id="menu"
          className="fixed top-0 flex flex-col h-screen pl-10 space-y-4 text-xl text-white transition-all"
        >
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <button onClick={btnHandler}>Services</button>
          </li>
          <li id="service-mobile-menu" className="hidden">
            <ul className="pl-4 space-y-4 text-xs capitalize border-l ">
              {services.map((service) => (
                <li className="px-6 py-3 hover:shadow">
                  <Link href={`/services/${service.slug}`}>
                    <a>{service.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link href="/sheq">
              <a>SHEQ</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="/images/logo.png" alt="" className="h-10" />
      </div>
    </nav>
  );
};

export default MobilMenu;
