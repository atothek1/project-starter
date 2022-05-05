# project-starter
A project starter boilerplate for Node.Js and React based projects using TypeScript managed with yarn and workspaces.


## Setup on Mac

install npm 16 latest via nvm
```shell
nvm 16
```

enabling yarn via corepack
```shell
corepack enable
```

installing all dependencies
```shell
yarn
```

## setup commands

```shell
yarn init
touch .yarnrc.yml
yarn add -D typescript ts-node @types/node
```

## addition to .yarnrc.yml

```yaml
npmRegistryServer: "https://registry.npmjs.org/"
nodeLinker: "node-modules"
initScope: "atothek"
```

## addition to package.json

```json
{
  "packageManager": "yarn@3.2.0",
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
      "ws:new": "sh -c 'yarn packages/${0} init && yarn'",
      "ws:add": "sh -c 'yarn workspace ${0} add ${1}'",
      "ws:add-d": "sh -c 'yarn workspace ${0} add -D ${1}'",
      "ws:run": "sh -c 'yarn workspace ${0} run ${1}'"
  }
}
```

## helpful yarn commands

The scripts are very simple "shorcuts" can be exchanged with more sophisticated scripts.
### create a new workspace
scope is automatically added cia the yarnrc config initScope.
```shell 
yarn packages/my-package init
# alternativly script
yarn ws:new my-package
```

### add dependecy to a workspace
scope is automatically added cia the yarnrc config initScope.
```shell 
yarn workspace @scope/my-package add react
# dev deps
yarn workspace @scope/my-package add -D react

# alternativly script
yarn ws:add @scope/my-package react
# dev deps
yarn ws:add-d @scope/my-package react
```