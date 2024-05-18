import { Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { UilSignout, UilUserCircle, UilBell, UilSearch } from '@iconscout/react-unicons';

const Nav = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" py={2} px={4}>
      <Box>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <Link to="/employees">Employees</Link>
        <Link to="/404">IT Support</Link>
        <Link to="/404">Sales & Marketing</Link>
        <Link to="/404">For Managers</Link>

        <TextField
          InputProps={{
            endAdornment: (
              <Box display="flex" alignItems="center">
                <UilSearch />
              </Box>
            ),
          }}
          placeholder="Search..."
          variant="outlined"
          size="small"
        />
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        {/* Icons for notification, profile and log out */}
        <Link to="/">
          <UilBell />
        </Link>

        <Link to="/">
          <UilUserCircle />
        </Link>

        <Link to="/">
          <UilSignout />
        </Link>
      </Box>
    </Box>
  );
};

export default Nav;
