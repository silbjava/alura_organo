import './CampoTexto.css'

const CampoTexto = (props) => {

    // let valor = 'Guilherme Silveira'

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} type={props.type} onChange={aoDigitado}  placeholder={props.placeholder} required/>
        </div>
    )

}

export default CampoTexto