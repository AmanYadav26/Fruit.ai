import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
      navigate('/home');
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <p className="text-sm text-center mb-4">
          By signing in you are agreeing to our <a href="#" className="text-green-500">Term</a> and <a href="#" className="text-green-500">privacy policy</a>.
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox"/>
              <span className="ml-2 text-sm text-gray-600">Remember password</span>
            </label>
            <a href="#" className="text-sm text-green-500">Forget password?</a>
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">or connect with</p>
          <div className="flex justify-center mt-4">
            <a href="#" className="text-green-500 mx-2">f</a>
            <a href="#" className="text-green-500 mx-2">t</a>
            <a href="#" className="text-green-500 mx-2">p</a>
            <a href="#" className="text-green-500 mx-2">in</a>
            <a href="#" className="text-green-500 mx-2">O</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
