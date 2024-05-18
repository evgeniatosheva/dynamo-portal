import {
  AvatarGroup,
  Box,
  Button,
  Card,
  Typography,
  Avatar,
  CircularProgress,
  Divider,
} from '@mui/material';
import { UilPlus } from '@iconscout/react-unicons';
import attendandee1 from '../assets/attendees/attendee1.png';
import attendandee2 from '../assets/attendees/attendee2.png';
import attendandee3 from '../assets/attendees/attendee3.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEvents } from '../config/eventsService';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const events = await getEvents();
      console.log(events);
      setEvents(events);
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <Card sx={{ p: 3, m: 4 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" gap={1} alignItems="center">
          <Typography
            variant="subtitle 2"
            noWrap
            bgcolor="#004FFF"
            color="white"
            borderRadius={2}
            p={0.3}
          >
            Upcoming Events
          </Typography>
          <Card
            sx={{
              width: 'fit-content',
              px: 1,
              textWrap: 'nowrap',
              height: 'fit-content',
              bgcolor: '#004FFF',
              color: 'white',
            }}
          >
            2 new
          </Card>
        </Box>

        <Button
          size="small"
          variant="contained"
          startIcon={<UilPlus />}
          sx={{ textWrap: 'nowrap' }}
          LinkComponent={Link}
          to="/new-event"
        >
          New
        </Button>
      </Box>
      {isLoading ? (
        <Box display="flex" height={300} alignItems="center" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        events.map((event, index) => (
          <Box key={index} my={3} display="flex" flexDirection="column">
            <Typography variant="caption">{new Date(event.createdAt).toDateString()}</Typography>
            <AvatarGroup sx={{ mb: 1, justifyContent: 'flex-end' }}>
              <Avatar alt="Remy Sharp" src={attendandee1} sx={{ width: 27, height: 27 }} />
              <Avatar alt="Travis Howard" src={attendandee2} sx={{ width: 27, height: 27 }} />
              <Avatar alt="Cindy Baker" src={attendandee3} sx={{ width: 27, height: 27 }} />
            </AvatarGroup>

            <Box display="flex" alignItems="flex" justifyContent="space-between">
              <Typography variant="subtitle1">{event.header}</Typography>
              <Card
                sx={{
                  width: 'fit-content',
                  px: 1,
                  textWrap: 'nowrap',
                  height: 'fit-content',
                  bgcolor: '#004FFF',
                  color: 'white',
                }}
              >
                SIGNUP
              </Card>
            </Box>

            <Typography variant="body2">
              {event.content.length > 100 ? `${event.content.slice(0, 100)}...` : event.content}
            </Typography>

            <Typography variant="caption" sx={{ mt: 1 }}>
              @{event.location}
            </Typography>

            <Divider />
          </Box>
        ))
      )}
    </Card>
  );
};

export default UpcomingEvents;
