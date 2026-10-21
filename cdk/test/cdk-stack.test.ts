import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { describe, it } from 'vitest';
import { CdkStack } from '../lib/cdk-stack';

describe('CdkStack', () => {
  it('creates an SQS queue with a five-minute visibility timeout', () => {
    const app = new App();
    const stack = new CdkStack(app, 'TestStack');
    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::SQS::Queue', 1);
    template.hasResourceProperties('AWS::SQS::Queue', {
      VisibilityTimeout: 300,
    });
  });
});
