import "./ModalErro.css";

const ModalErro = ({errosArray}) => {
    return (
        <div className="modal_error">
            <h3>Não foi possível realizar o cadastro!</h3>
            <ul>
                {
                    errosArray.map((e, i) => {
                        return <li key={i}>{e}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ModalErro;