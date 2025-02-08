import React, { useState } from 'react';
import './Notion.css';

const Notion: React.FC = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (password === process.env.REACT_APP_NOTION_PASSWORD) {
      window.location.href = process.env.REACT_APP_NOTION_LINK || '/';
    } else {
      alert('Nope');
    }
  };

  return (
    <form className="notion-form" onSubmit={handleSubmit}>
      <label>
        Are you a Phi? Enter the password to access our Notion page
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
    </form>
  );
};

export default Notion;
