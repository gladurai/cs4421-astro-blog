import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Queue(this, 'BlogQueue', {
      visibilityTimeout: Duration.seconds(300),
    });
  }
}
