import * as api from './books.generated'

// TODO: use own domain for prod
api.defaults.baseUrl = 'https://vr5o2cfuhi.execute-api.us-west-1.amazonaws.com/v1';

// api.defaults.fetch = fetch
export * from './books.generated';
