import Nav from '../components/Nav';
import { Box, Card, Typography } from '@mui/material';
import galleryThumbnail1 from '../assets/gallery-thumbnail.png';
import { Link } from 'react-router-dom';

const GalleriesList = () => {
  return (
    <Box m={4}>
      <Nav />

      <Typography sx={{ mb: 3 }}>Create a Post</Typography>

      <Box display="flex" alignItems="center" gap={4} flexWrap="wrap">
        <Card
          sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          component={Link}
          to="/gallery"
        >
          <img src={galleryThumbnail1} alt="gallery" height="100%" />
          <Box bgcolor="#6B88C7" p={3}>
            <Typography variant="h6" color="white" sx={{ mb: 2 }}>
              Summer party 2024
            </Typography>
            <Typography variant="body1" color="white">
              Lcation: Park Alle 26
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          component={Link}
          to="/gallery"
        >
          <img src={galleryThumbnail1} alt="gallery" height="100%" />
          <Box bgcolor="#6B88C7" p={3}>
            <Typography variant="h6" color="white" sx={{ mb: 2 }}>
              Fastelavn party 2024
            </Typography>
            <Typography variant="body1" color="white">
              Lcation: Park Alle 26
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          component={Link}
          to="/gallery"
        >
          <img src={galleryThumbnail1} alt="gallery" height="100%" />
          <Box bgcolor="#6B88C7" p={3}>
            <Typography variant="h6" color="white" sx={{ mb: 2 }}>
              Christmas party 2023
            </Typography>
            <Typography variant="body1" color="white">
              Lcation: Park Alle 26
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          component={Link}
          to="/gallery"
        >
          <img src={galleryThumbnail1} alt="gallery" height="100%" />
          <Box bgcolor="#6B88C7" p={3}>
            <Typography variant="h6" color="white" sx={{ mb: 2 }}>
              Summer party 2023
            </Typography>
            <Typography variant="body1" color="white">
              Lcation: Park Alle 26
            </Typography>
          </Box>
        </Card>

        <Card
          sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}
          component={Link}
          to="/gallery"
        >
          <img src={galleryThumbnail1} alt="gallery" height="100%" />
          <Box bgcolor="#6B88C7" p={3}>
            <Typography variant="h6" color="white" sx={{ mb: 2 }}>
              Fastelavn party 2023
            </Typography>
            <Typography variant="body1" color="white">
              Lcation: Park Alle 26
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default GalleriesList;
