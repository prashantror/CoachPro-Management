import React, { useState } from 'react';
import { acceptCoachInvitation } from './../common/Api';
import { useNavigate } from 'react-router-dom';

const AcceptInvitation = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const invitation_token = queryParameters.get("invitation_token")
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== passwordConfirmation) {
      setError('Password and confirmation do not match.');
      return;
    }

    try {
      const data = await acceptCoachInvitation(invitation_token, password);
      if (data) {
        if (data.success) {
          navigate(`/`)
        } else {
          setError(data.errors);
        }
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <div>
      <h2>Accept Invitation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AcceptInvitation;
