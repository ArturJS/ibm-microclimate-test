FROM node:8.15.1-slim
RUN apt-get update && apt-get install -y bash git openssl curl sudo
WORKDIR /nodejs-hello-app
RUN echo '%sudo ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    echo '%node ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers && \
    chown -R node:node . /nodejs-hello-app
USER node
COPY --chown=node:node . /nodejs-hello-app
EXPOSE 8080
ENTRYPOINT [ "node", "server.js" ]
