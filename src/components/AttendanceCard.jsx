import { Card, Typography, Box, Avatar, AvatarGroup } from '@mui/material';
import { UilPlusCircle, UilEllipsisV } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const AttendanceCard = ({ attendance }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        width: '30%',
        bgcolor: attendance.color,
        p: 3,
        boxSizing: 'border-box',
        color: 'white',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6">{attendance.title}</Typography>

        <Box>
          <Link to="/add-attendance">
            <UilPlusCircle />
          </Link>
          <Link to="/">
            <UilEllipsisV />
          </Link>
        </Box>
      </Box>

      <Box>
        <AvatarGroup max={4} sx={{ justifyContent: 'flex-end' }}>
          {attendance.attendees.map((attendee) => (
            <Avatar
              sx={{ width: 27, height: 27 }}
              key={attendee.id}
              src={attendee.avatar}
              alt={attendee.name}
            />
          ))}
        </AvatarGroup>
      </Box>
    </Card>
  );
};

export default AttendanceCard;
