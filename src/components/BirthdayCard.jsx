import { Card, Typography } from '@mui/material';
import birthdayImage from '../assets/birthday.png';

const BirthdayCard = ({ name, picture }) => {
  return (
    <Card
      sx={{
        background: `url(${birthdayImage}) no-repeat center center`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        p: 4,
        m: 4,
      }}
    >
      <img src={picture} alt="Birthday" width="116px" />
      <Typography variant="h5" align="center">
        It’s <br /> {name}’s birthday <br /> Today!
      </Typography>
    </Card>
  );
};

export default BirthdayCard;
