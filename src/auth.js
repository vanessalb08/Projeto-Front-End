//Aqui ficam as autenticações
import react from "react";
import { Route, Redirect } from "react-router-dom";

//verificar se o usuário está autenticado. serve de base para a função seguinte
const isAuth = () => {
    //Se o token não é nulo
    if(localStorage.getItem('token') !== null){
        return true
    }
    return false;
}

//redirecionar o usuário caso ele esteja autenticado ou não
const PrivateRoute = ({component: Component, ...rest}) => {//componente do tipo componente
    return(
        <Route//vai estar tudo aqui dentro
            {...rest}//REnderiza uma coisa se a condição for true e outra se não for
            render = { props =>
                //Se for autenticado, cria o parâmetro
                isAuth() ? (
                    <Component {...rest}/>
                ) : (
                    //Pra onde o usuario vai ser redirecionado se não for autenticado
                    <Redirect
                        to = {{
                            pathname: '/', //retornado para a origem
                            state: { message: "Usuário não autorizado!"}
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;