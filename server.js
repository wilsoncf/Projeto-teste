//usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Progamação",
        category: "Estudo",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        url: "https://rocketseat.com.br"
    }
]






// configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    noCache: true, // boolean
})

//criei uma rota /
// e capturo o pedido do cliente para responder 
server.get("/", function(req, res){

    
    return res.render( "index.html")
})

server.get("/ideias", function(req, res){
    return res.render( "ideias.html")
})

// liguei meu servidor na porta 3000
server.listen(3000)