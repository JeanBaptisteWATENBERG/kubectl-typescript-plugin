# kubectl typescript plugin demo

The idea of this repository is to prototype the creation of kubectl
plugin using typescript.

It uses [pkg](https://github.com/vercel/pkg) to build cross platform executable
binaries that can run on devices where node is not installed.

## Usage

```
npm install
```

```
npm run build
```

Binaries are available in `apps/kubectl-plugin/build`.
For conveniance testing linux binary is also copied without `-linux` extension
so that extending your path as below enable the usage of the plugin with kubectl.

```
export PATH="$PATH:$(pwd)/apps/kubectl-plugin/build"
```
