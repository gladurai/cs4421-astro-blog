import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkStack } from '../lib/cdk-stack';

test('SQS Queue Created', () => {
  const app = new App();
  const stack = new CdkStack(app, 'TestStack');
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::SQS::Queue', 1);
  template.hasResourceProperties('AWS::SQS::Queue', {
    VisibilityTimeout: 300,
  });
});
