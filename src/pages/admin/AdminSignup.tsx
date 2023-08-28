import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import pix from "../../assets/main.webp"
import { Link } from "react-router-dom";
const SignupUser = () => {
  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
    confirm: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
  });

  const onHandleImage = (e: any) => {
    const localImage = e.target.files[0];
    const saveImage = URL.createObjectURL(localImage);
    setImage(localImage);
    setAvatar(saveImage);
    console.log(image);
  };

  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState(pix);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="h-screen bg-blue-50 flex justify-center items-center overflow-hidden">
      <div className="h-full w-full relative">
        
        <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center">
          <div className="h-[580px] w-[800px] bg-white flex rounded-[30px] shadow-md relative">
            {/* Gradient Background */}
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-75 z-[-1] rounded-[30px]"></div>
            
            {/* Card Content */}
            <div className="h-[550px] w-[400px] justify-center items-center flex flex-col">
              <div className="flex flex-col items-center">
                <img
                  className="w-[300px] h-[300px] border-[50%] object-cover rounded-[50%] border-[purple] border-[4px]"
                  src={avatar}
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
              <h1 className="font-semibold text-3xl mb-6 ml-[70px]">Get Started</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-sm font-semibold">Name</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded shadow-md"
                    placeholder="Enter your Name"
                    {...register("name")}
                  />
                  {errors.name && <p className="text-rose-500 text-sm">{errors.name.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold">Email</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded shadow-md"
                    placeholder="Enter your Email"
                    {...register("email")}
                  />
                  {errors.email && <p className="text-rose-500 text-sm">{errors.email.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold">Password</label>
                  <input
                    type="password"
                    className="w-full border p-2 rounded shadow-md"
                    placeholder="Enter your Password"
                    {...register("password")}
                  />
                  {errors.password && <p className="text-rose-500 text-sm">{errors.password.message}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full border p-2 rounded shadow-md"
                    placeholder="Confirm your Password"
                    {...register("confirm")}
                  />
                  {errors.confirm && <p className="text-rose-500 text-sm">{errors.confirm.message}</p>}
                </div>
                <button
                  className="py-2 px-8 bg-blue-950 text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all ml-20"
                  type="submit"
                >
                  Register
                </button>
              </form>
              <div className="my-4">
                <hr />
              </div>
              <div className="mt-4">
                <div className="flex flex-col items-center text-sm">
                  <div>Already have an account?</div>
                  <span className="font-bold text-purple-500 hover:cursor-pointer transition-all">
                   <Link to="/admin/signin">
                   Sign in here
                   </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupUser;
