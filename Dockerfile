FROM nginx:alpine

COPY dist/art-radio-ui-v2.0 /usr/share/nginx/html

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Add a custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
#CMD ["nginx", "-s", "reload"]

