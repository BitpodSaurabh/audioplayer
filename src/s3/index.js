import S3 from "aws-sdk/clients/s3";

let getcontians = (data, params) => {
    let contextPrefix = params.Prefix;
    let files = [];
    data.Contents.map(content => {
      let { Key } = content;
      Key = contextPrefix === "" ? Key : Key.split(contextPrefix)[1];
      let prefix = "/";
      content["name"] = Key.split(prefix)[0];
      if (Key.indexOf(prefix) < 0) {
        //file
        content["isFile"] = true;

        files.push(content);
      }
    });
    console.log("files", { files, contextPrefix });
    return { files, contextPrefix };
  },
  getS3 = () => {
    return new S3({
      accessKeyId:
        "9d91d0625069f7af88ac4d984c33d4828ce647bc4a12a99692deafc8ec9ad3ad",
      secretAccessKey:
        "9d91d0625069f7af88ac4d984c33d4828ce647bc4a12a99692deafc8ec9ad3ad",
      endpoint: "https://app012345nejqo.pd.bitpod.io/svc/storage/api/",
      sslEnabled: false,
      s3ForcePathStyle: true,
      signatureVersion: "v4"
    });
  };

export const s3service = { getS3, getcontians };
