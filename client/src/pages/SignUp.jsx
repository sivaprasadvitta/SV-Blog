import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Navbar, TextInput, Button, Label, Alert, Spinner } from "flowbite-react";

function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage,setErroMessage] = useState(null);
  const [loading,setLodaing] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value .trim()});
  }

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    if(!formData.username || !formData.email || !formData.password){
      return setErroMessage('please fill all fields');
    }

    try {
      setLodaing(true);
      setErroMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        
      });
      const data = await res.json();
      // console.log(data);
      if(data.success === false){
        return setErroMessage(data.message); 
      }

      setLodaing(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {
      setErroMessage(error.message);
      setLodaing(false);
    }
  }

  return (
    <div className="min-h-screen mt-20 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="flex flex-col md:flex-row gap-8 p-6 max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">

        {/* Left side */}
        <div className="flex-1">
          <Link to="/" className="font-bold text-4xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              SV
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 text-gray-600 dark:text-gray-400">
            Welcome to my blog. Sign up to explore more!
          </p>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <Label value="Your Username" />
              <TextInput type="text" placeholder="Username" id="username" className="mt-1" onChange={handleChange} />
            </div>
            <div>
              <Label value="Your Email" />
              <TextInput type="email" placeholder="Email" id="email" className="mt-1" onChange={handleChange} />
            </div>
            <div>
              <Label value="Your Password" />
              <TextInput type="password" placeholder="Password" id="password" className="mt-1" onChange={handleChange} />
            </div>
            <Button type="submit" disabled={loading} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mt-4">
              {
                loading ?(
                  <>
                    <Spinner size='sm'/>
                    <span className="pl-3">loading..</span>
                    {setLodaing(false)}
                  </>
                ): 'Sign Up'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sign-in' className="text-blue-500">
              Sign In
            </Link>

            <div>
              {
                errorMessage && (
                  <Alert className="mt-5" color='failure'>
                    {errorMessage}
                  </Alert>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
