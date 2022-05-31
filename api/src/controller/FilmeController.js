import { alterarImagem, inserirFilme, ListarTodosOsFilmes , Buscar]PorID, BuscarPorNome } from '../repository/filmerepository.js'
import multer from 'multer';

import {Router} from 'express'

const upload = multer({ dest : 'storage/capasFilmes' })
const server = Router();

server.post('/filme', async (req, resp ) => {
   try {
       const novoFile = req.body;
       
       const filmeInserido = await inserirFilme(novoFilme);

     resp.send(filmeInserido);



   } catch (err) {
       resp.status(400).send({
           erro : err.message
       })
   }

})

server.put('/filme/:id/imagem', upload,  async (req, resp) =>{
    try {
        const {id} = req.params;
        const imagem = req.file.path;

        const resp = await  alterarImagem()
        if (resposta != 1)
        throw new Error('A imagem não pode ser salva. ');
        resp.status(204).send();
    }
     catch (err) {
        resp.status(400).send({
            erro : err.message
    })

     }
})

server.get('/filme', async (req, resp) => {
	try{
	const resposta = await ListarTodosOsFilmes();
	resp.send(resposta)
} catch(err){
	resp.status(400).send({
	    erro: err.message
    })}})

server.get('/filme/:id', async (req, resp) => {
        try{
        const id = Number(req.params.id);
        const resposta = await BuscarPorID(id);
        if(!resposta)
        resp.status(404).send([])
        else
        resp.send(resposta)
    } catch(err){
        resp.status(400).send({
        erro : err.message
    })}
    })

server.get('/filme/busca', async (req, resp) => {
        try{
        const {nome} = req.query
        const resposta = await BuscarPorNome(nome);
        if(!resposta)
        throw new Error('filme não encontrado')
        resp.send(resposta)
    } catch(err){
        resp.status(400).send({
        erro : err.message
        })}
    })    

export default server;