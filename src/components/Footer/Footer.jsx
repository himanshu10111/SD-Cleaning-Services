import React from 'react';
import { Box, Stack, styled, Typography, Link, Divider, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();

  const FooterContainer = styled(Box)({
    backgroundColor: 'black', // Changed background color to black
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  });

  const Column = styled(Stack)({
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
  });

  const SmallText = styled(Typography)({
    fontSize: '0.75rem',
    color: 'white', // Changed text color to white
  });

  return (
    <FooterContainer component="footer">
      <Stack direction="row" justifyContent="space-around" alignItems="flex-start" flexWrap="wrap" spacing={2}>
        <Column>
          <Typography variant="h6" gutterBottom style={{ color: 'white' }}>Contact Us:</Typography>
          <Typography variant="body2" style={{ color: 'white' }}>+91 8698651987</Typography>
          <Typography variant="body2" style={{ color: 'white' }}>+91 7378862035</Typography>
          <Typography variant="body2" style={{ color: 'white' }}>sdwtcs1@gmail.com</Typography>
        </Column>

        <Column>
          <Typography variant="h6" gutterBottom style={{ color: 'white' }}>Location:</Typography>
          <Typography variant="body2" style={{ color: 'white' }}>SD Water Cleaning Services</Typography>
          <Typography variant="body2" style={{ color: 'white' }}>Byramji Town, Near Samsung Service Center</Typography>
          <Typography variant="body2" style={{ color: 'white' }}>Nagpur, 440013</Typography>
        </Column>

        <Column>
          <Typography variant="h6" gutterBottom style={{ color: 'white' }}>Follow Us:</Typography>
          <Stack direction="row" spacing={2}>
            <Link href="#" color="inherit">
              <InstagramIcon style={{ color: 'white' }} />
            </Link>
            <Link href="#" color="inherit">
              <FacebookIcon style={{ color: 'white' }} />
            </Link>
          </Stack>
        </Column>
      </Stack>
      <Divider style={{ margin: `${theme.spacing(2)} 0`, backgroundColor: 'white' }} /> {/* Added white color for the divider */}
      <Box textAlign="center" marginTop={theme.spacing(1)}>
        <SmallText>&copy; 2024 SD Water Cleaning Services. Developed by Himanshu Doye</SmallText>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
