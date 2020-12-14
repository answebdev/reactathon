import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardX = ({ property }) => {
  const {
    index,
    picture,
    city,
    address,
    bedrooms,
    bathrooms,
    carSpaces,
  } = property;
  return (
    <Row>
      <Col md={12}>
        <div id={`card-${index}`} className='card-x'>
          <Card id={`card-${index}`}>
            <Card.Img src={picture} alt={city} variant='top' />

            <Card.Body style={{ width: '105%' }}>
              <div className='details'>
                <span className='index'>{index + 1}</span>
                <Card.Title>
                  <p className='location'>
                    <span style={{ fontWeight: '700' }}> {city}</span>
                    <br />
                    {address}
                  </p>
                </Card.Title>
                <Card.Text>
                  <ul className='features'>
                    <li className='icon-bed'>
                      &nbsp; {bedrooms} <span>bedrooms</span>
                    </li>
                    <li className='icon-bath'>
                      &nbsp; {bathrooms} <span>bathrooms</span>
                    </li>
                    <li className='icon-car'>
                      &nbsp; {carSpaces} <span>parking spots</span>
                    </li>
                  </ul>
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

Card.propTypes = {
  property: PropTypes.object.isRequired,
};

export default CardX;
