import * as dynamoDBLib from "./libs/dynamodb-lib";
import {success,failure} from "./libs/response-lib";

export async function main(event,context) {
    const params = {
        TableName: "notes",
        Key : {
            userid: event.requestContext.identity.cognitoIdentityId,
            noteid: event.pathParameters.id 
        }
    };

    try {
        const result = await dynamoDBLib.call("delete",params);
        return success({status: true});
    } catch(e) {
        return failure({status: false});
    }
}