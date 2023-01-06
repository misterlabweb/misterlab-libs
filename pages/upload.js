import { useForm } from "react-hook-form";
import css from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Formulário utilizando React-Hook-Form para validação de formulário
// https://react-hook-form.com
export default function Upload() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    function submitContato(data){
        
        
        
        console.log(data);



        // Aqui iremos enviar os campos para uma API
        // Para processar os dados
    }

    return (
        <div className={css.wrapper}>
            <Container fluid>
                <h1>Upload</h1>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Form onSubmit={handleSubmit(submitContato)}>
                            <Row className="justify-content-center">
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="formBasicNome">
                                        <Form.Label>Nome</Form.Label>
                                        <Form.Control type="text" placeholder="" {...register("nome")} />
                                        <Form.Text className="text-muted">
                                            error
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="text" placeholder="" {...register("email", { required: true })} />
                                        <Form.Text className="text-muted">
                                            error
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="formBasicTelefone">
                                        <Form.Label>Telefone</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                        <Form.Text className="text-muted">
                                            error
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col xs={12}>
                                    <Form.Group className="mb-3" controlId="formBasicDteNascto">
                                        <Form.Label>Data de Nascimento</Form.Label>
                                        <Form.Control type="text" placeholder="" />
                                        <Form.Text className="text-muted">
                                            error
                                        </Form.Text>
                                    </Form.Group>
                                </Col>

                                <Col xs={12}>
                                    <input type="submit" />
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
