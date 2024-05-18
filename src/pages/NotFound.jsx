import { Box, Typography } from '@mui/material';
import bgImage from '../assets/404.png';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Box>
      <Nav />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={3}
        flexDirection="column"
      >
        <img src={bgImage} alt="404" style={{ width: '60vw', height: '60vh' }} />

        <Typography variant="h4" align="center">
          Oops...Looks like Lars is still on a vacation
        </Typography>

        <Typography variant="h6" align="center">
          Check again soon or go to <Link to="/">Home page</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
