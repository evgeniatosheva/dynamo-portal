import { Box, Button, Card, TextField, Typography } from '@mui/material';
import Nav from '../components/Nav';
import { UilFilter, UilSearch } from '@iconscout/react-unicons';
import employee1 from '../assets/employees/employee1.png';
import employee2 from '../assets/employees/employee2.png';
import employee3 from '../assets/employees/employee3.png';
import employee4 from '../assets/employees/employee4.png';
import employee5 from '../assets/employees/employee5.png';

const employees = [
  {
    id: 1,
    name: 'Anna Jansen',
    email: 'anna@jensen.com',
    phoneNumber: '+45 12 34 56 78',
    title: 'Software Engineer',
    picture: employee1,
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john@doe.com',
    phoneNumber: '+45 12 34 56 52',
    title: 'Accountant',
    picture: employee2,
  },
  {
    id: 3,
    name: 'Evgenia Kovalenko',
    email: 'test@john.com',
    phoneNumber: '+45 12 34 56 52',
    title: 'Frontend Developer',
    picture: employee3,
  },
  {
    id: 4,
    name: 'Kiara Smith',
    email: 'john@doe.com',
    phoneNumber: '+45 12 23 56 52',
    title: 'Team Lead',
    picture: employee4,
  },
  {
    id: 5,
    name: 'Sara Johnson',
    email: 'sara@johnson.com',
    phoneNumber: '+45 12 12 56 52',
    title: 'Game Developer',
    picture: employee5,
  },
];

const EmployeesList = () => {
  return (
    <>
      <Nav />

      <Box display="flex" gap={2} m={4}>
        <Button variant="outlined" startIcon={<UilFilter />}>
          Filter
        </Button>

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

      <Box display="flex" alignItems="center" flexWrap="wrap" gap={4} m={4}>
        {employees.map((employee) => (
          <Card
            key={employee.id}
            sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '30%', p: 3 }}
          >
            <img src={employee.picture} alt={employee.id} />
            <Box flex={1}>
              <Typography sx={{ mb: 2 }} variant="h6">
                {employee.name}
              </Typography>

              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="body2">Email:</Typography>
                <Typography variant="body2">{employee.email}</Typography>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="body2">Phone Number:</Typography>
                <Typography variant="body2">{employee.phoneNumber}</Typography>
              </Box>

              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Typography variant="body2">Title:</Typography>
                <Typography variant="body2">{employee.title}</Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default EmployeesList;
