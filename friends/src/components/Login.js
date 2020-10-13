import React from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import useForm from "../hooks/useForm";
import validate from "../hooks/validate";
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  
  const history = useHistory();

  function submit() {
		axiosWithAuth()
			.post('/api/login', values)
			.then(res => {
				localStorage.setItem('token', res.data.payload);
				history.push('/protected');
			})
			.catch((error) => {
				console.log('Post error ', error);
      })
    };
  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>Username</label>
          <div>
            <input
              name="username"
              type="username"
              onChange={handleChange}
              value={values.username}
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
export default Login;