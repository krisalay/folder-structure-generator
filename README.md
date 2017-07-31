Folder Structure Generator
===================
[![Build Status](https://api.travis-ci.org/krisalay/folder-structure-generator.svg?branch=master)](https://travis-ci.org/krisalay/folder-structure-generator)

folder-structure-generator is a library that can be used to generate the project structure.

You need to provide a json object which defines the hierarchy of the folders and **folder-structure-generator** will generate the appropriate folder structure for your project.

----------


JSON format for folder hierarchy
-------------

    {
		"structure":[
			{
				"name": "config",
				"children": [
					{
						"name": "components",
						"children": []
					},
					{
						"name": "index.js"
					}
				]
			},
			{
				"name": "test",
				"children": []
			},
			{
				"name": "web",
				"children": [
					{
						"name": "middleware",
						"children": []
					},
					{
						"name": "router",
						"children": [
							{
								"name": "api",
								"children": []
							},
							{
								"name": "index.js"
							}

						]
					}
				]
			}
		]
	}



Example
-------------------
Given you are in the folder named `my-project` which contain `structure.json`(defined as above format) and `index.js` files.

In the `index.js` file:

    var structureGenerator = require('folder-structure-generator');
    var jsonStructure = require('./structure.json');
    structureGenerator(jsonStructure);

### Enhancement:
The package can be used globally by the following command.

    dynamo /path/to/structure.json


The response of the following will be:

    + config
    + config/components
    + config/index.js
    + test
    + web
    + web/middleware
    + web/router
    + web/router/index.js
    + web/router/api

Installation
---------------------

    $ npm install folder-structure-generator
    $ npm install -g folder-structure-generator
