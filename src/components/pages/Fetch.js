// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { Container } from 'react-bootstrap';
// import axios from 'axios';

// const Fecth = (url, setData) => {
//   useEffect(() => {
//     let mounted = true;

//     const loadData = async () => {
//       const result = await axios.get(url);
//       if (mounted) {
//         setData(result.data);
//       }
//     };
//     loadData();

//     return () => {
//       mounted = false;
//     };
//   }, [url]);

//   const styles = {
//     fontSize: '16px',
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>Reactathon | Fetch</title>
//       </Helmet>
//       <Container>
//         <div style={{ marginBottom: '40px' }} className='App'>
//           <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
//             <strong>React Testing Library: Fetch</strong>
//           </h3>
//           <p>How to test a mock Axios request.</p>
//           <div>
//             <p style={styles}>
//               View the video&nbsp;
//               <a
//                 href='https://www.youtube.com/watch?v=Ngj2f1n9pUw'
//                 rel='noopener noreferrer'
//                 target='_blank'
//               >
//                 here
//               </a>
//               . See the article and code ("Async code... waiting for an
//               element")&nbsp;
//               <a
//                 href='https://www.leighhalliday.com/async-axios-react-testing-library'
//                 rel='noopener noreferrer'
//                 target='_blank'
//               >
//                 here
//               </a>
//               .
//             </p>
//             <p style={styles}>
//               Resources:
//               <ul>
//                 <li>
//                   Testing Library &nbsp;| &nbsp;
//                   <a
//                     href='https://testing-library.com/'
//                     rel='noopener noreferrer'
//                     target='_blank'
//                   >
//                     View
//                   </a>
//                 </li>
//                 <li>
//                   React Testing Library (NPM) &nbsp;| &nbsp;
//                   <a
//                     href='https://www.npmjs.com/package/@testing-library/react'
//                     rel='noopener noreferrer'
//                     target='_blank'
//                   >
//                     View
//                   </a>
//                 </li>
//                 <li>
//                   Jest-Dom &nbsp;| &nbsp;
//                   <a
//                     href='https://github.com/testing-library/jest-dom'
//                     rel='noopener noreferrer'
//                     target='_blank'
//                   >
//                     View
//                   </a>
//                 </li>
//               </ul>
//             </p>
//             <hr />
//             <div>
//               <button onClick={increase}>Up</button>
//               <button onClick={decrease}>Down</button>
//               <span data-testid='count'>{count}</span>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// // export default ReactTestingLibrary;
import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet';
// import { Container } from 'react-bootstrap';
import axios from 'axios';

export default function Fetch({ url }) {
  const [data, setData] = useState(null);

  // Use 'useEffect' to fetch the URL.
  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const response = await axios.get(url);
      if (mounted) {
        setData(response.data);
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, [url]);

  if (!data) {
    return <span data-testid='loading'>Loading data...</span>;
  }

  return <span data-testid='resolved'>{data.greeting}</span>;
}

// Video: https://www.youtube.com/watch?v=Ngj2f1n9pUw
// Article and code: https://www.leighhalliday.com/async-axios-react-testing-library
