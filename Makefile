PACKAGE = test
NODEJS = $(if $(shell test -f /usr/bin/nodejs && echo "true"),nodejs,node)

test:
	$(NODEJS) ./node_modules/nodeunit/bin/nodeunit test

lint:
	nodelint --config nodelint.cfg ./app.js ./lib/*.js ./test/*.js

.PHONY: test
