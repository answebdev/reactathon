import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { Bar, defaults } from 'react-chartjs-2';
import classes from '../styles/Chart.module.css';

// To disable to tooltip when you hover over the chart (from NPM docs).
// Not we need to also import 'defaults' when doing this:
// defaults.global.tooltips.enabled = false;

// Place legend at the bottom of the chart (the default position is 'top'):
defaults.global.legend.position = 'bottom';

const Chart = () => {
  const styles = {
    fontSize: '16px',
  };

  return (
    <div>
      <Helmet>
        <title>Reactathon | Chart</title>
      </Helmet>
      <Container>
        <div style={{ marginBottom: '40px' }} className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Chart</strong>
          </h3>
          <div>
            <p style={styles}>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=c_9c5zkfQ3Y'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              . See the code&nbsp;
              <a
                href='https://github.com/AlexzanderFlores/ChartJS-in-React'
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
                  Chart.js &nbsp;| &nbsp;
                  <a
                    href='https://www.chartjs.org/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  Chart.js (Usage) &nbsp;| &nbsp;
                  <a
                    href='https://www.chartjs.org/docs/latest/getting-started/usage.html'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  react-chartjs-2 (NPM) &nbsp;| &nbsp;
                  <a
                    href='https://www.npmjs.com/package/react-chartjs-2'
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

          <h3 className={classes.MainTitle}>Bar Chart</h3>
          <div className={classes.MainDiv}>
            <Bar
              data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                  {
                    label: '# of votes',
                    data: [12, 19, 3, 5, 2, 3],
                    // Pass in an array to specify color for each bar.
                    // Passing in a string with a color (can also use hex code or RGB),
                    // this will make ALL the bars this one color:
                    // backgroundColor: 'red',
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                    ],
                    // borderColor is optional:
                    // borderColor: '#000000',
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1,
                  },
                  {
                    label: 'Quantity',
                    data: [17, 22, 7, 18, 9, 15],
                    backgroundColor: 'salmon',
                    borderColor: 'red',
                    borderWidth: 1,
                  },
                ],
              }}
              height={400}
              width={600}
              options={{
                // In order for Chart.js to obey the custom size you need to set maintainAspectRatio to false.
                // This will remove the scroll bar to fit everything onto the screen without scrolling.
                // from react-chartjs-2 (NPM):
                maintainAspectRatio: false,
                scales: {
                  // Chart begins at 0 on Y axis:
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
                legend: {
                  labels: {
                    fontSize: 22,
                  },
                },
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Chart;
