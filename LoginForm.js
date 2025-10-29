import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'user@example.com' && password === '12345') {
      setMessage('✅ Login Successful!');
    } else {
      setMessage('❌ Invalid email or password!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        required
      />

      <button type="submit">Login</button>
      <p className="message">{message}</p>
    </form>
  );
}

export default LoginForm;
