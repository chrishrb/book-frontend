# book-frontend

## Developing

```bash
yarn dev
```

## Building

To create a production version of this app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

## Deploy

First rollout the [infrastructure](https://github.com/chrishrb/book-infrastructure) for the book application. After that you have to use the
correct api-gateway url in the `src/lib/api/index.ts`. Afterwards [build](#Building) the application and deploy it with the following command:

```bash
aws s3 cp build s3://book-serverless-frontend --recursive --profile jambit
```

After that you can go to http://book-serverless-frontend.s3-website.us-east-1.amazonaws.com/
