import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SigninAPI } from "../../apis/UserAuthAPI";
import { useDispatch } from "react-redux";
import { user } from "../../global/GlobalState";
import auth from "../../assets/auth.webp";

const Signinscreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    SigninAPI({ email, password }).then((res: any) => {
      dispatch(user(res));
      navigate("/access/create");
    });
  });

  return (
    <div
      className="w-full h-[100vh] flex items-center justify-center flex-col object-cover "
      style={{ backgroundImage: `url(${auth})` }}
    >
      <div className="w-full h-full bg-black flex justify-center items-center opacity-70">
        <form
          className="w-[400px] h-[300px] ml-[350px] bg-gray-500 shadow-2xl  flex flex-col items-center  rounded-[20px]"
          onSubmit={onSubmit}
        >
          <div className="mt-[20px] text-[30px] font-semibold text-black">
            Signin
          </div>

          <div className="w-[300px] h-[40px] bg-white  mt-[30px] rounded-[40px]">
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full h-full border-none placeholder:ml-5 outline-none bg-gray-300 bg-opacity-5 px-4"
              {...register("email")}
            />
            {errors.email?.message && (
              <div className="text-white text-[12px] flex justify-end">
                invalid email address
              </div>
            )}
          </div>
          <div className="w-[300px] h-[40px] bg-white mt-[30px] rounded-[40px]">
            <input
              type="text"
              placeholder="Password"
              className="h-full border-none w-full placeholder:ml-5 outline-none bg-gray-300 bg-opacity-5 px-4"
              {...register("password")}
            />
            {errors.password?.message && (
              <div className="text-white text-[12px] flex justify-end">
                Invalid password
              </div>
            )}
          </div>

          <button
            type="submit"
            className="px-[15px] py-[5px] rounded-[5px] bg-black mt-5 text-white"
          >
            Signin
          </button>
          <div className="mt-[10px]">
            <div>
              Don't have an account?
              <Link to="/signup" className="text-red-600 font-medium ml-[10px]">
                Signup
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signinscreen;
