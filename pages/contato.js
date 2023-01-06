import axios from 'axios';
import { useForm } from "react-hook-form";
import css from '../styles/Home.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// Formulário utilizando React-Hook-Form para validação de formulário
// https://react-hook-form.com
export default function Contato() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const submitContato = data => console.log(data);


    function sendApiContato() {
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                axios
                    .post("http://localhost/tod/LC-SUMMIT-2023/index.php/api/save", formData, {
                        // headers: {
                        //     "Content-Type": "multipart/form-data",
                        // },
                    })
                    .then((res) => {
                        console.log('success 1');
                        console.log(res.data);                        
                        //console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        }
    }


    function submitContato(data) {

        //let formAss = new FormData();
        var formData = new FormData();
        for (var key in data) {
            formData.append(key, data[key]);
        }

        //let form = this.formData(data);
        //alert( JSON.stringify(data, null, 4) );
        //formAss.append('ass_cnpj', vue.fields.cad_cnpj);

        axios.post('http://localhost/tod/LC-SUMMIT-2023/index.php/api/save', formData)
            .then(response => {
                console.log('success');
                console.log(response.data);
            }).catch(err => {
                console.log('error');
                console.log(err);
            });


        // axios.post('http://localhost/tod/LC-SUMMIT-2023/index.php/api/save', formData).then(function(response){
        //     console.log(response);
        //     // vue.loading.active = false;
        //     // if( response.data ){
        //     //     let respData = response.data;
        //     //     if( respData.error_num == '0' ){
        //     //         vue.PostCadastro();
        //     //         return false;
        //     //     }else{
        //     //         vue.errorinscr_msg = "Este CNPJ não consta em nosso banco de dados de empresas associadas (favor marcar como não associada) ou entrar em contato pelo e-mail: bi@thinkplasticbrazil.com";
        //     //     }
        //     // }
        //     return false;
        // });  

        console.log(data);



        // Aqui iremos enviar os campos para uma API
        // Para processar os dados
    }

    return (
        <div className={css.wrapper}>
            <div className="container">teste</div>
            <Container fluid>
                <h1>Contato</h1>
                <Row className="justify-content-center">
                    <Col xs={6}>
                        <Form onSubmit={handleSubmit(sendApiContato)}>
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
