import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mt-auto flex justify-between bg-gray-50 shadow-inner sm:w-screen sm:mt-auto sm:h-25 sm:bg-gray-50 sm:shadow-inner">
        <footer className="flex h-full w-full  sm:w-full sm:h-full sm:flex sm:items-center sm:justify-center">
          <div className=" flex w-full h-full justify-between px-4 sm:w-full sm:h-full sm:flex sm:flex-row sm:justify-between sm:items-center sm:mx-20 sm:my-auto">
            <div>&copy;2025Tickbox. All Right Reserved</div>
            <div className="flex flex-col sm:flex sm:flex-row sm:gap-10">
              <p>Privacy</p>
              <p>Term</p>
              <p>Contact</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
