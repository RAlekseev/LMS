FROM php:8.0-fpm

RUN apt-get update \
    && docker-php-ext-install pdo pdo_mysql

RUN apt-get update && apt-get install -y --fix-missing \
    apt-utils \
    gnupg


ADD php.ini /usr/local/etc/php/conf.d/uploads.ini


