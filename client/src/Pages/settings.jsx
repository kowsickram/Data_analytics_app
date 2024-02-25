import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Settings()  {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    // Add more fields as needed
  });

  useEffect(() => {
    axios.get('/api/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/user', userData)
      .then(response => {
        console.log('User data updated successfully:', response.data);
        // Optionally, you can show a success message or redirect the user
      })
      .catch(error => {
        console.error('Error updating user data:', error);
        // Optionally, you can show an error message
      });
  };

  return (
    <div className='flex flex-col p-4 justify-center items-center'>
      <h2 className='text-white font-medium text-3xl mb-4'>Settings</h2>
      <form className='w-full max-w-md' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className='block text-white font-medium text-xl'>Username:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
        </div>
        <div className="mb-4">
          <label className='block text-white font-medium text-xl'>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"/>
        </div>
        <button type="submit" className='text-white p-2 rounded-md bg-slate-950'>Save Changes</button>
      </form>
    </div>
  );
};
