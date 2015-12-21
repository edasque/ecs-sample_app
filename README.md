ECS Sample App
=====

A basis for a Elastic Container Service tutorial

* A container that holds a HTTP server that listens on  port 8000 (```curl http://hostname:8000```) and TCP server that listens on port 9000 (```nc hostname 9000```)
* a container that generates random files names which content is the current datetime in a given volume
* a container that syncs that volume to an S3 bucket

Generating ECS JSON files
---
Those were converted from docker-compose files using [container-tranform](https://github.com/ambitioninc/container-transform) (```pip install container-transform```).

Docker Hub
---
* [File Generator](https://hub.docker.com/r/edasque/ecs-sample-app-file-generator/)
* [TCP & HTTP servers](https://hub.docker.com/r/edasque/ecs-sample-app-thats-what-time-it-is/)

TODO
---
* ~~Figure out why I can reach the HTTP server (port 8000) but not the TCP one (port 9000) ~~ - it was because it was listening on *localhost* instead of *0.0.0.0*
* Also, I don't think the cron back-up works on ECS