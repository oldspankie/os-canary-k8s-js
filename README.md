# os-canary-k8s-js

A node.js application for testing and messing around in k8s

### Scope
This is just a small webapp that responds with a JSON object, built using `node` in a `Docker` container.  The Docker container is the target of a `helm` chart and deployed via `ArgoCD`.  The primary use of the app was to learn and test deployments and service routing with `Istio` and `ArgoCD`

### Publish
Included in this repo is a script to automatically build and publish the docker container to a private repo.  This is meant to be called by a CI/CD pipeline - specifically, this was used with TeamCity in mind using a Linux build agent with PowerShell and Docker installed.

Called in a `Command Line` build step like this:
>`pwsh -file publish.ps1 -name:"os-canary-k8s-js" -uploadurl:"local.repo:9001"`