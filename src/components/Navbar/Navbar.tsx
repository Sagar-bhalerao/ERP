
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import DeskMenu from "./DeskMenu";
import { useSelector } from "react-redux";
import { IoPersonCircleOutline } from "react-icons/io5";

// import { Link } from "react-router-dom";
const Navbar = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || 'default');
    const { isAuthenticated, user, } = useSelector((state: any) => state.auth)
    let name = JSON.parse(user)
    console.log(name);


    //   useEffect(() => {
    //     if (theme) {
    //       setTheme(theme)
    //     } else {
    //       setTheme('default')
    //     }

    //   }, [themee, theme])
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])
    const handleThemeChange = (selectedTheme: string) => {
        setTheme(selectedTheme)
    }
    return (
        <>
            <div className="navbar sticky top-0 w-full border-b bg-base-300 border-base-800 z-10 ">

                {/* mobile menu */}
                <MobileMenu />

                {/* main menu */}
                <DeskMenu />
                {/* right side menu theme/user profile */}

                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1">
                        T
                    </div>
                    <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-15">
                        <li><input onChange={() => handleThemeChange("dark")} type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="dark" value="dark" /></li>
                        <li><input onChange={() => handleThemeChange("light")} type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="light" value="light" /></li>

                    </ul>
                </div>

                <div className="flex-none gap-2 ">


                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                               
                                {isAuthenticated && !name.firstName ? (<><div className=""><IoPersonCircleOutline size={47} className="w-10 mt-[-3px] bg-primary text-gray-50 " /></div></>):(<></>)}
                                {name && isAuthenticated ? (<><span className="flex justify-center bg-black  dark:text-white text-2xl">{name.firstName?.toUpperCase().charAt(0) + name.lastName?.toUpperCase().charAt(0)}</span></>) : (<><div className=""><IoPersonCircleOutline size={47} className="w-10 mt-[-3px] bg-primary text-gray-50 " /></div></>)}

                                {/* <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">

                            <div className="px-4 py-1 ">
                                <div className="flex justify-center">
                                    {/* {isAuthenticated && user ? (<div className="font-bold text-primary flex" >{name.firstName[0].toUpperCase() + name.firstName.slice(1) + "  " + name.lastName[0].toUpperCase() + name.lastName.slice(1)}</div>) : null} */}
                                </div>


                            </div>
                            <ul className="py-1" aria-labelledby="user-menu-button">

                                <li>
                                    <a href="/userProfile" className="block px-4 py-1 text-sm ">Profile</a>
                                </li>

                             {isAuthenticated ?(<><li>
                                    <Link to="/logout" className="block px-4 py-1 text-sm ">Logout</Link>
                                </li></>):(<><li>
                                    <Link to="/login" className="block px-4 py-1 text-sm ">Login</Link>
                                    <Link to="/register" className="block px-4 py-1 text-sm">Register</Link>
                                </li></>)}
                                
                                

                            </ul>
                        </ul>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Navbar;
