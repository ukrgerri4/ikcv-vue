# To run project in docker for development
## TODO: figure out about node_modules volume requirements!!!
	1. Run:
		docker-compose -f .\docker-compose.override.yml build
	2. Then:
		docker-compose -f .\docker-compose.override.yml up

# To create production container
	1. Run:
		docker-compose -f .\docker-compose.yml build
	2. Then:
		docker push <image_name>


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
