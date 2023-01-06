import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import {Form, Button} from 'react-bootstrap';

export default function Contato() {
    return (
      <>
        <div style={{ margin: '30px 0' }}>
        <Form>
            <Row className="justify-content-center">
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control name="nome" id="nome" type="text" placeholder="" />
                        <Form.Text className="text-muted">
                            error
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        <Form.Text className="text-muted">
                            error
                        </Form.Text>
                    </Form.Group>
                </Col> 
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Text className="text-muted">
                            error
                        </Form.Text>
                    </Form.Group>
                </Col> 
                <Col xs={12}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Data de Nascimento</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Text className="text-muted">
                            error
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row> 
        </Form>
        </div>              
      </>
    )
  }