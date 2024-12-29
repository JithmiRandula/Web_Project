
import React, { useState } from 'react';
import { Container, CardMedia, Typography, Button, Box, Card, CardContent, CardActions, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Link } from 'react-router-dom';
import Pic2 from '../../images/pic2.png';
import Pic3 from '../../images/pic3.png';
import Pic4 from '../../images/pic4.jpeg';

function App() {

  const [open, setOpen] = useState(false);
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    description: '',
    details: '',
  });

  const handleClickOpen = (course) => {
    setCourseDetails(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const courses = [
    {
      title: 'Web Development Bootcamp',
      image: Pic2,
      description: 'Learn HTML, CSS, JavaScript, and frameworks like React and Node.js in this full-stack development course.',
      details: (
        <div>
          <Typography variant="body1">
            In this Web Development Bootcamp, you will learn the fundamentals of front-end and back-end development. Topics include:
            <ul>
              <li>HTML, CSS, and JavaScript</li>
              <li>React.js and Node.js</li>
              <li>Version control with Git and GitHub</li>
              <li>Database management with MongoDB</li>
              <li>Building real-world projects</li>
            </ul>
            By the end of the course, you will be ready to build full-stack web applications.
          </Typography>
        </div>
      ),
    },
    {
      title: 'Python for Beginners',
      image: Pic3,
      description: 'Get started with Python programming. No prior coding experience is required. Ideal for beginners.',
      details: (
        <div>
          <Typography variant="body1" >
            This course will guide you through Python basics, and you'll learn how to:
            <ul>
              <li>Write and run Python code</li>
              <li>Understand data structures and algorithms</li>
              <li>Work with libraries like NumPy and Pandas</li>
              <li>Build Python applications from scratch</li>
            </ul>
            By the end of the course, you'll have the skills to write Python scripts and begin building useful applications.
          </Typography>
        </div>
      ),
    },
    {
      title: 'Data Science & Machine Learning',
      image: Pic4,
      description: 'Master data analysis, machine learning, and artificial intelligence with hands-on projects and real-world examples.',
      details: (
        <div>
          <Typography variant="body1" >
            This course covers key concepts of data science and machine learning:
            <ul>
              <li>Data analysis with Pandas and Matplotlib</li>
              <li>Supervised and unsupervised machine learning algorithms</li>
              <li>Building machine learning models using scikit-learn</li>
              <li>Data visualization and insights generation</li>
              <li>Working with real-world datasets to solve problems</li>
            </ul>
            You'll work on projects that prepare you for a career in data science.
          </Typography>
        </div>
      ),
    },
  ];

  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#fafafa' }}>
    
      <Box sx={{ backgroundColor: '#003366', color: 'white', padding: '3rem 0' }}>
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Welcome to Learn Academy
          </Typography>
          <Typography variant="h5" align="center">
            Start learning the latest technologies with us!
          </Typography>
        </Container>
      </Box>

     
      <Box sx={{ padding: '3rem 0' }}>
        <Container>
          <Typography variant="h4" gutterBottom align="center" sx={{ color: '#003366' }}>
            About Us
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Learn Academy is an online platform offering high-quality courses in web development, programming languages, and more.
            Our mission is to provide accessible education for everyone.
          </Typography>
        </Container>
      </Box>

    
      <Box sx={{ padding: '3rem 0', backgroundColor: '#f0f0f0' }}>
        <Container>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: '#003366' }}>
            Our Courses
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {courses.map((course, index) => (
              <Box sx={{ width: '300px' }} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.image}
                    alt={course.title}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {course.title}
                    </Typography>
                    <Typography variant="body2">{course.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => handleClickOpen(course)}>
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

 
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{courseDetails.title}</DialogTitle>
        <DialogContent>
          {courseDetails.details}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

   
      <Box sx={{ backgroundColor: '#003366', color: 'white', padding: '2rem 0' }}>
        <Container>
          <Typography variant="h5" align="center" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" align="center">
            Have questions or need assistance? Contact us anytime!
          
          </Typography>
          <br/>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="secondary" component={Link} to="/contact">
              Contact Us
            </Button>
          </Box>
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

export default App;



