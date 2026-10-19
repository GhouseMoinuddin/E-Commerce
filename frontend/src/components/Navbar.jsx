import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex items-center justify-between py-5 font-medium">
            <img src={assets.logo} className="w-36" alt="Logo_image" />

            <ul className="hidden sm:flex flex-row items-center gap-5 text-sm text-gray-700">
                <li>
                    <NavLink to="/" className="flex flex-col items-center gap-1">
                        <p>Home</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/collection" className="flex flex-col items-center gap-1">
                        <p>Collection</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" className="flex flex-col items-center gap-1">
                        <p>About</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className="flex flex-col items-center gap-1">
                        <p>Contact</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                    </NavLink>
                </li>
            </ul>

            <div className="flex items-center gap-6">
                <img src={assets.search_icon} className="w-5 cursor-pointer" alt="search_icon" />

                <div className="group relative">
                    <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="profile_icon" />
                    <div className="absolute top-full right-0 z-10 hidden pt-4 group-hover:block">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className="relative"> 
                    <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart_icon"/>
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                </Link>
                <img onClick={()=>setVisile(true)} src={assets.menu_icon} className= "w-5 cursor-pointer sm:hidden" alt="menu_icon" />
            </div>

            {/* sidebar menu for small screens*/} 
            <div className={`absolute top-0 right-0 bottom-0 overflow hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>

            </div>
        </div>
    );
}

export default Navbar;
