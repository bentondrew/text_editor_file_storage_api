FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
RUN npm install npm -g && \
    npm install
COPY src/ src/
EXPOSE 80
ENTRYPOINT ["npm"]
CMD ["start"]
