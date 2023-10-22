import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '@mui/material';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom';
import CreateAds from '../CreateAds';
import swal from 'sweetalert2';
window.swal = swal;

function DashboardPage() {
  const navigate = useNavigate();
  
  const handleBack = () => {
     navigate('/CreateAds');
  }

  const buttonStyle = {
    position: 'absolute',
    bottom: '10px', 
    right: '10px', 
  };
  const buttonStyle1 = {
    position: 'absolute',
    bottom: '10px', 
    right: '100px', 
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    swal.fire({
      title: 'Submitted',
      showConfirmButton: false,
    });

    setTimeout(() => {
      navigate('/CreateAds');
    }, 2000); 
  };


  return (
    <Container>
    <Card border="secondary" style={{ width: '81rem', height: '35rem', marginTop: '20px' }}>
      <Card.Body>
        <h6>Create Text Media</h6>

        <Row>
          <Col>
            <Form.Group controlId="heading01">
              <Form.Label>Heading 01</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Add a heading that would make users interested"
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="description01">
              <Form.Label>Description 01</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Add primary text to help users understand more about your product, service, or offers"
                rows={3}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row xs={1} md={2}>
          <Col>
            <Form.Group controlId="heading02">
              <Form.Label>Heading 02</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Add a heading that would make users interested"
              />
            </Form.Group>
          </Col>
        </Row>

        <Container>
          <Row>
            <Col>
              <Form.Group controlId="landscapeImage">
                <Form.Label>Landscape Marketing Image (1.9:1)</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Add your business name"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="portraitImage">
                <Form.Label>Portrait Marketing Image (4.5:1)</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Select a label that best suits your ad"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="squareImage">
                <Form.Label>Square Marketing Image (1:1)</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  placeholder="Select a label that best suits your ad"
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <Row xs={1} md={2}>
          <Col>
            <Form.Group controlId="businessName">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Add your business name"
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="buttonLabel">
              <Form.Label>Button Label</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Select a label that best suits your ad"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="websiteURL">
          <Form.Label>Website URL</Form.Label>
          <Form.Control
            type="text"
            size="sm"
            placeholder="Add the URL of the landing page you want to redirect users to"
          />
        </Form.Group>
        <Row style={{ marginTop: '60px' }}>
  <Col md={{ span: 12, offset: 10 }}>
    <Button 
    size="sm"
    variant="outlined" 
    onClick={handleBack} 
    style={buttonStyle1} >
      Back
    </Button>

    <Button variant="contained" color="primary" onClick={handleSubmit} size="sm" style={buttonStyle} >
      Submit   
    </Button>
  </Col>
</Row>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default DashboardPage;
