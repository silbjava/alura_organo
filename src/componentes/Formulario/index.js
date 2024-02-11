import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {
    const times = [ 'Programação','Front-End','Data Science', 'Devops', 'UX & DEsign', 'Mobile', 'Inovação e Gestão']

    const aoSalvar = (e) =>{
        e.preventDefault()
        console.log('Form  foi submetido')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome" obrigatorio={true}/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo" obrigatorio={true}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" obrigatorio={true}/>
                <ListaSuspensa label="Time" itens={times} obrigatorio={true}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}
export default Formulario