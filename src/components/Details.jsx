import React from 'react'
import {  
    Box,
    Button,
    Stack,
    TextField,
    Typography,
    useTheme,
    useMediaQuery
} from '@mui/material'
import Title from './Title'
import Paragraph from './Paragraph'

const Details = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            phone: data.get('phone'),
        });
    }

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack 
            direction={{ xs: 'column', md: 'row' }} // Stack direction changes based on screen size
            justifyContent="center"
            alignItems="center"
            spacing={4} // adds space between form and contact info
            sx={{
                py: 10,
                px: 2,
                flexDirection: isMobile ? 'column' : 'row',
            }}
        >
            {/* Form Section */}
            <Box 
                component="form" 
                noValidate 
                onSubmit={handleSubmit} 
                sx={{ 
                    width: isMobile ? '100%' : '50%', // Full width on mobile, half otherwise
                }}>
                <Title 
                    text={'Interested in Clean Water Solutions?'} 
                    textAlign={'center'}
                />
                <Paragraph 
                    text={
                        ` Worried about your water quality? We can help! Get a sparkling clean water tank for your home or business and enjoy fresh, healthy water.  Book Now and get 10% off your first cleaning!`
                    }
                    maxWidth = {'sm'}
                    mx={0}
                    textAlign={'center'}
                />
                {/* ... Other form fields ... */}
                <Button 
                    variant="contained" 
                    fullWidth
                    type="submit"
                    size="medium"
                    sx= {{ 
                        fontSize: '0.9rem',
                        textTransform: 'capitalize', 
                        py: 2,
                        mt: 3, 
                        mb: 2,
                        borderRadius: 0,
                        backgroundColor: '#14192d',
                        "&:hover": {
                            backgroundColor: '#1e2a5a',
                        }
                    }}
                >
                    Send
                </Button>
            </Box>

            <Box 
            component="form" 
            noValidate 
            onSubmit={handleSubmit} 
            sx={{ 
                mt: 1,
                py: 2
            }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Phone Number"
                    type="phone"
                    id="phone"
                    autoComplete="current-phone"
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="Address"
                    label="Enter Address"
                    type="String"
                    id="phone"
                    autoComplete="current-phone"
                />
                <Button 
                variant="contained" 
                fullWidth
                type="submit"
                size="medium"
                sx= {{ 
                    fontSize: '0.9rem',
                    textTransform: 'capitalize', 
                    py: 2,
                    mt: 3, 
                    mb: 2,
                    borderRadius: 0,
                    backgroundColor: '#14192d',
                    "&:hover": {
                        backgroundColor: '#1e2a5a',
                    }
                }}
                >
                    send
                </Button>
            </Box>
            <Stack 
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: isMobile ? '100%' : '50%', // Full width on mobile, half otherwise
                    px: 2, 
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" component="p" gutterBottom>
                    Contact Us
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    +91 8698651987
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    SDWaterCleaning@Service.Com
                </Typography>
            </Stack>
        </Stack>
    )
}

export default Details;
