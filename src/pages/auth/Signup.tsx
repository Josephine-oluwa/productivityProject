import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import pix from "../../assets/man.svg";
import { Link, useNavigate } from "react-router-dom";
import { RegisterAPI } from "../../apis/UserAuthAPI";
import auth from "../../assets/auth.webp"

const Signup = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string>(pix);
  const [avatar, setAvatar] = useState<string>("");
  
  const onHandleImage = (event: any) => {
    const localImage = event.target.files[0];
    const saveImage = URL.createObjectURL(localImage);
    setImage(localImage);
    setAvatar(saveImage);
  };
  const Schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmission = handleSubmit((data: any) => {
    const { name, email, password } = data;

    const myForms = new FormData();
    myForms.append("name", name);
    myForms.append("email", email);
    myForms.append("password", password);
    myForms.append("avatar", image);
    

    RegisterAPI(myForms).then(() => {
      navigate("/signin");
    });
  });
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden opacity-90 bg-black" style={{backgroundImage: `url(${auth})`}}>
      <div className="h-full w-full relative">
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <form
            onSubmit={onHandleSubmission}
            className="h-[580px] w-[800px] bg-white flex rounded-[30px] shadow-md relative ml-[400px]"
          >
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-75 z-[-1] rounded-[30px]"></div>

            {/* Card Content */}
            <div className="h-[550px] w-[400px] justify-center items-center flex flex-col">
              <div className="flex flex-col items-center">
                <img
                  className="w-[300px] h-[300px] border-[50%] object-cover rounded-[50%] border-[purple] border-[4px]"
                  src={avatar ? avatar : image}
                  alt="Avatar"
                />
                <label
                  className="py-5 px-10 my-6 bg-blue-950 text-purple-200 rounded-md hover:scale-[1.02] hover:cursor-pointer duration-300 transition-all"
                  htmlFor="image"
                >
                  Upload Image
                </label>
                <input
                  className="hidden"
                  placeholder="image"
                  id="image"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={onHandleImage}
                />
              </div>
            </div>
            <div className="h-[550px] w-[400px] p-8">
              <h1 className="font-semibold text-3xl mb-6">Get Started</h1>
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold">Name</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded shadow-md"
                    placeholder="Enter your Name"
                    {...register("name")}
                  />

                  {errors.name?.message && (
                    <span className="text-rose-500 text-[12px]">
                      fill in your name credentials
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold">Email</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded shadow-md"
                    placeholder="Enter your Email"
                    {...register("email")}
                  />
                  {errors.email?.message && (
                    <span className="text-rose-500 text-[12px]">
                      fill in your email credentials
                    </span>
                  )}{" "}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full border p-2 rounded shadow-md"
                    placeholder="Enter your Password"
                    {...register("password")}
                  />
                  {errors.password?.message && (
                    <span className="text-rose-500 text-[12px]">
                      fill in your password credentials
                    </span>
                  )}{" "}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full border p-2 rounded shadow-md"
                    placeholder="Confirm your Password"
                    {...register("confirm")}
                  />
                  {errors.confirm?.message && (
                    <span className="text-rose-500 text-[12px]">
                      retype your password
                    </span>
                  )}{" "}
                </div>
                <button
                  className="py-2 px-8 bg-blue-950 text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all ml-24 "
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="my-4">
                <hr />
              </div>
              <div className="mt-4">
                <div className="flex flex-col items-center text-sm">
                  <div>
                    Already have an account?
                    <Link to="/signin" className="text-red-500 ml-[8px]">
                      Sign in here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
