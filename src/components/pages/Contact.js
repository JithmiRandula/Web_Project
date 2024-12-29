// src/Contact.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function Contact() {
  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fafafa' }}>

      <Box sx={{ backgroundColor: '#003366', color: 'white', padding: '3rem 0' }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="h5" align="center">
            We'd love to hear from you. Feel free to reach out!
          </Typography>
        </Container>
      </Box>

      <Box sx={{ padding: '3rem 0' }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#003366' }}>
            Get In Touch
          </Typography>
          <form>
          
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{ marginBottom: 2 }}
            />
     
            <TextField
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
        
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="secondary" type="submit">
                Send Message
              </Button>
            </Box>
          </form>
        </Container>
      </Box>

     
      <Box sx={{ backgroundColor: '#003366', color: 'white', padding: '1rem 0' }}>
        <Container>
          <Typography variant="body2" align="center">
            &copy; 2024 Learn Academy. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

export default Contact;
