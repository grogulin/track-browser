# FROM keymetrics/pm2:latest-stretch
FROM node:slim

# Bundle APP files
COPY . ./

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install
RUN npm run build

# Expose the listening port of your app
EXPOSE 9000

# Show current folder structure in logs
RUN ls -al -R

# CMD [ "pm2-runtime", "start", "./bin/www" ]
# CMD ["npm", "start"]
# CMD ["serve", "-s", "build", "-l", "9000"]
CMD ["node", "server.js"]
