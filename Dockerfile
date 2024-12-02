FROM node:14
WORKDIR /app
COPY . . 
RUN npm install -g http-server
EXPOSE 5500
CMD ["http-server", "-p", "5500"]