FROM node:14-alpine as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG configuration=production
ARG basehref=/

COPY package.* ./
RUN npm install

COPY . ./
RUN npm run ng build -- --prod

CMD ['tar', '-czf', 'dist.tar.gz', './dist']

# FROM nginx:stable-alpine as prod-stage
# COPY --from=build-stage /usr/src/app/dist /var/www/
# COPY --from=build-stage /usr/src/app/dist.tar.gz /var/www/
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
