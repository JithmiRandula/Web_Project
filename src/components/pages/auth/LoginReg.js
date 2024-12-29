import React, { useState } from 'react';
import { Box, Card, Tab, Tabs, TextField, Button, Typography } from '@mui/material';
import Pic1 from '../../../images/pic1.png';

const TabPanel = ({ children, value, index }) => (
  <div role="tabpanel" hidden={value !== index}>
    {value === index && <Box>{children}</Box>}
  </div>
);

function LoginReg() {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e, newValue) => setValue(newValue);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill out all fields');
      return;
    }
    setError('');
    console.log('Logging in:', { email, password });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill out all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setError('');
    console.log('Registering:', { username, email, password });
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
   
      <Box
        sx={{
          flex: 1,
          backgroundImage: `url(${Pic1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px 0 0 8px',
        }}
      />
      
    
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: 4,
          borderRadius: '0 8px 8px 0',
          boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Card sx={{ padding: 4 }}>
          <Box>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="Login" sx={{ textTransform: 'none', fontWeight: 'bold', color: 'black' }} />
              <Tab label="Register" sx={{ textTransform: 'none', fontWeight: 'bold', color: 'black' }} />
            </Tabs>

            <TabPanel value={value} index={0}>
              <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                User Login
              </Typography>
              <form onSubmit={handleLogin}>
                {error && <Typography color="error" sx={{ marginBottom: 2 }}>{error}</Typography>}
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{ marginBottom: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: '10px' }}>
                  Login
                </Button>
              </form>
            </TabPanel>

            <TabPanel value={value} index={1}>
              <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
                User Registration
              </Typography>
              <form onSubmit={handleRegister}>
                {error && <Typography color="error" sx={{ marginBottom: 2 }}>{error}</Typography>}
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  sx={{ marginBottom: 2 }}
                />
                <TextField
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  sx={{ marginBottom: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ padding: '10px' }}>
                  Register
                </Button>
              </form>
            </TabPanel>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}

export default LoginReg;


