import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmP, setConfirmP] = useState("");
  const [error, setError] = useState("");
  const [logged, setLogged] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const confirmPasswordHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmP) {
      setError("Passwords do not match");
    } else {
      setError("");

      try {
        const res = await axios.post("http://localhost:3000/api/auth/signup", {
          name,
          email,
          password,
          mobile,
        });
        setLogged(true);
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("An error occurred during registration.");
        }
      }
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900 ">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              class="space-y-4 md:space-y-6"
              onSubmit={confirmPasswordHandler}
            >
              <div>
                <label
                  for="Name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="Name"
                  name="Name"
                  id="Name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                  required=""
                ></input>
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500dark:focus:border-blue-500"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required=""
                ></input>
              </div>
              <div>
                <label
                  for="PhoneNo"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Phone No.
                </label>
                <input
                  type="PhoneNO"
                  name="PhoneNo"
                  id="PhoneNo"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Phone Number"
                  onChange={(e) => setMobile(e.target.value)}
                  required=""
                ></input>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    onChange={(e) => setConfirmP(e.target.value)}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                  <button
                    type="button"
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  ></input>
                </div>
                <div class="ml-3 text-sm">
                  <label
                    for="terms"
                    class="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to={"/signin"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  {" "}
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {logged && (
        <div className="backdrop-blur-sm   h-screen w-screen shadow-2xl fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black-50">
          <div className="p-6  grid grid-cols-4">
            <div className="rounded shadow-lg p-6 dark:text-white ">
              <p className="text-xl font-bold mb-4">Registration successful!</p>
              <p className="text-xl font-bold mb-4">NAME : {name}</p>
              <p className="text-xl font-bold mb-4">Email: {email}</p>
              <p className="text-xl font-bold mb-4">Phone No. : {mobile}</p>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </section>
  );
};
