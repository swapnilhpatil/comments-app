import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const useStyles = styled((theme) => ({
  card: {
    maxWidth: 300,
    margin: 'auto',
    marginTop: theme.spacing(4),
    boxShadow: 'none',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ProfileCard = ({ username, email, role }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            A
          </Avatar>
        }
        title={username}
        subheader={role}
        action={
          <IconButton aria-label="edit profile">
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Email: {email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
