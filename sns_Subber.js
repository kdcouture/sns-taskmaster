exports.handler = async (event) => {
  const AWS = require('aws-sdk');
  AWS.config.update({region: 'us-west-2'});
  const sns = new AWS.SNS();
  
  var params = {
    Protocol: 'sms',
    TopicArn: event.TopicARN,
    Endpoint: event.moblieNumber,
    ReturnSubscriptionArn: true || false,
  };
  
  console.log({params});
  
  sns.subscribe(params).promise()
    .then( data => console.log('OK', data) )
    .catch( console.error );
};
