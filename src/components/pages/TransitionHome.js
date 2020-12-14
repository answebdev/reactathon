import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from './Card';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Home = ({ property }) => {
  return (
    <div className='page'>
      {/* <Row>
        <Col md={6}> */}
      <TransitionGroup className='card-x-container'>
        <CSSTransition
          key={property._id}
          classNames='fade'
          timeout={600}
          //   classNames='slide'
          //   timeout={450}
        >
          <Card property={property} />
        </CSSTransition>
      </TransitionGroup>
      {/* </Col>
      </Row> */}
    </div>
  );
};

export default Home;
