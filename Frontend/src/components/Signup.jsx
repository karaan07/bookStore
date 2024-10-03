import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <div className='w-[600px]'>
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            {/* SignUp Form */}
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close modal button */}
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">SignUp</h3>

              {/* Name */}
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input type='text' placeholder='Enter Your Name' className='w-80 px-3 py-1 border-rounded-md outline-none' {...register("name", { required: true })} />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type='email' placeholder='Enter Your E-mail' className='w-80 px-3 py-1 border-rounded-md outline-none' {...register("email", { required: true })} />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type='password' placeholder='Enter Your Password' className='w-80 px-3 py-1 border-rounded-md outline-none' {...register("password", { required: true })} />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Sign Up button */}
              <div className='mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  Sign Up
                </button>
              </div>
            </form>

            {/* Login link */}
            <div className='flex justify-center mt-4'>
              <span>Have an account?</span>
              <button
                className='text-blue-500 underline ml-2'
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
            </div>
          </div>

          {/* Render the Login modal outside the form */}
          <dialog id="my_modal_3">
            <Login />
          </dialog>
        </div>
      </div>
    </>
  );
}

export default Signup;



