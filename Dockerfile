FROM node:20.14.0 AS demo-build
WORKDIR /app
COPY . .
RUN npm install -g @angular/cli@17
RUN yarn install
RUN ng build

FROM nginx:latest
RUN rm /usr/share/nginx/html/*.html
WORKDIR /usr/share/nginx/html/
COPY --from=demo-build /app/dist/chat-see/browser .