import "./Produto.css";
function Produto(nome, preco, descricao) {
  return(
    <p>{nome} - {preco} - {descricao}</p>
  );  
}

export default Produto