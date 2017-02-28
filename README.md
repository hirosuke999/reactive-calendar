# README

Simple calendar app build with Facebook React and Ruby on Rails 5

## Ruby version
2.3.1

## Installation

Install node modules.

```
# Excute in HOME/client/
$ npm install
```

Install gem files.

```
# Excute in Home/
$ bundle install
```

## Setup

Modify app.env according to your environment.
```
API_PORT="3000"
API_IP="0.0.0.0"
API_SERVER_NAME="localhost"
APP_PORT="80"
```

## Start

```
# Excute in Home/
$ foreman start -e app.env
```