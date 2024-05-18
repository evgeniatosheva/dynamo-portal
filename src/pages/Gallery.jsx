import Nav from '../components/Nav';
import { Box, Card, Typography, Button } from '@mui/material';
import galleryMainImage from '../assets/gallery-main-image.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import { Link } from 'react-router-dom';
import { UilAngleRightB, UilAngleLeftB } from '@iconscout/react-unicons';

const Gallery = () => {
  return (
    <Box m={4}>
      <Nav />

      <Typography sx={{ mb: 3 }} component={Link} to="/galleries">
        Back
      </Typography>

      <Card sx={{ width: '60%', m: 'auto', p: 2, display: 'flex', flexDirection: 'column' }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Summer party 2024</Typography>
          <Button>Add more</Button>
        </Box>

        <img
          width="70%"
          style={{ margin: 'auto', marginTop: 30 }}
          src={galleryMainImage}
          alt="gallery"
        />

        <Box display="flex" gap={2} mt={4} alignItems="center">
          <UilAngleLeftB />
          <Card sx={{ width: '25%' }}>
            <img src={gallery1} alt="gallery" width="100%" />
          </Card>
          <Card sx={{ width: '25%' }}>
            <img src={gallery2} alt="gallery" width="100%" />
          </Card>
          <Card sx={{ width: '25%' }}>
            <img src={gallery3} alt="gallery" width="100%" />
          </Card>
          <Card sx={{ width: '25%' }}>
            <img src={gallery4} alt="gallery" width="100%" />
          </Card>
          <UilAngleRightB />
        </Box>
      </Card>
    </Box>
  );
};

export default Gallery;
