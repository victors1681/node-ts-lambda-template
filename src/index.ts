import { APIGatewayProxyEvent, Handler } from 'aws-lambda';

export const handler: Handler = async (event: APIGatewayProxyEvent) => {
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify('this is my first test'),
  };
};
