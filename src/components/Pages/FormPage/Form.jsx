import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UserForm = () => {
  
  return (
    <div>
      <Form className='mx-auto w-50'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Назва стартапу</Form.Label>
          <Form.Control className='' type="text" placeholder="Введіть текст" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Опис стартапу</Form.Label>
          <Form.Control type="text" placeholder="Введіть текст" />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Картинка, яка описує стартап</Form.Label>
          <Form.Control type="file" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Надіслати
        </Button>
      </Form>
    </div>
  )
}

export default UserForm