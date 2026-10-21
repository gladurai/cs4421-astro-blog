import { App } from 'aws-cdk-lib';
import { StaticSiteStack } from '../lib/static-site-stack';

const app = new App();
new StaticSiteStack(app, 'MyAstroBlogStack');
