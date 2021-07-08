import {Component} from 'react';

import axios from 'axios';
import { parseJwt, usuarioAutenticado} from '../../services/auth';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {              
            email : '',
            senha : '',
        }
    }

    efetuarLogin = (evento) => {

        evento.preventDefault()

        axios.post('http://localhost:5000/api/login', {
            email : this.state.email,
            senha : this.state.senha
        }) 
        
        .then(resposta => {
            if(resposta.status === 200){

                localStorage.setItem('usuario-login', resposta.data.token);

                console.log('Meu token é: ' + resposta.data.token);

                if (parseJwt().role === '1') {
                    this.props.history.push('/listar');
                    console.log('Estou logado: ' + usuarioAutenticado());
                }
                else {
                    this.props.history.push('/')
                }
            }
        })

        atualizaCampo = (campo) => {
            this.setState({ [campo.target.name] : campo.target.value })
        } 
    
    };

    render(){
        return(
            <main>
                <h1>Login</h1>
                <section> 
                    <div>
                        <form onSubmit={this.efetuarLogin} >
                            <input
                            
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.atualizaCampo}
                            placeholder="email"
                            ></input>
                               
                               

                            <input
                            type="password"
                            name="senha"
                            value={this.state.senha}
                            onChange={this.atualizaCampo}
                            placeholder="senha"
                            ></input>

                            <button  type="submit">Logar</button>
                        </form>
                    </div>
                </section>
            </main>
        )
}

} // fim da classe Login