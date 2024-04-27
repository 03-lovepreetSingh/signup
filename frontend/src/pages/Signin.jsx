import { Login } from "../components/Login";
import { Quote } from "../components/Quote";

export const Signin = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div>
        <Login />
      </div>
      <div>
        <Quote />
      </div>
    </div>
  );
};
