# path:  .docker/Dockerfile

FROM node:20

# Set workdir
WORKDIR /usr/src/app

# Place package*.json from root inside workdir

COPY ../package*.json ./
# Run NPM INSTALL in owrkdir
RUN npm install

COPY ../. .

RUN npm run build

EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]