import { App } from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';

const app = new App();
new CdkStack(app, 'MyAstroBlogStack');
