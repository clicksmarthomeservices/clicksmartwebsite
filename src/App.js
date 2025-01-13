import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Card, CardContent, CardMedia, Box, Grid, Button, CssBaseline } from '@mui/material';
import CameraIcon from '@mui/icons-material/PhotoCamera';

function App() {
  const cards = [1, 2, 3]; // Placeholder for card items
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <CssBaseline />
      {/* Header Section */}
      <AppBar position="sticky" sx={{ backgroundColor: 'primary.main', p: 0.5 }}>
        <Toolbar>
          <CameraIcon sx={{ marginRight: 1 }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '0.875rem' }}>
            ClickSmart Home Services
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Unit */}
      <Box sx={{ backgroundColor: 'background.paper', py: 3 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ fontSize: '1.25rem' }}>
            Home services at your fingertips!
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontSize: '0.75rem' }}>
            Book a consultation now—it’s free! We will find a time that works best for you to fit your busy schedule!
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Button variant="contained" color="primary" sx={{ fontWeight: 'bold', mr: 1, fontSize: '0.75rem' }}>
              Book now!
            </Button>
            <Button variant="outlined" color="primary" sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}>
              Set up a free consultation
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Image Slider Section */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem' }}>
          Our work
        </Typography>
        <Box sx={{ maxWidth: '80%', margin: '0 auto', mb: 2 }}>
          <Card>
            <CardMedia
              component="img"
              alt=""
              image={images[imageIndex]}
              height="200"
              sx={{ objectFit: 'cover' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
              <Button size="small" onClick={handlePrevious} sx={{ fontSize: '0.75rem', mr: 1 }}>
                Previous
              </Button>
              <Button size="small" onClick={handleNext} sx={{ fontSize: '0.75rem' }}>
                Next
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>

      {/* Card Grid Section */}
      <Container sx={{ py: 3 }}>
        <Grid container spacing={2}>
          {cards.map(card => (
            <Grid item key={card} sm={6} md={4} lg={3}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  alt="Sample Image"
                  height="140"
                  image="https://via.placeholder.com/800x400"
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom sx={{ fontSize: '0.875rem' }}>
                    Heading {card}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
                  <Button size="small" color="primary" sx={{ fontSize: '0.75rem' }}>
                    View
                  </Button>
                  <Button size="small" color="primary" sx={{ fontSize: '0.75rem' }}>
                    Edit
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 3 }}>
        <Typography variant="body2" align="center" sx={{ fontSize: '0.75rem' }}>
          © 2025 ClickSmart. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
