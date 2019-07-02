import uuid from "uuid";
import * as dynamoDbLib from "./libs/dynamodb-lib";
import {success,failure} from "./libs/response-lib";



export async function main(event,context,callback) {
    const data=JSON.parse(event.body);
    const params = {
        TableName: "notes",
        Item: {
            userid: event.requestContext.identity.cognitoIdentityId,
            noteid: uuid.v1(),
            content: data.content,
            attachment: data.attachment,
            createdAt: Date.now()
        }
    };

    //Set response headers to allow CORS (Cross Origin Resource Sharing)
    // Return Status code 500 on error
    //Return Status code 200 and the newly connected item
    try {
        await dynamoDbLib.call("put",params);
        return success(params.Item);
    } catch(e) {
        return failure({status: false});
    }
}

//"noteid\":\1730900-96cf-11e9-9c16-a78a3f88bc13