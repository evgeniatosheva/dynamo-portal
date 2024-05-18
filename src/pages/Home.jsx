import { Box, Button, Card, CircularProgress, Typography } from '@mui/material';
import HomeHeaderCard from '../components/HomeHeaderCard';
import Nav from '../components/Nav';
import attendandee1 from '../assets/attendees/attendee1.png';
import attendandee2 from '../assets/attendees/attendee2.png';
import attendandee3 from '../assets/attendees/attendee3.png';
import attendandee4 from '../assets/attendees/attendee4.png';
import AttendanceCard from '../components/AttendanceCard';
import articleAuthor from '../assets/article-author.png';
import ArticleListing from '../components/ArticleListing';
import { UilFilter, UilPlus } from '@iconscout/react-unicons';
import HomePageCalendar from '../components/HomePageCalendar';
import BirthdayCard from '../components/BirthdayCard';
import birthdayImage from '../assets/birthday-image.png';
import UpcomingEvents from '../components/UpcomingEvents';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../config/postsSevice';

const attendances = [
  {
    title: 'Working from home',
    color: '#43D1A4',
    attendees: [
      { id: 1, name: 'John Doe', avatar: attendandee1 },
      { id: 2, name: 'Jane Doe', avatar: attendandee2 },
      { id: 3, name: 'John Smith', avatar: attendandee3 },
      { id: 4, name: 'Jane Smith', avatar: attendandee4 },
    ],
  },
  {
    title: 'Sick',
    color: '#FF7D5E',
    attendees: [
      { id: 1, name: 'John Doe', avatar: attendandee1 },
      { id: 2, name: 'Jane Doe', avatar: attendandee2 },
      { id: 3, name: 'John Smith', avatar: attendandee3 },
      { id: 4, name: 'Jane Smith', avatar: attendandee4 },
    ],
  },
  {
    title: 'Holiday',
    color: '#FFC04A',
    attendees: [
      { id: 1, name: 'John Doe', avatar: attendandee1 },
      { id: 2, name: 'Jane Doe', avatar: attendandee2 },
      { id: 3, name: 'John Smith', avatar: attendandee3 },
      { id: 4, name: 'Jane Smith', avatar: attendandee4 },
    ],
  },
  {
    title: 'Out of the office',
    color: '#8C8C8C',
    attendees: [
      { id: 1, name: 'John Doe', avatar: attendandee1 },
      { id: 2, name: 'Jane Doe', avatar: attendandee2 },
      { id: 3, name: 'John Smith', avatar: attendandee3 },
      { id: 4, name: 'Jane Smith', avatar: attendandee4 },
    ],
  },
  {
    title: 'Child sick',
    color: '#6B88C7',
    attendees: [
      { id: 1, name: 'John Doe', avatar: attendandee1 },
      { id: 2, name: 'Jane Doe', avatar: attendandee2 },
      { id: 3, name: 'John Smith', avatar: attendandee3 },
      { id: 4, name: 'Jane Smith', avatar: attendandee4 },
    ],
  },
  {
    title: 'Other',
    color: '#53A2FF',
    attendees: [
      { id: 1, name: 'John Doe', avatar: attendandee1 },
      { id: 2, name: 'Jane Doe', avatar: attendandee2 },
      { id: 3, name: 'John Smith', avatar: attendandee3 },
      { id: 4, name: 'Jane Smith', avatar: attendandee4 },
    ],
  },
];

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const response = await getPosts();
      console.log(response);
      setPosts(response);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Nav />
      <Box display="flex" gap={4}>
        <Box width="70%">
          <HomeHeaderCard />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={4}
            gap={4}
            flexWrap="wrap"
            width="100%"
            boxSizing="border-box"
          >
            {attendances.map((attendance) => (
              <AttendanceCard key={attendance.title} attendance={attendance} />
            ))}
          </Box>

          <Box display="flex" alignItems="center" justifyContent="space-between" px={4} my={2}>
            <Typography variant="h5">Company News</Typography>
            <Box display="flex" gap={2}>
              <Button variant="outlined" startIcon={<UilFilter />}>
                Filter
              </Button>
              <Button
                LinkComponent={Link}
                variant="contained"
                startIcon={<UilPlus />}
                to="/new-post"
              >
                Create New Post
              </Button>
            </Box>
          </Box>
          {isLoading ? (
            <Box display="flex" height={300} alignItems="center" justifyContent="center">
              <CircularProgress />
            </Box>
          ) : (
            <Box display="flex" flexDirection="column" gap={2} p={4}>
              {posts.map((article) => (
                <ArticleListing
                  key={article.id}
                  article={{
                    ...article,
                    author: { name: 'Admin Author', image: articleAuthor },
                    date: article.createdAt.toDate().toDateString(),
                  }}
                />
              ))}
            </Box>
          )}
        </Box>

        <Card sx={{ width: '30%', mt: 4 }}>
          <HomePageCalendar />

          <BirthdayCard name="Evgenia" picture={birthdayImage} />

          <UpcomingEvents />
        </Card>
      </Box>
    </>
  );
};

export default Home;
