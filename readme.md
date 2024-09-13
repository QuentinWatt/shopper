# Shopper

This Shopper repostiory is a demonstration of how multiple front ends can interact with a Laravel API.

## Technology in this repository

- Docker
- Laravel
- React JS
- Next JS

## Get Started

### Clone this repo

Clone with SSH key

```
git clone git@github.com:QuentinWatt/shopper.git shopper
```

Clone with HTTP

```
git clone https://github.com/QuentinWatt/shopper.git shopper
```

### CD into the project

```
cd shopper
```

### Start and build the docker image

```
docker compose up -d --build
```

### Initialize the Laravel API

To make this easy there is an `init.sh` file located in the `shopper-be` directory.

Intended to be run from the project root folder.

```
cd shopper-be && chmod +x ./init.sh && ./init.sh
```

### Initialize the backoffice

To make this easy there is an `init.sh` file located in the `backoffice` directory.

Intended to be run from the project root folder.

```
cd backoffice && chmod +x ./init.sh && ./init.sh
```
