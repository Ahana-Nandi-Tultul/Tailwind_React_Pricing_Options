import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

const navigationData = [
    {
        name: "Home",
        path: "/home",
        id: 1
    },
    {
        name: "About Us",
        path: "/about-us",
        id: 2
    },
    {
        name: "Services",
        path: "/services",
        id: 3
    },
    {
        name: "Contact",
        path: "/contact",
        id: 4
    },
    {
        name: "Blog",
        path: "/blog",
        id: 5
    }
];

const Navbar = () => {

    const [open , setOpen] = useState(false);
    const links =  navigationData.map(route =>
                        <Link route = {route} key= {route.id}></Link>
                    );

    return (
        <nav className='flex justify-between mx-10 mt-6'>
           <span className='flex' onClick={() => setOpen(!open)}>
            {
                open ? <X className='md:hidden' ></X> : <Menu className='md:hidden' ></Menu>
            }
            <ul className={`md:hidden absolute duration-1000 ${open? "top-12" : "-top-40"} bg-amber-300 text-black z-10 p-4`}>
                {links}
            </ul>
             
            <h3 className='ml-4'>My Navbar</h3>
           </span>
            <ul className='md:flex hidden'>
                {
                   links
                }
            </ul>

            
            {/* <ul className='flex'>
                {
                    navigationData.map(route =>
                        <li className='mr-10'><a href={route.path}>{route.name}</a></li>
                    )
                }
            </ul> */}



            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;