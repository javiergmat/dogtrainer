# Use official Nginx Alpine image
FROM --platform=linux/amd64 nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Copy website files
COPY index.html .
COPY styles.css .
COPY scripts.js .

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set correct permissions
RUN chmod -R 755 /usr/share/nginx/html && \
    mkdir -p /var/cache/nginx /var/run && \
    chmod 777 /var/cache/nginx /var/run

# Expose port 8080 (required by Cloud Run)
EXPOSE 8080

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]