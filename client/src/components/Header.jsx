import React from "react";
import { Navbar, TextInput, Button, Avatar, Dropdown } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon  } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function Header() {
    
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.user);
    // console.log(currentUser.photoURL);

    const path = useLocation().pathname;
    return (
        <Navbar className="border-b-2">
            <Link
                to="/"
                className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
            >
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                    SV
                </span>
                Blog
            </Link>

            <form className="hidden lg:block mx-auto">
                <TextInput
                    type="text"
                    placeholder="Search..."
                    rightIcon={AiOutlineSearch}
                    className="dark:text-gray-300 dark:bg-gray-700"
                />
            </form>

            <div className="flex items-center gap-2 md:order-2">
                <Button className="w-12 h-10 lg:hidden" color="gray" pill>
                    <AiOutlineSearch />
                </Button>

                <Button className="w-12 h-10 hidden sm:inline-block" color="gray" pill>
                    <FaMoon />
                </Button>

                {
                    currentUser ? (
                        <Dropdown
                            arrowIcon ={false}
                            inline
                            label={
                                <Avatar
                                    alt="User"
                                    img={currentUser?.photoURL}
                                    rounded
                                />
                            }
                        >
                        <Dropdown.Header className="flex flex-col">
                            <span>{currentUser?.username}</span>
                            <span>{currentUser?.email}</span>
                        </Dropdown.Header>
                        <Link to={"/dashboard?tab=profile"}>
                            <Dropdown.Item>Profile</Dropdown.Item>
                        </Link>
                        <Dropdown.Divider />
                        <Dropdown.Item>Logout</Dropdown.Item>
                
                        </Dropdown>
                        
                        
                    ) : (
                        <Link to="/sign-in">
                            <Button gradientDuoTone="purpleToBlue">Sign In</Button>
                        </Link>
                    )
                }

                <Navbar.Toggle />
            </div>

            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as="div">
                    <Link to="/">Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/about'} as="div">
                    <Link to="/about">About</Link>
                </Navbar.Link>
                <Navbar.Link active={path === '/projects'} as="div">
                    <Link to="/projects">Projects</Link>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
