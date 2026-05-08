import "./Filme.css";

function Filme(titulo, ano, genero, nota) {
    return(
        <p>{titulo}-{ano}-{genero}-{nota}</p>
    );
}

export default Filme