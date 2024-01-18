import Hamburger from "../../public/icons/app/icon-hamburger";
import IconLogo from "../../public/icons/sidebar/icon-logo";

interface MobileNavProps {
    toggleSidebar: Function;
}

const MobileNav = ({ toggleSidebar }:MobileNavProps) => {
  return (
    <nav className="w-full  fixed top-0 flex flex-row justify-between items-center px-[40px] h-[80px] bg-[#1C1C1E] z-[99999] lg:hidden">
      <div>
        <IconLogo width={50} height={50} color="#FF630B" />
      </div>
      <div>
        <button className="fill-[#6f7380] stroke-[#6f7380] hover:fill-customOrange hover:stroke-customOrange hover:bg-[#6f7380] transition-all duration-300 ease-in-out rounded-[12px]" onClick={() => toggleSidebar()}>
          <Hamburger />
        </button>
      </div>
    </nav>
  );
};

export default MobileNav;
