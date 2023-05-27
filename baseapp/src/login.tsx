import React from "react"
import './css/LoginForm.css';
import { useForm, SubmitHandler  } from 'react-hook-form';

type FormValues = {
  username : string;
  password : string;
}

export const Login = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const onSubmit : SubmitHandler<FormValues> = (data)  => {
    console.log(data);
    return data;
  };

  return (

      <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label >Username</label>
            <input type="text" placeholder="Enter your username" {...register("username", { maxLength: 10, minLength: 4 })}/>
            {errors?.username?.type === "maxLength" && <p style={{color : "Red"}}>Maximum length is 10</p>}
            {errors?.username?.type === "minLength" && <p style={{color : "orange"}}>Minimum length is 6</p>}
            <label >Password</label>
            <input type="password" placeholder="Enter your password" {...register("password", { required: true })}/>
            {errors.password && <p>Password field is required</p>}
            <button type="submit">Login</button>

            <div className="signup">
              Don't have an account? <a href="#">Sign in</a>
            </div>
          </form>
        </div>
  )
}