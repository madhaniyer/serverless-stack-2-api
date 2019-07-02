import * as dynamoDBLib from "./libs/dynamodb-lib";
import {success, failure} from "./libs/response-lib";

export async function main(event,context) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: "notes",
        Key: {
            userid:  event.requestContext.identity.cognitoIdentityId,
            noteid: event.pathParameters.id
        },
        UpdateExpression: "SET content = :content, attachment = :attachment",
        ExpressionAttributeValues : {
            ":attachment": data.attachment || null,
            ":content": data.content || null
        },
        //ReturnValues specifies if and how to return the item's attributes,
        // where ALL_NEW returns all attributes of the item after the update
        //You can Inspect tresult below to see how it works with different settings
        ReturnValues: "ALL_NEW"
    };

    try {
        const result = await dynamoDBLib.call("update",params);
            return success(result.Items);
    } catch(e) {
        return failure({status: false,err: e});
    }
}