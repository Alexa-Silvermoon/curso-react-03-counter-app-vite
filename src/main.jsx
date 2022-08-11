// escribir imr para escribirlo rapidamente:
import React from 'react';
import ReactDOM from 'react-dom/client'; //para renderizar
import { FirstAppX } from './FirstAppX';
import { CounterApp } from './CounterApp';
import { CounterApp2 } from './CounterApp2';
import { App2, App3, FirstApp, FirstApp2, FirstApp3 } from './hello-word-app'; //PascalCase en react para los componenetes la primera letra debe ser en mayusculas
import './styles.css';

function App() {

    return (<h1>hola mundo desde main.jsx</h1>);
}

ReactDOM.createRoot( document.getElementById('root')).render(

    <React.StrictMode> {/* este bloque es conocido como el padre */}
        <CounterApp value={100}></CounterApp>
        <CounterApp2 valorInicial={ 0 }></CounterApp2>
        <App></App>
        <App2></App2>
        <App3></App3>
        <FirstApp></FirstApp>
        <FirstApp2></FirstApp2>
        <FirstApp3 title="soy el title" subTitle="soy el subTitle" subTitle2={ 1995 }></FirstApp3>
        <FirstAppX title="title en FirstAppX - main.jsx" subTitle="subtitulo en FirstAppX"></FirstAppX>
    </React.StrictMode>
)

// https://www.udemy.com/course/react-cero-experto/learn/lecture/19663702#questions
