import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const ReactStripeElements = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | React Stripe Elements</title>
      </Helmet>
      <Container>
        <div className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>React Stripe Elements</strong>
          </h3>
          <div>
            <p style={styles}>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=WTUYem2IxLA'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              . See the code&nbsp;
              <a
                href='https://github.com/leighhalliday/react-stripe-elements-demo'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              .
            </p>
            <p style={styles}>
              Resources:
              <ul>
                <li>
                  Secrets and Environment Variables in Next.js and Now &nbsp;|
                  &nbsp;
                  <a
                    href='https://www.leighhalliday.com/secrets-env-vars-nextjs-now'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  Test Stripe Cards &nbsp;| &nbsp;
                  <a
                    href='https://stripe.com/docs/testing#cards-responses'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  Stripe PaymentIntent Docs &nbsp;| &nbsp;
                  <a
                    href='https://stripe.com/docs/api/payment_intents/create'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  React Stripe JS &nbsp;| &nbsp;
                  <a
                    href='https://github.com/stripe/react-stripe-js'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
              </ul>
            </p>
            <hr />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReactStripeElements;
