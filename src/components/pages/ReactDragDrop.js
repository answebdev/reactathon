import React from 'react';
import { Helmet } from 'react-helmet';
import parse from 'papaparse';
import { Container, Button } from 'react-bootstrap';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import '../styles/DragDrop.css';

const ReactDragDrop = () => {
  // Change color of area as you hover over it (indicates you can drop file here).
  const [highlighted, setHighlighted] = React.useState(false);

  // Create state to be able to access the contents (using JavaScript's 'file').
  const [contacts, setContacts] = React.useState([
    { email: 'fake@gmail.com', name: 'Fake' },
  ]);
  // const [contacts, setContacts] = React.useState([]);

  const [open, setOpen] = React.useState(false);

  const closeIcon = (
    <svg fill='currentColor' viewBox='0 0 20 20' width={28} height={28}>
      <path
        fillRule='evenodd'
        d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
        clipRule='evenodd'
      ></path>
    </svg>
  );

  const styles = {
    fontSize: '16px',
  };

  return (
    <div>
      <Container>
        <Helmet>
          <title>Reactathon | React Drag n' Drop</title>
        </Helmet>
        <div className='App'>
          <h3 style={{ marginTop: '40px', marginBottom: '20px' }}>
            <strong>Drag n' Drop Files in React</strong>
          </h3>
          <div>
            <p style={styles}>
              View the video&nbsp;
              <a
                href='https://www.youtube.com/watch?v=SmIRn6uVVVI&t=40s'
                rel='noopener noreferrer'
                target='_blank'
              >
                here
              </a>
              . See the code&nbsp;
              <a
                href='https://github.com/leighhalliday/react-drag-drop-csv-file'
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
                  React Dropzone &nbsp;| &nbsp;
                  <a
                    href='https://react-dropzone.js.org/'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  JavaScript File &nbsp;| &nbsp;
                  <a
                    href='https://developer.mozilla.org/en-US/docs/Web/API/File'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
                <li>
                  Papa Parse &nbsp;| &nbsp;
                  <a
                    href='https://www.npmjs.com/package/papaparse'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    View
                  </a>
                </li>
              </ul>
            </p>
            <hr />
            <Button variant='dark' onClick={() => setOpen(true)}>
              Modal
            </Button>

            <Modal
              open={open}
              onClose={() => setOpen(false)}
              center
              closeIcon={closeIcon}
            >
              <p>
                This is the React-Responsive-Modal in action. To use it, install
                it:
                <br />
                <strong>npm i react-responsive-modal.</strong>
                <br />
                <br />
                Then, at the top of the file you want to use it in, import it
                along with the CSS:
                <br />
                <strong>import 'react-responsive-modal/styles.css'</strong>
                <br />
                <strong>import {Modal} from 'react-responsive-modal' </strong>
                <br />
                <br />
                That's it. Then just add the code for the modal. View the{' '}
                <a
                  href='https://react-responsive-modal.leopradel.com/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  docs&nbsp;
                </a>
                and the
                <a
                  href='https://www.npmjs.com/package/react-responsive-modal'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  &nbsp;NPM&nbsp;
                </a>
                site.
              </p>
            </Modal>
          </div>

          <div>
            <h1 className='text-center text-4xl'>Contact Import</h1>
            <div
              className={`drop text-center ${highlighted ? 'enter' : 'exit'}`}
              // Event to turn highlighting on on div:
              onDragEnter={() => {
                setHighlighted(true);
              }}
              // Event to turn highlighting off on div:
              onDragLeave={() => {
                setHighlighted(false);
              }}
              // Override the default functionality.
              // When doing this dropable, there are two events we need to add:
              // 1. 'onDragOver'
              // 2. 'onDrop'

              // The default functionality is when you drag a file into the div, it downloads.
              // So what we want to do on the 'onDragOver' event is PREVENT that from happening: e.preventDefault() --> BOTH on 'onDragOver' AND 'onDrop'
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                setHighlighted(false);
                console.log(e.dataTransfer);
                // console.log(e.dataTransfer):
                // Change to an array (if we check the console under files, it's currently a 'FileList' and not an array).
                // We want to eventually be able to loop through all the files that have been dropped.
                // 'Array.from' allows us to convert from a 'FileList' to an array.
                // And we want to select only the files that have a 'type' of "text/csv" (see console under "files": under 'lastModified').
                // That way, if we drop an image in there, it won't mess us up by trying to process it, since it's an image.
                // So, this will give us a filtered down array of files:
                Array.from(e.dataTransfer.files)
                  .filter((file) => file.type === 'text/csv')

                  // Iterate through each file and add it to state
                  .forEach(async (file) => {
                    console.log(file);

                    // Get contents of file
                    const text = await file.text();
                    console.log(text);

                    // Parse the contents
                    const result = parse(text, { header: true });
                    console.log(result);

                    // Append content from files to state -> this displays contents in browser:
                    setContacts((existing) => [...existing, ...result.data]);
                  });
              }}
            >
              DROP HERE
            </div>

            {/* Render the contents in a list - for eact 'contact', produce an <li> */}
            <ul>
              {contacts.map((contact) => (
                <li key={contact.email}>
                  <br />
                  <strong>{contact.name}</strong>: {contact.email}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReactDragDrop;
