// CONFIGURAR O BACK END
const express = require('express')

const app = express()

// ROTA PARA O FRONT
app.use(express.static('public'))

// INICIAR COM localhost:3000
app.listen(3000, () => {
    console.log(`Servidor rodando, acesse o link http://localhost:3000`)
})