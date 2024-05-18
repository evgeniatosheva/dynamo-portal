import { useState } from 'react';
import Nav from '../components/Nav';
import { Switch, TextField, Box, Typography, FormLabel } from '@mui/material';
import { UilMessage } from '@iconscout/react-unicons';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../config/postsSevice';
import { LoadingButton } from '@mui/lab';

const CreateNewPost = () => {
  const navigate = useNavigate();

  const [header, setHeader] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const [location, setLocation] = useState('');
  const [person, setPerson] = useState('');
  const [restrictComments, setRestrictComments] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePersonChange = (e) => {
    setPerson(e.target.value);
  };

  const handleRestrictCommentsChange = (e) => {
    setRestrictComments(e.target.checked);
  };

  const handleCreatePost = async () => {
    setIsLoading(true);
    try {
      await addPost({
        header,
        content,
        tag,
        location,
        person,
        restrictComments,
        createdAt: new Date(),
      });
      navigate('/');
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
          <Typography>Create a Post</Typography>
          <LoadingButton
            loading={isLoading}
            startIcon={<UilMessage />}
            variant="contained"
            onClick={handleCreatePost}
          >
            Create Post
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

        <TextField label="Tag" value={tag} onChange={handleTagChange} fullWidth margin="normal" />

        <TextField
          label="Location"
          value={location}
          onChange={handleLocationChange}
          fullWidth
          margin="normal"
        />

        <TextField
          label="Person"
          value={person}
          onChange={handlePersonChange}
          fullWidth
          margin="normal"
        />

        <FormLabel>Restrict Comments</FormLabel>
        <Switch
          checked={restrictComments}
          onChange={handleRestrictCommentsChange}
          color="primary"
        />

        <LoadingButton
          loading={isLoading}
          variant="outlined"
          sx={{ mt: 2, display: 'block' }}
          onClick={() => navigate('/')}
        >
          Go back
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default CreateNewPost;
