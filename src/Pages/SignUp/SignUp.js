import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import google from "../../assets/google.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const {register, formState: { errors }, handleSubmit} = useForm();

    const {createUser} = useContext(AuthContext);

    const handleSignUp = data => {
      console.log(data);
      createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error));
    }
    return (
        <div className="h-[800px] flex justify-center items-start mt-20">
      <div className="max-w-sm w-full shadow-2xl p-10 rounded-3xl">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-cyan-400 to-sky-600 py-2 text-center mb-4">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-sm">
          <input type="text" {...register("name", {
            required: true
          })} placeholder="Full Name" className="input input-bordered input-info w-full max-w-sm mt-4" />
          </div>
          <div className="form-control w-full max-w-sm">
          <input type="text" {...register("email", {
            required: "Email is required!"
          })} placeholder="Email" className="input input-bordered input-info w-full max-w-sm mt-4" />
          {errors.email && <p className="text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-sm">
          <input type="password" {...register("password", {
            required: "Password is required!",
            minLength: {value: 8, message: 'Password must be at least 8 characters!'},
            pattern: {
              value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
              message: "Password must be strong!",
            }
            })} placeholder="Password" className="input input-bordered input-info w-full max-w-sm mt-4" />
          {errors.password && <p className="text-error">{errors.password?.message}</p>}
          <p className="text-sm mt-3" >Forget Password?</p>
          </div>
          <input className="btn btn-accent mt-4 w-full" value="Sign Up" type="submit" />
        </form>
        <p className="text-sm mt-3 text-center" >Already have an account? <Link className="text-sky-600" to="/login">Login.</Link></p>
      <div className="divider">OR</div>
      <div className="flex justify-evenly ">
        <Link>
          <img className="w-10" src={facebook} alt="" />
        </Link>
        <Link>
          <img className="w-10" src={google} alt="" />
        </Link>
        <Link>
          <img className="w-10" src={twitter} alt="" />
        </Link>
      </div>
      </div>
    </div>
    );
};

export default SignUp;