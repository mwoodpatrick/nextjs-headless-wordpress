## 🎨 Next.js Headless WordPress
[![Project Status: Active.](https://www.repostatus.org/badges/latest/active.svg)](https://www.repostatus.org/#active)
![Stars](https://img.shields.io/github/stars/imranhsayed/nextjs-headless-wordpress?label=%E2%AD%90%20Stars)
![Forks](https://img.shields.io/github/forks/imranhsayed/nextjs-headless-wordpress?color=%23ff69b4)
![Contributors](https://img.shields.io/github/contributors/imranhsayed/nextjs-headless-wordpress?color=blue)
![Follow](https://img.shields.io/github/followers/imranhsayed?label=Please%20follow%20%20to%20support%20my%20work%20%F0%9F%99%8F&style=social)

- Headless WordPress, using Decoupled Architecture in Next.js
- Backend in WordPress using WPGraphQL
- Front end in React.

## Features

1. Home Page, Blog Page, Post Page
2. Post Preview
3. Post Pagination.
4. Load More Posts.
5. SEO Component fetching data Yoast SEO with schema
6. Cypress for tests, Eslint for linting.
7. Apollo Client with GraphQL
8. Api endpoints.
9. Header and Footer in Next.js fetching from WordPress Menu items.
10. WordPress Widgets displayed on Next.js frontend.
11. Site title, tagline, copyright text, sourced from WordPress.
12. Next.js Image component, that has image optimization at request time.
13. Authentication with JWT and Http Only Cookie implementation.
14. Login feature for WP Post Preview in Next.js
15. Incremental Static (Re)generation and automatic creation of New Static post pages 
without having to re-build next.js the application. 
14. Gutenberg styles support

## [Live Demo Link](https://nextjs-headless-wordpress-demo.vercel.app/)
https://nextjs-headless-wordpress-demo.vercel.app/

![](demo/demo.gif)

## Setup



**One command project setup**

The below command is going to set up the project in the interactive mode.
It creates an .env file for front-end next.js project and setsup up frontend and/or backend.
Run this from the root of the project.

```bash
./nxtwp configure
```
It's going to ask you a few of questions.

```bash
Q1. Do you already have a WordPress setup that you want to continue with? [y/n]:
```
*Answer*

`y`: If you would like to use this project's WordPress Docker setup ( In which case make sure to install and active all plugins from [backend/plugins-collection])
`n`: If you want to use your own WordPress setup.

```bash
Q2. ✍️  What is your WP backend URL? (defaults to http://localhost:8020): 
```
Leave it blank if you would like to use this project's WordPress Docker setup,
else enter your own WordPress site URL.

```bash
✍️  What is your frontend next js URL? (defaults to http://localhost:3000):
```
Leave this blank for development, as it will be the same as default for next.js

```bash
✍️  What is your Disqus comments shortname? (leave blank if you are not using): 
```

Leave this blank if you are not going to use the Disqus comments, else enter your Disqus comments shortname.

This is going to automatically:
- Creates the `.env` file in the frontend directory.
- Setup WordPress backend with all the plugins via composer (if you chose y for the first question)
- Install npm packages for next.js frontend and start development server.

**WordPress Backend** will be available on [http://localhost:8020](http://localhost:8020)
**Next.js Backend** will be available on port [http://localhost:3000](http://localhost:3000)
 
* Make sure to activate all plugins that it has installed via composer.
* Update block registry by going to WordPress Dashboard > GraphQL Gutenberg. 
* Update the permalink by going to Settings > Permalinks > Post name > Save
* Copy the backend/wordpress/.htaccess file content into your WordPress .htaccess
* For more information checkout the project [Wiki](https://github.com/imranhsayed/nextjs-headless-wordpress/wiki/)

That's it!

### During development

Useful commands:
To be run from the root of the project.

```bash
./nxtwp configure       # Sets up backend and frontend and creates an .env file
./nxtwp start-all       # Creates and starts docker environment for WP and runs Next JS server
./nxtwp start-backend   # Creates and starts docker environment
./nxtwp start-frontend  # Installs all packages and Runs Next JS server
./nxtwp stop            # Stops the WordPress docker containers
```

## Debugging

1. If you get 404 on frontend for graphql request, check to see that the `.htaccess` file in wordpress directory has the rules

```shell script
# BEGIN WordPress
# The directives (lines) between "BEGIN WordPress" and "END WordPress" are
# dynamically generated, and should only be modified via WordPress filters.
# Any changes to the directives between these markers will be overwritten.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

2. If front-end is throwing some other error.

- Check if all the required WordPress plugins form `backend/plugins-collection` are active.
- Ensure you have updated the block registry from WordPress backend > GraphQL Gutenberg 
- Ensure that `.env` file has correct env variables and their values in `frontend/.env`

## [Tutorial Course](https://codeytek.com/course/next-js-headless-wordpress-course/)
Code for the tutorial is in the [Tutorial Branch](https://github.com/imranhsayed/nextjs-headless-wordpress/tree/feature/youtube-tutorial)


Tutorial|Video|Commit
------------ | -------------|------
[Docker WordPress Tutorial](#docker-wordpress-tutorial)|[21:27](https://www.youtube.com/watch?v=lQo9L3bk1J4)|[036e893](https://github.com/imranhsayed/nextjs-headless-wordpress/commit/036e89334c38c0ce7bc56dcbe988998e6cacf580)
[Docker Containers](#docker-containers)|[13:42](https://www.youtube.com/watch?v=tJb5HjUuQzE)|[commitId](https://github.com/commitId)
[Setup Next.js from scratch](#setup-nextjs-from-scratch)|[14:13](https://www.youtube.com/watch?v=OPEyP6EDUOk)|[commitId](https://github.com/commitId)
[Add TailwindCSS to a Next.JS Application](#add-tailwindcss-to-a-nextjs-application)|[13:31](https://www.youtube.com/watch?v=o6nuaf8zKvg)|[commitId](https://github.com/commitId)
[Setup Apollo GraphQL Next.js](#setup-apollo-graphql-nextjs)|[9:55](https://www.youtube.com/watch?v=XRQqiGVyvj0)|[commitId](https://github.com/commitId)
[Fetch Menus with GraphQL](#fetch-menus-with-graphql)|[13:21](https://www.youtube.com/watch?v=QZA51PwSF7w)|[commitId](https://github.com/commitId)
[getStaticProps Next.js](#getstaticprops-nextjs)|[8:03](https://www.youtube.com/watch?v=Tnghi0bglT4)|[commitId](https://github.com/commitId)
[Display WordPress Menus in Next.js via GraphQL](#display-wordpress-menus-in-nextjs-via-graphql)|[18:32](https://www.youtube.com/watch?v=lCGTj9y7I80)|[commitId](https://github.com/commitId)
[Incremental Static Regeneration Next.js](#incremental-static-regeneration-nextjs)|[13:31](https://www.youtube.com/watch?v=1AytR6POwUA)|[commitId](https://github.com/commitId)
[Next.js navigation bar](#nextjs-navigation-bar)|[3:39](https://www.youtube.com/watch?v=xfF3Tyf3zBc)|[commitId](https://github.com/commitId)
[Next.js Site title](#nextjs-site-title)|[14:41](https://www.youtube.com/watch?v=Mj9QjPUiIOI)|[commitId](https://github.com/commitId)
[How to add a favicon to a Next.js static site](#how-to-add-a-favicon-to-a-nextjs-static-site)|[3:05](https://www.youtube.com/watch?v=mqPp-WBMR-4)|[commitId](https://github.com/commitId)
[Next.js Widgets](#nextjs-widgets)|[16:11](https://www.youtube.com/watch?v=3nJ6PCxY1n8)|[commitId](https://github.com/commitId)
[Next.js Social Links with SVG](#nextjs-social-links-with-svg)|[14:38](https://www.youtube.com/watch?v=XIEqK2WWhcE)|[commitId](https://github.com/commitId)
[Next.js getStaticProps](#nextjs-getstaticprops)|[26:23](https://www.youtube.com/watch?v=eNcf-nNGR-w)|[commitId](https://github.com/commitId)
[WPGraphQL Yoast SEO Schema Next.js](#wpgraphql-yoast-seo-schema-nextjs)|[22:23](https://www.youtube.com/watch?v=36CkwVOWJ68)|[commitId](https://github.com/commitId)
[Using Cypress with Next.js End to End testing](#using-cypress-with-nextjs-end-to-end-testing)|[23:01](https://www.youtube.com/watch?v=uWdr8MO1HEE)|[commitId](https://github.com/commitId)
[Making a custom  page in Next.js](#making-a-custom--page-in-nextjs)|[9:53](https://www.youtube.com/watch?v=WLkHlJ7qTw0)|[commitId](https://github.com/commitId)
[Blocking Fallback for getStaticPaths in Next.js](#blocking-fallback-for-getstaticpaths-in-nextjs)|[11:34](https://www.youtube.com/watch?v=6HTh9M0ohsw)|[commitId](https://github.com/commitId)
[Next.JS + Wordpress Preview](#nextjs-+-wordpress-preview)|[4:35](https://www.youtube.com/watch?v=fKpyl5XvD34)|[commitId](https://github.com/commitId)
[Next.js Authentication JWT](#nextjs-authentication-jwt)|[5:58](https://www.youtube.com/watch?v=9ZkFubM3jqY)|[commitId](https://github.com/commitId)
[Advanced Features: Preview Mode](#advanced-features-preview-mode)|[6:20](https://www.youtube.com/watch?v=UaWSboXn0-8)|[commitId](https://github.com/commitId)
[Logging with JWT](#logging-with-jwt)|[17:14](https://www.youtube.com/watch?v=kTvCMFjwMvE)|[commitId](https://github.com/commitId)
[Post Preview](#post-preview)|[10:23](https://www.youtube.com/watch?v=rZuKUaUyAVE)|[commitId](https://github.com/commitId)
[Page Preview](#page-preview)|[7:22](https://www.youtube.com/watch?v=ryf21JEkvkI)|[commitId](https://github.com/commitId)
[Page Based Pagination](#page-based-pagination)|[8:18](https://www.youtube.com/watch?v=3wzwmuGwpxc)|[commitId](https://github.com/commitId)

### Docker WordPress Tutorial

Learn about how to setup Headless WordPress with Docker mysql phpmyadmin for a backend to Next.js: 

First clone/fork the repo and cd into it.

```bash
git clone https://github.com/imranhsayed/nextjs-headless-wordpress.git
cd nextjs-headless-wordpress
```

- Install Docker from [docs.docker.com/get-docker](https://docs.docker.com/get-docker/) ( this step may not be required if you are using your own WordPress setup.)

#### [Backend](https://github.com/imranhsayed/nextjs-headless-wordpress/tree/master/backend)
Run this from root
```bash
docker-compose -f backend/docker-compose.yml up -d 
```
- Make sure to set Home Page as Front page from WordPress dashboard > Customize > Homepage Settings.
*WordPress Backend* will be available on [http://localhost:8020](http://localhost:8020)

*[phpMyAdmin](https://github.com/phpmyadmin/phpmyadmin)*: You can access php myadmin on [http://localhost:8183](http://localhost:8183)
```shell script
port: mysql:3306
username: root
password: root
``` 

phpmyadmin docker image already comes with the username `root` and we have set the mysql password in the dockerfile

* If you happen to use your own WordPress setup, be sure to install and activate plugins from composer.json 

This course requires the following plugin extensions:

* [WPGraphQL](https://github.com/wp-graphql/wp-graphql) is a free, open-source WordPress plugin that provides an extendable GraphQL schema and API for any WordPress site.
* [WPGraphQL JWT Authentication](https://github.com/wp-graphql/wp-graphql-jwt-authentication) extends the WPGraphQL plugin to provide authentication using JWT (JSON Web Tokens)
* [WPGraphQL Gutenberg](https://github.com/pristas-peter/wp-graphql-gutenberg) allows you to query gutenberg blocks through wp-graphql
* [Advanced Custom Fields](https://www.advancedcustomfields.com/) allows you to take full control of your WordPress edit screens & custom field data.
* [Headless CMS](https://github.com/imranhsayed/headless-cms) adds features to use WordPress as a headless CMS with any front-end environment using REST API
* [Yoast SEO](https://yoast.com/wordpress/plugins/seo/#utm_source=yoast-seo&utm_medium=software&utm_campaign=wordpress-general) help you rank higher in search engines.
* [WPGraphQL Yoast SEO](https://github.com/ashhitch/wp-graphql-yoast-seo) extends the [WPGraphQL](https://github.com/wp-graphql/wp-graphql) plugin to returns Yoast SEO data.
* [WPGraphQL Offset Pagination](https://github.com/valu-digital/wp-graphql-offset-pagination) adds traditional offset pagination support to WPGraphQL.

It's very simple to setup the project with just one command and this `./nxtwp configure`

### Docker Containers

Learn about Accessing MySQL & WordPress docker containers for a Next.js Headless WordPress.



### Setup Next.js from scratch

### Add TailwindCSS to a Next.JS Application

### Setup Apollo GraphQL Next.js

### Fetch Menus with GraphQL

### getStaticProps Next.js

### Display WordPress Menus in Next.js via GraphQL

### Incremental Static Regeneration Next.js

### Next.js navigation bar

### Next.js Site title

### How to add a favicon to a Next.js static site

### Next.js Widgets

### Next.js Social Links with SVG

### Next.js getStaticProps

### WPGraphQL Yoast SEO Schema Next.js

### Using Cypress with Next.js End to End testing

### Making a custom  page in Next.js

### Blocking Fallback for getStaticPaths in Next.js

### Next.JS + Wordpress Preview

### Next.js Authentication JWT

### Advanced Features: Preview Mode

### Logging with JWT

### Post Preview

### Page Preview

### Page Based Pagination




and add your own WordPress site URL
in an .env file, You can check the .env-example file for reference.

## [Frontend](https://github.com/imranhsayed/nextjs-headless-wordpress/tree/master/frontend)
Run this from root for the first time.
```bash
cd frontend; npm i && npm run dev
```

### During development
```bash
cd frontend; npm run dev
```

Frontend will be available on port [http://localhost:3000](http://localhost:3000)

### Evironment vars. 
Create a `.env` file taking reference from `.env-example` inside frontend directory and add your WordPress Site URL ( for local development put `http://localhost:8020` as your WordPress URL)

## Development ( Developers only )

1. When we change the composer.json, run from root
```shell script
docker-compose -f backend/docker-compose.yml down && \
docker-compose -f backend/docker-compose.yml up -d 
```

First line command will stops and removes all the docker containers and second line command will restart all containers.
Notice that `-d` is to run in detach mode and you can always remove that flag, and run the command so you can see the live logs.
Or you can check the logs for 

2. Check the logs
While the above command is running in detached mode ( -d ), you can run this command in a new terminal tab to see the live logs.
```shell script
docker logs -f container-name
```

3. Login to SSH and wp cli.
```
docker exec -it image-name bash // e.g. docker exec -it backend_wordpress_1 bash
wp
```

e.g.
```bash
docker container ls
```

#### result
```shell script
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS                  NAMES
d0b4a3b0074f        wordpress:latest    "docker-entrypoint.s…"   About a minute ago   Up About a minute   0.0.0.0:8000->80/tcp   backend_wordpress_1
aad078ebe131        mysql:5.7           "docker-entrypoint.s…"   About a minute ago   Up About a minute   3306/tcp, 33060/tcp    backend_db_1
```
Here container-name is `backend_db_1` or `backend_wordpress_1`

3. If you make changes to docker-compose.yml file, run the following:

If you happend to change the port in `docker-compose.yml` make sure to delete the `db` directory and then run below.

```shell script
docker-compose -f backend/docker-compose.yml down && \
docker-compose -f backend/docker-compose.yml up -d
```

## Debugging

1. If you get 404 on frontend for graphql request, check to see that the .htaccess file in wordpress directory has the rules

```shell script
# BEGIN WordPress
# The directives (lines) between "BEGIN WordPress" and "END WordPress" are
# dynamically generated, and should only be modified via WordPress filters.
# Any changes to the directives between these markers will be overwritten.
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

## References for Docker Images.

1. [phpMyAdmin](https://github.com/fuadajip/dockercompose-mysql-phpmyadmin/blob/master/docker-compose.yml)


