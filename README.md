# Road-To-Docker
Basic commands and Dockefiles of Docker



Default Commands :
docker run hello-world
docker container run hello-world
docker container run busybox
docker container run busybox ls
docker container run busybox echo "ok"



List, Create, and Start Containers :
docker ps -a
docker image ls
docker container ls
docker container ls -a
docker container create hello-world
docker container start -a d55cea87cc3d



Logs, Stop, and Kill Containers :
docker container create busybox ls
docker container create busybox ping google.com
docker container start bb5034528a0e
docker container ls -a
docker container stop bb5034528a0e
docker container kill bb5034528a0e



Remove and Inspect Containers : 
docker container ls -a
docker container rm -f bb5034528a0e
docker image rm -f ec3f0931a6e6
docker container inspect e53283b1315a
docker system prune --all (delete all)



Run a Command in a Running Container with exec :
docker container run radis
docker container exec -it 5e580b3983ff redis-cli
docker container exec -it 5e580b3983ff sh
docker container run -it busybox sh


Creating Custom Images :
docker container run -it --name sazid-container alpine:latest /bin/sh
apk add --update redis

docker container commit sazid-container sazid-image (create sazid-image from sazid-container)
docker container run sazid-image redis-server (runs redis-server from sazid-image)
docker container exec -it 7aa49cfe2080 redis-cli(executes redis cli)



Create an Image from a Dockerfile :
touch Dockerfile
FROM alpine:latest
RUN apk add --update redis
CMD ["redis-server"]

cat Dockerfile
docker build -t mynewimage/newredis:latest .
docker build -t repositoryName:Tag .



COPY and ADD :
FROM alpine
COPY ./html /app/html
COPY newfile.txt /app/newfile.txt
ADD newzip.zip /app
ADD https://avatars.githubusercontent.com/u/39996870?v=4 /app/images/avatar.jpeg

docker build .
docker run -it e5032815aa65 sh
ls -la
cd app



Creating a Node js Project :
From node:alpine
WORKDIR /usr/app
COPY ./ ./
RUN npm install
CMD ["npm", "start"]
docker build -t express/projectname:latest .
docker run -p 8080:8080 express/projectname
docker run -it -p 8080:8080 express/projectname sh



------------------------------------------------------------------

DOCKER COMPOSE

mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose

chmod +x ~/.docker/cli-plugins/docker-compose
sudo chown $USER /var/run/docker.sock

docker compose version
-----------------------------------
docker ps -a
docker rm nameofprocess
docker volume 
docker volume rm name
docker rm 
docker compose up
docker compose up -d
docker compose down
docker exec -it khanah-db-1 sh
docker exec -it khanah-db-1 psql -U khanah

----------------------------------
Laravel Sail
----------------------------------
./vendor/bin/sail up
./vendor/bin/sail down

docker container exec -it dda6637f76fa /bin/sh

phpmyadmin:
        depends_on:
            - mysql
        image: phpmyadmin/phpmyadmin
        environment:
            - PMA_HOST=mysql
            - PMA_PORT=3306
        networks:
            - sail
        port: 8001:80


-----------------------------------------------------------
-----------------------------------------------------------
