# Deploy React Web App on Azure App Service
 
A minimal version of react app to get started deploying on Azure Web service.

For Heroku version getting started, see
 - [Single container: heroku-docker-react-starter](https://github.com/ray-chunkit-chung/heroku-docker-react-starter)

For an advanced version, see
 - [Single container: azure-docker-react-advanced](https://github.com/ray-chunkit-chung/azure-docker-react-advanced)


# Getting started

1. git clone this repo
2. Build dockerfile to your dockerhub account
2.1 In VSCode, right click Dockerfile > build image >> Name your image: ${dockerhub_id}/${image_name}
2.2 In VSCode, right click the image > Push >> Enter ${dockerhub_id}
3. Create new app service in azure to pull from your dockerhub

These steps may incur $$$. DYOR. :smiley:

![image](https://user-images.githubusercontent.com/26511618/157792178-92f7296e-fda4-432d-a1bf-170206e7f909.png)



# Dev on local
Use dev setting for dev
```
docker-compose up -d --remove-orphans --build
```

Used some setting from here
https://github.com/karanpratapsingh/tutorials/tree/master/react



# How to run minimal docker tbh?

A minimal tutorial coming soon...
