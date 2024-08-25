import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLoginMutation } from "../../services/authApiSlice";

const LoginPage = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [googleLogin] = useGoogleLoginMutation();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const token = await googleLogin("https://frontend.com").unwrap();
      navigate(`/?token=${token}`);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-[#111214] flex items-center justify-center">
        <div className="bg-white dark:bg-[#343A40] p-8 rounded-lg shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200 mb-6">
            Create a new account
          </h2>
          <button
            className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleGoogleLogin}
          >
            <i className="fa-brands fa-google mx-2"></i>
            Sign up with Google
          </button>
          <div className="mt-4">
            <button className="w-full py-2 px-4 bg-[#4B63DD] dark:bg-[#4B63DD] text-white rounded-lg font-bold hover:bg-blue-700 dark:hover:bg-blue-600">
              Create an account
            </button>
          </div>
          <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
