# Create2 Deployer

## Introduction

This repo demonstrates a sample contract deployment using the `create2` opcode. There is a demo script to deploy an ERC-20 using our generic deployer.

## Prerequisites

### NodeJS and Yarn

First install the LTS of [nodejs](https://nodejs.org/en) which is `14.17.0` at the time of writing. NodeJS bundles `npm`.

Next install [yarn](https://yarnpkg.com):

```zsh
npm install -g yarn
```

## Dependencies

First clone this repo and download the necessary packages.

```zsh
git clone https://github.com/dasconnor/create2-deployer.git
cd create2-deployer
yarn
```

## Building

In [`package.json`](./package.json) there's a `compile` script.

```json
"compile": "npx hardhat compile",
```

Run `yarn compile` to make sure your project compiles.

## Prepare to Deploy

Edit the deployment script in `scripts/deploy.ts` Without editing, the script will deploy the Deployer contract and deploy an example ERC-20 with `create2`. The function will then print the log of the deploy.

## Deploy

Hardhat enables deploying to multiple environments. In [`package.json`](./package.json) there is a script for deploying.

```json
"deploy": "npx hardhat run scripts/deploy.ts",
```

You can chose which environment that you want to deploy to by passing in the `--network` flag with `avash`, `fuji`, or `mainnet` for each respective environment. If you don't pass in `--network` then it will default to the hardhat network. For example, if you want to deploy to mainnet

```zsh
yarn deploy --network mainnet
```

When you deploy to `avash`, `fuji` or `mainnet` you can add your private key(s) as an array to the respective environment's `accounts` field in [hardhat.config.js](./hardhat.config.js).

