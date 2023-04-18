// npm install @aws-sdk/client-s3
// https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/
import { S3Client } from "@aws-sdk/client-s3";

const myS3Client = new S3Client({
    region: "eu",
    endpoint: process.env.S3_ENDPOINT,
})

export { myS3Client }