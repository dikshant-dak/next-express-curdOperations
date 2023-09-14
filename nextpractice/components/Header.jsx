import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import DeleteUser from './DeleteUser';

const Header = () => {
    return (
        <div className="w-full h-full">
            <nav className="w-full h-full lg:h-24 lg:flex items-center justify-between p-3 shadow-lg ">

                <h1 className="font-bold text-2xl text-[#FF385C] lg:ml-6">TRAVEL ALONG</h1>
                <ul className="lg:w-[500px] lg:h-16 flex items-center justify-center rounded-3xl shadow-lg lg:text-lg p-2 font-medium">
                    <li className="lg:mr-3 lg:cursor-pointer lg:hover:opacity-90">Anywhere
                        <span className="w-[1px] lg:h-6 text-[grey] lg:mr-3"></span>
                    </li>
                    <li className="lg:mr-2 lg:cursor-pointer lg:hover:opacity-90">Any Week</li>
                    <div className="flex justify-center items-center lg:ml-2">
                        {/* <Link href={}> */}
                            <li className="lg:mr-3 lg:cursor-pointer lg:hover:opacity-90" onClick={() => window.open("/Form")}>Add Customer </li>
                            {/* <button className="lg:mr-3 lg:cursor-pointer lg:hover:opacity-90" onClick={() => handleDeleteUser(customer.id)}>Delete User</button> */}
                        {/* </Link> */}
                            
                        <div className="rounded-full bg-[#ff385c] lg:flex lg:justify-center lg:items-center lg:hover:opacity-80">

                            <AiOutlineSearch className="lg:mr-3 lg:cursor-pointer text-white p-2 ml-2 mr-2" size={38} />
                        </div>
                    </div>
                </ul>
                <DeleteUser />
                <ul className="flex items-center justify-center text-lg p-4">
                    <li className="p-3">Travel your way</li>
                    <BiGlobe className="mr-2 lg:cursor-pointer" size={25}/>
                    <div className="flex ">
                        <AiOutlineMenu className="mr-2 lg:cursor-pointer" size={25}/>
                        <CgProfile className="mr-2 lg:cursor-pointer" size={25} />
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header
