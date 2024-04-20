import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Settings()  {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [editMode, setEditMode] = useState(false);
  const [tabIndex, setTabIndex] = useState(0); 

  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  console.log(storedUser.email)

  useEffect(() => {
    // Fetch user data using the stored email
    axios.get('/api/userdata', {
      params: { userEmail: storedUser.email },
    })
      .then(response => {
        setUserData(response.data);
        console.log(userData);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [storedUser.email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const showToast = (message, type) => {
    if (type === 'success') {
      toast.success(message);
    } else if (type === 'error') {
      toast.error(message);
    }
  };

  const handleUpdateUsername = () => {
    axios.post('/api/update', { username: userData.username })
      .then(response => {
        showToast('Username updated successfully', 'success');
      })
      .catch(error => {
        showToast('Error updating username', 'error');
      });
  };

  const handleUpdateEmail = () => {
    axios.post('/api/update', { email: userData.email })
      .then(response => {
        showToast('Email updated successfully', 'success');
      })
      .catch(error => {
        showToast('Error updating email', 'error');
      });
  };

  const handleUpdatePassword = () => {
    if (userData.newPassword !== userData.confirmPassword) {
      showToast('New password and confirm password do not match', 'error');
      return;
    }

    // Make sure old password matches
    axios.post('/api/checkPassword', { oldPassword: userData.password })
      .then(response => {
        axios.post('/api/update', { password: userData.newPassword })
          .then(response => {
            showToast('Password updated successfully', 'success');
          })
          .catch(error => {
            showToast('Error updating password', 'error');
          });
      })
      .catch(error => {
        showToast('Old password is incorrect', 'error');
      });
  };

  return (
    <div className='flex flex-col p-4 justify-center items-center'>
      <h2 className='text-white font-Quicksand text-3xl mb-4'>Settings</h2>
      <ToastContainer />
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={tabIndex}
          onChange={(e, newIndex) => setTabIndex(newIndex)}
          centered
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Profile" />
          <Tab label="Security" />
        </Tabs>
      </Box>
      <TabPanel value={tabIndex} index={0}>
        <div className='mb-4'>
          <label className='block text-white font-normal text-lg'>User name:</label>
          <input type="text" name="username" value={userData.username} onChange={handleChange} className={`w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${editMode ? '' : 'pointer-events-none'}`} disabled={!editMode} />
          {editMode && <button className=' bg-slate-900 text-white' onClick={handleUpdateUsername}>Update Username</button>}
        </div>
        <div className='mb-4'>
          <label className='block text-white font-normal text-lg'>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} className={`w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${editMode ? '' : 'pointer-events-none'}`} disabled={!editMode} />
          {editMode && <button className=' bg-slate-900 text-white' onClick={handleUpdateEmail}>Update Email</button>}
        </div>
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <div className='mb-4'>
          <label className='block text-white font-normal text-lg'>New Password:</label>
          <input type="password" name="newPassword" value={userData.newPassword} onChange={handleChange} className={`w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${editMode ? '' : 'pointer-events-none'}`} disabled={!editMode} />
        </div>
        <div className='mb-4'>
          <label className='block text-white font-normal text-lg'>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} className={`w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 ${editMode ? '' : 'pointer-events-none'}`} disabled={!editMode} />
          {editMode && <button onClick={handleUpdatePassword}>Update Password</button>}
        </div>
      </TabPanel>
      {!editMode && <button onClick={handleEdit} className='text-white'>Edit</button>}
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
