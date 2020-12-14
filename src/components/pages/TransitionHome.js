import React from 'react';
import CardX from './CardX';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Home = ({ property }) => {
  return (
    <div className='page'>
      <TransitionGroup className='card-x-container'>
        <CSSTransition
          key={property._id}
          classNames='fade'
          timeout={600}
          //   classNames='slide'
          //   timeout={450}
        >
          <CardX property={property} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Home;
