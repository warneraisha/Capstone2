import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Theme } from './utility/ThemeContext';

const Navbar = () => {
  const { theme, setTheme } = useContext(Theme);

  // Function to toggle theme
  const handleThemeChange = (event) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  };

  // Theme class names
  const themeClasses =
    theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white';

  return (
    <nav className={themeClasses}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <span className="self-center text-2xl font-serif  font-semibold whitespace-nowrap">
            FlippyKart
          </span>
        </Link>
        <div
          className="hidden w-full md:flex md:w-auto md:order-1 items-center justify-between"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {/* Theme toggle */}
            <li>
              <input
                type="checkbox"
                id="darkSwitch"
                onChange={handleThemeChange}
                checked={theme === 'dark'}
                className="relative w-[3.25rem] h-7 bg-gray-200 checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-gray-700 focus:ring-gray-700 focus:outline-none appearance-none before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 after:absolute after:end-1.5 after:top-[calc(50%-0.40625rem)] after:w-[.8125rem] after:h-[.8125rem] after:bg-no-repeat after:bg-[right_center] after:bg-[length:.8125em_.8125em] after:transform after:transition-all after:ease-in-out after:duration-200 after:opacity-70 checked:after:start-1.5 checked:after:end-auto"
                data-hs-theme-switch=""
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
