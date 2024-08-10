let Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900  start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className=" text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            <a href="/">E-Commerce</a>
          </span>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="text-black">About</li>
              <li className="text-black">Cart</li>
              <li className="text-black">Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
