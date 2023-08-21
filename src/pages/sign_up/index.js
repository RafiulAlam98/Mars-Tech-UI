/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useForm } from "react-hook-form";
export default function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[500px] background  flex justify-center items-center">
      <div className="w-96  backgr">
        <h2 className="text-3xl text-center mb-5 text-orange-800">
          <span className="border-b-2 border-orange-800">Please Sign Up</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className=" text-center">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-red-400">
                What is your email?
              </span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-sm rounded input-bordered w-full "
            />
            {errors.role && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-red-400">
                What is your password?
              </span>
            </label>
            <input
              {...register("password", {
                required: "password is required",
              })}
              type="password"
              className="input input-sm rounded input-bordered w-full "
            />
            {errors.password && (
              <span className="text-black">This field is required</span>
            )}
          </div>

          <input
            type="submit"
            className="btn btn-sm rounded w-1/2 bg-[#04AA6D] hover:bg-[#059862] text-white my-3"
          />
        </form>
        <p className="text-red-400">
          Not an account?
          <Link href="/login" className="text-secondary ml-2">
            Login
          </Link>
        </p>

        <div className="divider text-black font-bold">OR</div>
        <button className="btn  rounded btn-sm btn-outline bg-white w-full">
          Continue With Google
        </button>
        <div className="divider text-black font-bold">OR</div>
        <button className="btn rounded btn-sm btn-outline bg-white w-full">
          Continue With Github
        </button>
      </div>
    </div>
  );
}
