import { toggleDarkMode } from "../../features/mode/themeSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(toggleDarkMode())}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default Header;
