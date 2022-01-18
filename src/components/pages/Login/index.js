import react , { Component } from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'; //informa entre {} o que quer importar
import Header from "../../Header";

export default class Login extends Component{

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state?this.props.state.message: '',
        };
    }   

    signIn = () => {
        const url = "http://localhost:8080/login";
        const data = {
            email: this.email,
            senha: this.password,
        };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch(url, requestInfo)
            .then(response => {
                if(response.ok){
                    console.log("O login foi realizado com sucesso.")
                    return response.headers.get("Authorization")
                }
                throw new Error("Login inválido")
            }).then(token => {
                localStorage.setItem('token', token);
                //dentro do push ionforma qual o caminho que o usuário deve ir caso a requisição dê certo
                this.props.history.push("/dashboard");
            }).catch( e => {
                this.setState({message: e.message})
                console.log(this.email, this.password)
            });
    }


    render(){
        return(
            //Componentes são com letra maiúscula
            <div className="CaixaLogin">
                <Header titulo="Login"/>
                <hr/>
                {
                    this.state.message !== '' ? (
                        <Alert color = 'danger' className='text-center'>{this.state.message}</Alert>
                    ) : ''
                }
            <Form>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Informe o seu email" />
                </FormGroup>
                <FormGroup>
                    <Label for ="password">Senha</Label>
                    <Input type="password" id="password" onChange={e => this.password = e.target.value} placeholder="Informe a sua senha"/>
                </FormGroup>
                <Button color="primary" onClick={this.signIn}>Entrar</Button>
            </Form>

           
            </div>
        );
    }
}