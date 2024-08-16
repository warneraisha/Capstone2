import { Link } from 'react-router-dom';

let Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900  start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <span className="self-center text-2xl font-serif text-gray-500 font-semibold whitespace-nowrap dark:text-white">
              E-Commerce
            </span>
          </Link>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li className="text-black">
                <Link to={'about'}>About</Link>
              </li>
              <li className="text-black">
                <Link to={'cart'}>Cart </Link>
              </li>
              <li className="text-black">
                <Link to={'contact'}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
