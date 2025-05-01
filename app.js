import React, { useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');
  const [color, setColor] = useState('black');

  const login = (e) => {
    e.preventDefault();
    const user = e.target.user.value.trim();
    const pass = e.target.pass.value.trim();

    if (user === 'admin' && pass === '1234') {
      setMsg('Login Successful!');
      setColor('green');
    } else {
      setMsg('Invalid username or password!');
      setColor('red');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Login Form</h2>
      <form onSubmit={login}>
        <input name="user" placeholder="Username" required /><br /><br />
        <input name="pass" type="password" placeholder="Password" required /><br /><br />
        <button type="submit">Login</button>
      </form>
      <p style={{ color }}>{msg}</p>
    </div>
  );
}

export default App;
