# Starter for Next.js projects

This is a starter project for [Next.js](https://nextjs.org/) projects with [TypeScript](https://www.typescriptlang.org/), [Styled Components](https://styled-components.com/), [ESlint](https://eslint.org/), [Jest](https://jestjs.io/), [Playwright](https://playwright.dev/), [commitlint](https://commitlint.js.org/#/), [husky](https://typicode.github.io/husky/#/) and [Docker](https://www.docker.com/).

## Getting Started

Install the project on your desired environment:

```sh
npm install
# or
pnpm install
# or
yarn
```

### Local development server

To run a development server on your machine do:

```sh
npm run dev
# or
pnpm run dev
# or
yarn dev
```

Go to: [Check out the app running in dev mode](#check-out-the-app-running-in-dev-mode)

### Docker development server

To run the development server inside a Docker container do:

```sh
docker build -f Dockerfile.dev -t RubenSibon/next-starter:dev .

docker run -p 3000:3000 --name next-starter-dev RubenSibon/next-starter:dev
```

Go to: [Check out the app running in dev mode](#check-out-the-app-running-in-dev-mode)

### Check out the app running in dev mode

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy

### Build and start app

To build and start the production server:

```bash
npm run build && npm run start
# or
pnpm run build && pnpm run start
# or
yarn build && yarn start
```

### Docker production server

To run the production build inside a Docker container do:

```sh
docker build -t RubenSibon/next-starter:latest .

docker run -p 3000:3000 --name next-starter RubenSibon/next-starter:latest
```

## Quality assurance

In order to ensure this application is up to the highest quality standards some automated system checks are in place:

- Code linting with [ESlint](https://eslint.org/) ([rules](.eslintrc.json));
- Unit testing with [Jest](https://jestjs.io/) ([config](jest.config.js) & [directory](tests/jest));
- Integration (end-to-end) testing with [Playwright](https://playwright.dev/) ([config](playwright.config.ts) & [directory](tests/playwright));
- Commit linting according to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with [commitlint](https://commitlint.js.org/#/) and [husky](https://typicode.github.io/husky/#/)'s `commit-msg` hook;
- Automatic linting and testing on the `pre-commit` hook;

## Dependencies

- Node 16.x

## Learn More

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
