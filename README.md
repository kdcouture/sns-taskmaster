# sns-taskmaster
These two files make up the two lambda funtions used to subscribe a moblie number to a sns and a second to send a message to all subscribed devices.
## sns_Subber
### [sns_Pubber](https://github.com/kdcouture/sns-taskmaster/blob/master/sns_Pubber.js)
This is the code used in the AWS lambda function that will take in an event structured like 
```
{
  "TopicARN": "arn:aws:sns:us-west-2:108642466575:taskMaster",
  "moblieNumber": "+1(Your US Moblie #)"
}
```
### [sns_Subber](https://github.com/kdcouture/sns-taskmaster/blob/master/sns_Subber.js)
This is the code for the publisher lambda function that will send a message out to all devices subscribed to the given ARN.
```
{
  "TopicArn": "arn:aws:sns:us-west-2:108642466575:taskMaster",
  "message": "Test message from lambda function to sns publisher!"
}
```
