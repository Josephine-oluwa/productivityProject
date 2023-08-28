import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AdminSignin = () => {
  const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirm: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
  });

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
    <div className="h-screen bg-blue-50 flex justify-center items-center">
      {/* <div className="h-[500px] w-[400px] bg-red-400 flex rounded-[30px] shadow-md"> */}
        <div className="min-h-[300px] w-[400px] bg-white flex rounded-[30px] shadow-md flex-col  items-center">
          <div >
            <h1 className="font-semibold text-3xl mb-6 ml-[40px] mt-[10px]">WELCOME BACK</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Email</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded shadow-md"
                  placeholder="Enter your Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-rose-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold">Password</label>
                <input
                  type="password"
                  className="w-full border p-2 rounded shadow-md"
                  placeholder="Enter your Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-rose-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="w-full flex justify-center ">
                <button
                  className="py-2 px-8 bg-blue-950 text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all "
                  type="submit"
                >
                  Signin
                </button>
              </div>
                <div className="w-full h-[50px]  flex justify-center items-center">
                  <div className="text-[14px]">Don't have an account? <Link to="/admin/signup" className="underline text-red-600">Sign up</Link></div>
                </div>
            </form>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default AdminSignin;
