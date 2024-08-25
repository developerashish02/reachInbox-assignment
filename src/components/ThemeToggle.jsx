import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../features/mode/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none"
    >
      Toggle Dark Mode
    </button>
  );
};

export default ThemeToggle;
