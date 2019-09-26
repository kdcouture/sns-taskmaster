const AWS = require('aws-sdk');

exports.handler = async (event, context) => {

  AWS.config.update({region: 'us-west-2'});

  var sns = new AWS.SNS();

  const params = {
    Message: event.message,
    TopicArn: event.TopicArn,
  };

  const data = await sns.publish(params,context.done).promise()

  const response = {
    statusCode: 200,
    body: JSON.stringify(data),
  };

  return response;
};
