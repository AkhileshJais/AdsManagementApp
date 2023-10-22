import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import userData from '../userdata/UserData'
import Population from '../userdata/Population';
import { Container } from 'react-bootstrap';
import { DataGrid } from '@mui/x-data-grid';
import { PieChart } from "@mui/x-charts/PieChart";
import { useDrawingArea } from "@mui/x-charts/hooks";
import { styled } from "@mui/material/styles";
import { useState } from 'react';

const data = [
  { value: 40, label: "40% Male" },
  { value: 35, label: "35% Female" },
  { value: 25, label: "25% Unknow" }
];

const buttonStyle = {
  position: 'absolute',
  bottom: '10px', 
  right: '10px', 
};

const size = {
  width: 500,
  height: 200
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

const columns = [
  { field: 'Campaigns', headerName: 'Campaigns', flex: 1 },
  { field: 'Click', headerName: 'Click', flex: 1 },
  { field: 'Cost', headerName: 'Cost', flex: 1 },
  { field: 'Conversions', headerName: 'Conversions', flex: 1 },
  { field: 'Revenue', headerName: 'Revenue', flex: 1 },
];

const columns1 = [
  { field: 'Group', headerName: 'Campaigns', flex: 1 },
  { field: 'Click', headerName: 'Click', flex: 1 },
  { field: 'Cost', headerName: 'Cost', flex: 1 },
  { field: 'Conversions', headerName: 'Conversions', flex: 1 },
  { field: 'Revenue', headerName: 'Revenue', flex: 1 },
];

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}


const Dashboard = () => {
 console.log(userData)

 const [showPieChart, setShowPieChart] = useState(true);

  const toggleChart = () => {
    setShowPieChart(!showPieChart);
  };

  return (

    <Container>
    <Row xs={1} md={2} className="g-4">
  <Col>
    <Card style={{ height: '70%', marginTop: '20px' }} >
      <Card.Body style={{ height: '70%' }}>
        <div style={{ height: '100%', width: '100%' }}>
          <DataGrid rows={userData} columns={columns} />
        </div>
          </Card.Body>
        </Card>
      </Col>
  
      <Col>
      <Card style={{ height: '70%', marginTop: '20px' }}>
      <Card.Body style={{ height: '70%' }}>
            <Card.Title>Ad Insights</Card.Title>
            {showPieChart ? (  <PieChart
            series={[
              {
                paddingAngle: 5,
                innerRadius: 100,
                outerRadius: 65,
                data,
              },
            ]}{...size}
          > 
          </PieChart>
          ) : (
            <div style={{ height: '70%', marginTop: '20px' }}>
              <DataGrid rows={Population} columns={columns1} />
            </div>
          )}
          </Card.Body>
          <button variant="contained" color="primary"  onClick={toggleChart} style={buttonStyle} size="sm" >Toggle Chart</button>
        </Card> 
      </Col>
    </Row>
  </Container>
  )
}

export default Dashboard
