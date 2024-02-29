import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e: any) => {
    console.log('event', e.target);
    const { name, value } = e.target;
    setFormData((event) => {
      return { ...event, [name]: value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('formData', formData);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        title: formData.name,
      }),
    })
      .then((res) => res.json())
      .then((result) => console.log('resultdata', result));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
