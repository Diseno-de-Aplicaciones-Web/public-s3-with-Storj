// npm install @aws-sdk/client-s3
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/

import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
    ListObjectsCommand,
    DeleteObjectCommand
} from "@aws-sdk/client-s3";

const StorjS3Endpoint = "https://gateway.storjshare.io"


class StorejS3 {

    constructor(bucket, endpoint=StorjS3Endpoint){
        this.bucket = bucket
        this.client = new S3Client({
            region: "none",
            endpoint: endpoint,
        })
    }

    put(fileName, request) {

        const command = new PutObjectCommand({
            Bucket: this.bucket,
            Key: fileName,
            Body: request,
            ContentType: request.headers['content-type'],
            ContentLength: request.headers['content-length']
        });
        
        return this.client.send(command);
        
    }

}

export default StorejS3