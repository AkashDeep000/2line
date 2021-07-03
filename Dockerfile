Create account

14

4

36

Cover image for How I Dockerized my Next.js website?
How I Dockerized my Next.js website?
#nextjs #docker #devops #tutorial

deepak pd
8 May ・3 min read
Learn how to use Docker to create images for development and production.

Imagine that you have developed a full fledged working application and want other developers to contribute to the project. Now if the application consists of different components like UI, running server, database etc. The new developer should install the exact configuration of the entire stack on to his/her system before starting the development. To overcome this issue Docker comes to the rescue.

What is Docker?
Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

Multistaging dockerfile for development and production
I created a common docker file for both development and production. Dockerfile is used to create an image of the application, using this image n number of containers can be created, which is like a running version of the image.

🐬Dockerfile
#Creates a layer from node:alpine image.
FROM node:alpine

#Creates directories
RUN mkdir -p /usr/src/app

#Sets an environment variable
ENV PORT 3000

#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /usr/src/app

#Copy new files or directories into the filesystem of the container
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

#Execute commands in a new layer on top of the current image and commit the results
RUN npm install

##Copy new files or directories into the filesystem of the container
COPY . /usr/src/app

#Execute commands in a new layer on top of the current image and commit the results
RUN npm run build

#Informs container runtime that the container listens on the specified network ports at runtime
EXPOSE 3000

#Allows you to configure a container that will run as an executable
ENTRYPOINT ["npm", "run"]