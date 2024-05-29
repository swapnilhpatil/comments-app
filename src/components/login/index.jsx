// import React, { useState } from 'react';
// import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';
// import { styled } from '@mui/system';

// const useStyles = styled((theme) => ({
//     container: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       height: '100vh',
//     },
//     form: {
//       width: '100%', // Fix IE 11 issue.
//       marginTop: theme.spacing(3),
//     },
//     submit: {
//       margin: theme.spacing(3, 0, 2),
//     },
//   }));

// const Login = () => {
//     const classes = useStyles();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       // Add login logic here
//       if (email === '' || password === '') {
//         setError('Please fill in all fields');
//         return;
//       }
//       // Dummy login validation
//       if (email === 'test@example.com' && password === 'password') {
//         alert('Login successful');
//       } else {
//         setError('Invalid email or password');
//       }
//     };
  
//     return (
//       <Container component="main" maxWidth="xs">
//         <Box className={classes.container}>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           {error && <Alert severity="error">{error}</Alert>}
//           <form className={classes.form} noValidate onSubmit={handleSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//           </form>
//         </Box>
//       </Container>
//     );
// };

// export default Login;

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Alert, FormControlLabel, Checkbox, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
//   backgroundColor: '#F8F8F8',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Valiation for empty inputs
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }
    // Added temporary usename and password
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
         <Box mb={4}>
        <Typography component="h1" variant="h4">
          User Comments App
        </Typography>
      </Box>
      <StyledBox>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <StyledForm noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={rememberMe}
                color="primary"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Remember me"
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </StyledButton>
          <Box mt={2}>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Box>
        </StyledForm>
      </StyledBox>
    </StyledContainer>
  );
};

export default Login;
