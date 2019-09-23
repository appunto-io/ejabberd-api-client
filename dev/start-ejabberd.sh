#!/usr/bin/env bash

RUNNING=`docker ps | awk '/ejabberd-tdd-server-instance/ {print $1}'`
CONTAINER=`docker container ls -a | awk '/ejabberd-tdd-server-instance/ {print $1}'`

if [ $RUNNING ]
then
  echo "Killing container $RUNNING"
  docker stop $RUNNING
fi

if [ $CONTAINER ]
then
  echo "Removing container $CONTAINER"
  docker container rm ejabberd-tdd-server-instance
fi


docker build -t ejabberd-tdd-server .
docker run -it -d --name ejabberd-tdd-server-instance -p 15443:5443 ejabberd-tdd-server
