import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Container, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import CreateAdsPage from './pages/CreateAdsPage';
import DashboardPage from './pages/DashboardPage';
import { useNavigate } from 'react-router-dom';

const CardContainer = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px', 
  marginTop:"100px"
};

const CenteredCardContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '20px', 
  marginRight: '20px', 
  marginTop: '20px', 
};
const cardStyle = {
  maxWidth: 300,
  marginRight: '20px', 
  borderRadius: '12px'
};

const spanWithMargin = {
  marginRight: '10px', 
};
const buttonStyle = {
  position: 'absolute',
  bottom: '10px', 
  right: '10px', 
};

const CreateAds = () => {

  const navigate = useNavigate();

  const [isCheckedCreate, setIsCheckedCreate] = useState(false);
  const [isCheckedDashboard, setIsCheckedDashboard] = useState(false);

  const handleCheckboxDashboardPage = (e) => {
    console.log("Create checked");
    setIsCheckedCreate(true);
    setIsCheckedDashboard(false); // Uncheck the second checkbox
  };
  
  const handleCheckboxCreatePage = (e) => {
    console.log("Dashboard checked");
    setIsCheckedDashboard(true);
    setIsCheckedCreate(false); // Uncheck the first checkbox
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    console.log("Click", event);
  
    if (isCheckedCreate === true) {
      console.log("Create Ads Page");
      navigate('/createadspage');
    } else if (isCheckedDashboard === true) {
      console.log("Dashboard Ads Page");
      navigate('/dashboardpage');
    }
  };

  return (
    <Container style={{ position: 'relative' }} >
    <Card border="secondary" style={{ width: '75rem', height: '35rem',marginTop: '20px' }}>
    <div style={CenteredCardContainer}>
        <div style={CardContainer}>
         <Card sx={cardStyle}> 
            {/* Card 1 content */}
            <CardHeader
              action={<Checkbox checked={isCheckedCreate} onChange={handleCheckboxDashboardPage} />}
            />
            <CardMedia
              component="img"
              height="200"
              image="/Ads_one.png"
              alt="Ads_second"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along with
                the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <span style={spanWithMargin}> Create </span>
            <span>
              <b>Text Ads</b>
            </span>
            </CardActions>
          </Card>

          <Card sx={cardStyle}> 
            {/* Card 2 content */}
            <CardHeader
              action={<Checkbox checked={isCheckedDashboard} onChange={handleCheckboxCreatePage} />}
            />
            <CardMedia
              component="img"
              height="194"
              image="/Ads_second.png"
              alt="Ads_one"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along with
                the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <span style={spanWithMargin}> Create </span>
        <span>
          <b>Media Ads</b>
        </span>
            </CardActions>
          </Card>
        </div>
      </div>
      <Button 
      onClick={handleSubmit}  size="sm"
      type="submit" 
      variant="contained"
      color="primary"
      style={buttonStyle}
      >NEXT</Button>
      </Card>
    </Container>
  );
};

export default CreateAds