import AWSAppSyncClient from 'aws-appsync-react';
import { AUTH_TYPE } from 'aws-appsync-auth';

const config = {
    url: 'https://b7ele32orzdflk54cvge7ll2uq.appsync-api.us-east-1.amazonaws.com/graphql',
    region: 'us-east-1',
    auth: {
        type: AUTH_TYPE.API_KEY,
        apiKey: 'da2-7apy75a3wnhmvn3exh3u5cbl2a'
    }
};

const client = new AWSAppSyncClient(config);

export default client;