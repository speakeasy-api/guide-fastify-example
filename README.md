<div align="center">

<a href="[Speakeasy](https://speakeasyapi.dev/)">
  <img src="https://github.com/speakeasy-api/speakeasy/assets/68016351/e959f81a-b250-4003-8c5c-a45b9463fc95" alt="Speakeasy Logo" width="400">
<h2>Speakeasy Fastapi OpenAPI Example</h2>
</a>

</div>

This example Fastapi app demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications and SDKs.

This project was bootstrapped with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli).

## Prerequisites

You need to have Node.js the Fastify CLI installed on your system to run this project. If you don't have these installed, you can download them from [here](https://nodejs.org/) and [here](https://github.com/fastify/fastify-cli).

To generate an SDK, you'll also need the Speakeasy CLI installed, or use the Speakeasy dashboard.

## Installation

To install the application on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/speakeasy-api/speakeasy-fastify-example.git
```

2. Navigate into the directory:
```bash
cd speakeasy-fastify-example
```

3. Install all dependencies for the application using NPM:
```bash
npm install
```

4. [Install Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation):
```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

## Running the application

Start the server:
```bash
npm run start
```

### For development

You can use the provided script to run the application in development mode. It will watch for any changes in the source code and automatically restart the server.

```bash
npm run dev
```

### Working with the OpenAPI specification

To generate the OpenAPI specification file in JSON format, run:

```bash
npm run openapi
```

To generate an SDK, run:

```bash
npm run sdk
```

To generate an SDK in a different language, run Speakeasy and specify the language:

```bash
speakeasy generate sdk \
    --schema openapi.json \
    --lang typescript \
    --out ./sdk
```

## License

This project is licensed under the terms of the Apache 2.0 license.