FROM node:10

COPY ["package.json", "package-lock.json", "/usr/src/"]
# [<ubicacion de los archivos a copiar>, <destino donde van a quedar los archivos copiados>]
WORKDIR /usr/src
# es similar al comando cd, WORKDIR <entrar en la siguiente ruta> 
RUN npm install

RUN npm install -g express
# RUN ejecuta el comando npm install 
COPY [".", "/usr/src/"]
# [<ubicacion de los archivos a copiar>, <destino donde van a quedar los archivos copiados>]
EXPOSE 3000
# le indica al contenedor el puerto por el cual va a salir o exponer el contenedor, es el mismo puerto por donde esta escuchando node
CMD ["npx", "nodemon", "index.js"]
# ejecuta el comando node index.js el cual levanta el servidor de express
# npx es una herramienta de cli que nos permite ejecutar paquetes de npm de forma mucho más sencilla
# nodemon es el paquete que nos va apermitir bajr y subir el server de manera automatica apenas exita un cambio en los archivos
# index.js es el archivo que levanta el servidor de express