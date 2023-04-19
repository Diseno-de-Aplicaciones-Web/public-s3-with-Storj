import express from 'express'
import cors from "cors"
//import { PutObjectCommand } from "@aws-sdk/client-s3";
//import { myS3Client} from "./lib/storj-s3.mjs"
import StorejS3 from './lib/storj-s3.mjs'

const app = new express()
app.use(cors())

const s3client = new StorejS3("proxecto")

app.post("/ficheiros/:nomeDoFicheiro", async (peticion, resposta)=>{
    try {

        const resultado = await s3client.put(peticion.params.nomeDoFicheiro, peticion)
        resposta.sendStatus(resultado.$metadata.httpStatusCode)
        if (resultado.$metadata.httpStatusCode !== 200 ) console.error(resultado)
        
    } catch (excepcion) {
        console.error(excepcion)
        resposta.sendStatus(500)
    }

})

app.listen(process.env.PORT, ()=>console.log("Express funcionando..."))
