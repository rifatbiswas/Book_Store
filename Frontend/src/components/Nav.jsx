import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";

const Nav = () => {

    const [isManuOpen, setIsManuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = ()=>{
        setIsManuOpen(!isManuOpen);
    }

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.addEventListener("scroll", handleScroll);
        }
    },[])


    const navItem = [
        {link:"Home", path:"/"},
        {link:"About", path:"/about"},
        {link:"Shop", path:"/shop"},
        {link:"Sell Your Book", path:"/admin/dashboard"},
        {link:"Blog", path:"/blog"},
    ]
    return (
        <header className="fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in bg-transparent">
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-400 " : ""}`}>
                <div className="flex items-center justify-between gap-16 text-base">
                    {/* logo */}
                    <Link to="/"
                    className="flex items-center gap-2 text-2xl font-bold text-blue-700 "><FaBlog className="inline-block"/> Books</Link>

                    <ul className="hidden space-x-12 md:flex ">
                        {
                            navItem.map(({link, path}) => <Link key={path} to={path} className="block text-base text-black uppercase cursor-pointer hover:text-blue-700">{link}</Link>)
                        }
                    </ul>
                    
                    <div className="items-center hidden space-x-12 lg:flex">
                        <button>
                            <FaBarsStaggered className="w-5 hover:text-blue-700"/>
                        </button>
                    </div>
                    
                    <div  className="md:hidden ">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {
                                isManuOpen ? <FaXmark className="w-5 h-5 text-black"/> : <FaBarsStaggered/>
                            }
                        </button>
                        
                    </div>
                </div>

                {/* nav for small device */}
                <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isManuOpen ? "block fixed top=0 right-0 left-0" : "hidden" }`}>
                    {
                        navItem.map(({link, path}) => <Link key={path} to={path} className="block text-base text-black text-white uppercase cursor-pointer hover:text-blue-700">{link}</Link>)
                    }
                </div>
            </nav>
        </header>
    );
};

export default Nav;