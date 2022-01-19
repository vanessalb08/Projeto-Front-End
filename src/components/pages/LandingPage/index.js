import react , { Component } from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap'; //informa entre {} o que quer importar
import Header from "../../Header";

export default class LandingPage extends Component{

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state?this.props.state.message: '',
        };
    } 

    saveLead = () => {
        const url = "http://localhost:8080/leads";
        const data = {
            nome: this.nome,
            email: this.email,
            observacoes: this.observacoes,
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
            if(!response.ok){
              throw new Error("Algo de errado não está certo")
            }
                console.log("Salvo com sucesso!")
        })
      }
    render(){
        return(
            <div className="Collector">
                <Header titulo="Mais informações? Cadastre-se"/>
                <hr/>
        
                <Form>
                    <FormGroup>
                        <Label for="nome"> Nome: </Label>
                        <Input type="text" id="nome" onChange={e => this.nome = e.target.value} placeholder="Seu nome" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email"> Email: </Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Seu email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="observacoes"> Observações: </Label>
                        <textarea
                        class="form-control"
                        id="observacoes"
                        rows="3"
                        onChange={e => this.observacoes = e.target.value}
                        placeholder="Alguma observação que queira nos contar?"
                        />
                    </FormGroup>
                    <Button color="dark" block onClick={this.saveLead}>
                        {" "}
                        ENVIAR
                    </Button>
                    </Form>
                </div>
        );
    }
}