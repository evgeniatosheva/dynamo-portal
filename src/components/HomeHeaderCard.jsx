import { Card, Box, Typography, Button } from '@mui/material';
import profilePicture from '../assets/profile-pic.png';
import wavingHand from '../assets/waving-hand.png';
import {
  UilUser,
  UilPlus,
  UilUtensils,
  UilFile,
  UilCalendarAlt,
  UilUserCircle,
  UilImage,
} from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const HomeHeaderCard = () => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', m: 4 }}>
      <Box bgcolor="#3F5FA6">
        <Box m={4} display="flex" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={4}>
            <img src={profilePicture} alt="placeholder" />
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="h6" color="white">
                Welcome back, Kasper
              </Typography>
              <img width={20} height={20} src={wavingHand} alt="placeholder" />
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2} color="white">
            <Button variant="outlined" startIcon={<UilUser />} color="inherit">
              EDIT YOUR PROFILE
            </Button>
            <Button variant="contained" startIcon={<UilPlus />}>
              Add New Attendance
            </Button>
          </Box>
        </Box>
        <Box m={4} dispaly="flex" flexDirection="column">
          <Typography variant="body1" color="white" sx={{ mb: 2 }}>
            Your activities for the last month
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Card sx={{ width: 'fit-content', px: 2, bgcolor: '#53A2FF', color: 'white' }}>
              12 posts
            </Card>
            <Card sx={{ width: 'fit-content', px: 2, bgcolor: '#53A2FF', color: 'white' }}>
              130 posts interactions
            </Card>
            <Card sx={{ width: 'fit-content', px: 2, bgcolor: '#53A2FF', color: 'white' }}>
              56 new attendance
            </Card>
          </Box>
        </Box>
      </Box>
      <Box bgcolor="#BCC5EC" display="flex" gap={5} p={4}>
        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            flexDirection: 'column',
            p: 2,
          }}
        >
          <UilUtensils size={40} color="#004FFF" />
          <Typography variant="h6">Lunch menu</Typography>
        </Card>

        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            flexDirection: 'column',
            p: 2,
          }}
        >
          <UilFile size={40} color="#004FFF" />
          <Typography variant="h6">Useful links</Typography>
        </Card>

        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            flexDirection: 'column',
            p: 2,
          }}
        >
          <UilCalendarAlt size={40} color="#004FFF" />
          <Typography variant="h6">Calendar</Typography>
        </Card>

        <Card
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            flexDirection: 'column',
            p: 2,
          }}
        >
          <UilUserCircle color="#004FFF" size={40} />
          <Typography variant="h6">Employee list</Typography>
        </Card>

        <Card
          component={Link}
          to="/galleries"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20%',
            flexDirection: 'column',
            p: 2,
            ':hover': {
              opacity: 0.8,
            },
          }}
        >
          <UilImage size={40} color="#004FFF" />
          <Typography variant="h6">Gallery</Typography>
        </Card>
      </Box>
    </Card>
  );
};

export default HomeHeaderCard;
