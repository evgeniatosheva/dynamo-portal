import { useState } from 'react';
import Nav from '../components/Nav';
import { TextField, Box, Typography, Button } from '@mui/material';
import { UilMessage } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { addEvent } from '../config/eventsService';

const CreateNewEvent = () => {
  const navigate = useNavigate();

  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleCreateEvent = async () => {
    setIsLoading(true);
    try {
      navigate('/');
      await addEvent({
        header,
        content,
        location,
        createdAt: new Date().getTime(),
      });
    } catch (e) {
      console.log(e);
    }

    setIsLoading(false);
  };

  return (
    <Box m={4}>
      <Nav />

      <Box width="75%" mt={4}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography>Create a new event</Typography>
          <LoadingButton
            loading={isLoading}
            startIcon={<UilMessage />}
            variant="contained"
            onClick={handleCreateEvent}
          >
            Create event
          </LoadingButton>
        </Box>

        <TextField
          label="Header"
          value={header}
          onChange={handleHeaderChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Content"
          value={content}
          onChange={handleContentChange}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />

        <TextField
          label="Location"
          value={location}
          onChange={handleLocationChange}
          fullWidth
          margin="normal"
        />

        <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate('/')}>
          Go back
        </Button>
      </Box>
    </Box>
  );
};

export default CreateNewEvent;
