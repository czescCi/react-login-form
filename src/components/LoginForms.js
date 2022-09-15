import React, { useState } from 'react'

function LoginForms({ Login, error }) {

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details);
    }

    const changeName = (e) => {
        setDetails({...details, name: e.target.value});
    }
    
    const changeEmail = (e) => {
        setDetails({...details, email: e.target.value});
    }
    
    const changePassword = (e) => {
        setDetails({...details, password: e.target.value});
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
          <div className="form-inner">
              <h2>Login</h2>
              <div className="form-group">
                  <label htmlFor='name'>Name:</label>
                  <input 
                  type='text' 
                  name='name' 
                  id='name' 
                  value={details.name} 
                  onChange={changeName} 
                  />
              </div>
              <div className="form-group">
                  <label htmlFor='email'>Email:</label>
                  <input 
                  type='email' 
                  name='email' 
                  id='email'
                  value={details.email}
                  onChange={changeEmail}
                  />
              </div>
              <div className="form-group">
                  <label htmlFor='password'>Password:</label>
                  <input 
                  type='password' 
                  name='password' 
                  id='password' 
                  value={details.password}
                  onChange={changePassword}
                  />
              </div>
              <input type='submit' value='login' />
          </div>
      </form>
    </div>
  )
}

export default LoginForms
