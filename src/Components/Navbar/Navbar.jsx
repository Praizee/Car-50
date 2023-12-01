import { NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import NavDropdown from "./NavDropdown";


const Navbar = () => {

    return (
        <div className="">
            <div className="navbar bg-white/50 w-ful text-[#192459] font-semibold py-0 laptop:px-16 tablet:px-10 px-6">
                {/* border-b border-[#D1D5DB]/40 */}
                <div className="navbar-start">
                    {NavbarData.map((item, index) => (
                        <ul key={index}
                            className="pr-3 uppercase">
                            <li>
                                <a
                                    className="text-base cursor-pointer">
                                    {item.title}
                                </a>
                            </li>
                        </ul>
                    ))}

                </div>
                <div className="navbar-end hidden laptop:flex">
                    <div className="">
                        <button className="border border-[#FDE047] bg-[#FDE047] text-[#192459] hover:bg-transparent hover:border-[#FDE047] font-semibold py-2 px-4 rounded-md transition duration-200">
                            Contact Seller
                        </button>
                    </div>
                </div>

                <div className="navbar-end laptop:hidden">
                    <NavDropdown />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
