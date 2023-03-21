import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit ,formState: { errors }} = useForm();
  const handleLogin=(data)=>{
    console.log(data)
  }

  return (
    <div>
        <h1 className='text-3xl font-bold text-center mt-10'>Login</h1>
       <div className='mt-6 flex justify-center items-center'>
       <div className='w-96 p-7 shadow-lg'> 
       <form onSubmit={handleSubmit(handleLogin)}>
    
    <div className="form-control w-full max-w-xs">
 <label className="label">
  <span className="label-text">Your Email</span>
 </label>
 <input type="text"  {...register("email",{ required: "Email Address is required" })} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
 {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
</div>
    <div className="form-control w-full max-w-xs">
 <label className="label">
  <span className="label-text">Your Password</span>
 </label>
 <input type="password"  {...register("password",{ required: "Password Address is required" , minLength:{value:6, message: "Password must be 6 Characters"}})} placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
 {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
    </div>   
    <span className="label-text">Forget Password?</span>
<div>

</div>

    {/* <p>{data}</p> */}
    <input className='btn color-lime-500	w-full' value='login' type="submit" />
  </form>
  <p className='text-primary'>New to Here? <Link to='/signup'>Create An Account</Link></p>
  <div className="divider">OR</div>
  <button className='btn color-lime-500	w-full'>Continue With Google</button>
  
       </div>
       </div>
    </div>
  )
}

export default Login