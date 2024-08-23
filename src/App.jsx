import Navbar from './Navbar';
// import Home from './Home';
import { Outlet } from 'react-router-dom';
import ThemeContext from './utility/ThemeContext';

function App() {
  return (
    <>
      <ThemeContext>
        <Navbar />
        <Outlet />
      </ThemeContext>
    </>
  );
}
export default App;
