import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, Snackbar, Container, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import img from '../our services.png';

const Header = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [slotsAvailable, setSlotsAvailable] = useState(null);
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();
    const today = new Date().toISOString().split('T')[0];

    useEffect(() => {
        if (selectedDate) {
            if (selectedDate >= today) {
                fetchAvailableSlots(selectedDate);
            } else {
                setShowError(true);
                setSelectedDate('');
                setTimeout(() => setShowError(false), 3000);
            }
        }
    }, [selectedDate, today]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const fetchAvailableSlots = (date) => {
        fetch(`http://localhost:8000/api/available-slots/${date}`)
            .then(response => response.ok ? response.json() : Promise.reject('Network response was not ok'))
            .then(data => setSlotsAvailable(data.slotsAvailable))
            .catch(error => {
                console.error('Error fetching available slots:', error);
                setSlotsAvailable(null);
            });
    };

    const buttonStyle = {
        backgroundColor: slotsAvailable > 0 ? '#4CAF50' : (slotsAvailable === null ? 'black' : '#f44336'),
        color: slotsAvailable === null ? 'white' : 'black',
        fontWeight: 'bold',
        padding: '10px 15px',
        width: '100%', 
        marginTop: '10px' 
    };

    const services = [
        { value: 'dewatering', label: 'Dewatering services', description: '' },
        { value: 'antibacterial', label: 'Antibacterial Liquid Spray services', description: '' },
        { value: 'scrubbing', label: 'Mechanized Scrubbing services', description: '' },
        { value: 'washing', label: 'High Pressure Gun Washing services', description: '' },
        { value: 'vacuum', label: 'Wet And Dry Vacuum Cleaning services', description: '' },
        { value: 'uvlight', label: 'UV Light Process services', description: '' },
    ];

    return (
        <Box sx={{ bgcolor: '#e0f7fa' }}>
            <Container sx={{ maxWidth: 'lg', bgcolor: '#e0f7fa', py: 4 }}>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#106cc8', marginBottom: '1rem' }}>
                    Hello Gondiya!
                </Typography>
                <Typography variant="subtitle1" sx={{ color: '#555', marginBottom: '2rem' }}>
                    Looking for dependable water tank cleaning? Trust us to ensure your water safety and hygiene.
                </Typography>
                <AppBar position="static" color="default" sx={{ borderRadius: '10px', background: '#e0f7fa' }}>
                    <Toolbar sx={{ justifyContent: 'space-between', padding: '0 1.5rem' }}>
                        <Typography variant="h6" sx={{ whiteSpace: 'nowrap' }}>
                            Book Your Cleaning Slot
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TextField
                    label="Select Date"
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    sx={{ width: '100%', marginTop: '1rem' }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ min: today }}
                />
                <Button
                    variant="contained"
                    style={buttonStyle}
                    disabled={slotsAvailable === null || slotsAvailable <= 0}
                    onClick={() => navigate(`/book?date=${selectedDate}`)}
                >
                    {slotsAvailable === null
                        ? 'Checking Availability...'
                        : slotsAvailable > 0
                        ? `${slotsAvailable} Slots Available`
                        : 'No Slots Available'}
                </Button>
                <Snackbar
                    open={showError}
                    message="Please select a current or future date."
                    autoHideDuration={3000}
                    onClose={() => setShowError(false)}
                />
                <Grid container spacing={3} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Our Services</Typography>
                        {services.map((service, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Box sx={{ width: '8px', height: '8px', borderRadius: '50%', bgcolor: 'black', marginRight: '10px', marginTop: '6px' }}></Box>
                                <Typography variant="subtitle1" sx={{ minWidth: '150px', flexGrow: 1 }}>{service.label}</Typography>
                                <Typography variant="body1">{service.description}</Typography>
                            </Box>
                        ))}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box
                            component="img"
                            sx={{
                                height: 'auto',
                                width: '100%',
                                maxWidth: '400px',
                                borderRadius: '10px',
                                alignSelf: 'flex-start'
                            }}
                            alt="Service Illustration"
                            src={img}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Header;
