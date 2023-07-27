import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import info from '../StartupsPage/startupsInfo';
import { isStartupNameInvalid } from './FormValidation';

import styles from './FormStyles.scss';

const UserForm = () => {
  const [addStartup, setAddStartup] = useState({
    name: '',
    logoURL: '',
    description: '',
    owner: '',
    creationDate: '',
  });
  const [isInvalid, setIsInvalid] = useState({
    isStartupNameInvalid: false,
    isLogoInvalid: false,
    isDescriptionInvalid: false,
  });
  const now = new Date();
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = month[now.getMonth()];
  const date = `${now.getFullYear()} , ${currentMonth}, ${now.getDate()}`;

  const clearFields = () => {
    setAddStartup({
      name: '',
      logoURL: '',
      description: '',
      owner: '',
      creationDate: '',
    });
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAddStartup((prevState) => ({
          ...prevState,
          logoURL: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setAddStartup((prevState) => ({
      ...prevState,
      [name]: value,
      creationDate: date,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isStartupNameInvalid(addStartup.name)) {
      setIsInvalid((prevState) => ({
        ...prevState,
        isStartupNameInvalid: true,
      }));
    } else setIsInvalid(false);
    localStorage.setItem('newStartup', { ...addStartup });
    console.log(localStorage.getItem(addStartup));
  };
  return (
    <div>
      <Form className='mx-auto w-50' onSubmit={handleFormSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Enter your name</Form.Label>
          <Form.Control
            type='text'
            name='owner'
            onChange={handleFormChange}
            value={addStartup.owner}
            placeholder='Enter the text'
          />
        </Form.Group>
      </Form>
      <Form className='mx-auto w-50'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Startup's name</Form.Label>
          <Form.Control
            name='name'
            type='text'
            placeholder='Enter the text'
            onChange={handleFormChange}
            value={addStartup.name}
            isInvalid={isInvalid.isStartupNameInvalid}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Startup description</Form.Label>
          <Form.Control
            type='text'
            name='description'
            placeholder='Enter the text'
            onChange={handleFormChange}
            value={addStartup.description}
          />
        </Form.Group>
        <Form.Group controlId='formFile' className='mb-3'>
          <Form.Label>Your startup logo</Form.Label>
          <Form.Control
            name='logoURL'
            type='file'
            accept='image/*'
            onChange={handleImageUpload}
          />
        </Form.Group>

        <Form.Group>
          <Button variant='primary' type='submit' onClick={handleFormSubmit}>
            Надіслати
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserForm;
