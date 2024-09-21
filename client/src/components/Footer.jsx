import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs'

// import { FaOtter } from "react-icons/fa";

function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-400">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            {/* logo div */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                SV
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
                <Footer.Title title="About"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='#'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        JS projects
                    </Footer.Link>

                    <Footer.Link
                        href='#'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        SVBlog
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
            <div>
                <Footer.Title title="Follow us"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='https://github.com/sivaprasadvitta'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        GitHub
                    </Footer.Link>

                    <Footer.Link
                        href='https://leetcode.com/u/Sivaprasadvitta'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Leetcode
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
            <div>
                <Footer.Title title="Legal"/>
                <Footer.LinkGroup col>
                    <Footer.Link
                        href='#'
                        // target='_blank'
                        // rel='noopener noreferrer'
                    >
                        Privacy Policy
                    </Footer.Link>

                    <Footer.Link
                        href='#'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Terms and Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
            </div>
          </div>

        </div>
        <Footer.Divider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by='SV' year={new Date().getFullYear()}/>
        </div>
        <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="https://github.com/sivaprasadvitta" icon={BsGithub}/>
        </div>
      </div>
    </Footer>
  );
}

export default FooterCom;
