import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

// import App from './pages/usuario/App';
import Login from '/pages/login/login';
import Listarmedico from '/pages/listar/listarmedico';
import Listarpaciente from '/pages/listar/listarpaciente';
import cadastrar from '/pages/cadastrar/cadastrar';
import notfound from '/pages/notfound/notfound';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/listarmedico" component={Listarmedico} />
        <Route exact path="/listarpaciente" component={Listarpaciente} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/cadastrar" component={cadastrar} /> 
        <Route exact path="/notfound" component={notfound} /> 
       
        <Redirect to="notfound" /> {/* Redireciona para "NotFound" caso não encontre nenhuma rota */}
      </Switch>
    </div>
  </Router>

)


ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
