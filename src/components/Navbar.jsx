import React from 'react';
import logo from '../assets/logo.png'; // Import the logo image
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    styled,
} from '@mui/material';

// personalizacao
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    padding: '0', // remove padding
});

const Logo = styled('img')({
    height: '80px', // Increase the size of the logo
    marginRight: '10px',
});

const CenteredText = styled(Typography)({
    color: '#fff',
});

const Navbar = () => {
    return (
        <AppBar
            component="nav"
            position="sticky"
            sx={{
                backgroundColor: 'black',
                margin: '0', // remove margin
            }}
            elevation={0}
        >
            <StyledToolbar>
                {/* Use Box component for flexibility */}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Replace the Typography with an image */}
                    <Logo src={logo} alt="Logo" />
                    <CenteredText variant="h6" component="h1">
                    SDWaterCleaningServices
                    </CenteredText>
                </Box>
                {/* You can add your drawer or other navigation items here */}
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
