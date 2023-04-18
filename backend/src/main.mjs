import express from 'express'
import cors from "cors"
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { myS3Client} from "./lib/s3/client.mjs"

const app = new express()
app.use(cors())

app.post("/upload/:articleId/:fileName", async (req, res)=>{
    try {
        
        const command = new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.params.fileName,
            Body: req,
            ContentType: req.headers['content-type'],
            ContentLength: req.headers['content-length']
        });

        const data = await myS3Client.send(command);

        console.log(data);
/*
        const articulo = Articulo.findByPk(req.params.articleId)

        articulo.createImagen({
            s3key: data.Key,
            publicurl: data.Location
        })
*/
        res.sendStatus(201)
        
    } catch (err) {
        console.error(err)
        res.sendStatus(500)
    }

})

app.listen(process.env.PORT, ()=>console.log("Express funcionando..."))
