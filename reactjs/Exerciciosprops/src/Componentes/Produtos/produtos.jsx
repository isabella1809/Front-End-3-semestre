import "./Produtos.css";

function Produtos() {
    const Produtos =[
        {
            nome:"tênis de marca",
            preco:550,
            descricao: "tênis chique!!"
        },
        {
            nome:"tênis de marca",
            preco:550,
            descricao: "tênis chique!!"
        },
        {
            nome:"Camiseta de marca",
            preco:270,
            descricao: "camiseta chique e confortavel!!"
        }
    ]
    return(
        Produtos.map ((produtinho) =>{
            return(
                <Produtos
                nome={}
                />
            )
        })
    )
}

export default Produtos