module.exports = {
	"extends"      : "eslint:recommended",
	"parserOptions": {
		"sourceType" : "module",
		"ecmaVersion": 6
	},
	"env"          : {
		"browser": true,
		"es6"    : true
	},
	"rules"        : {
		"semi": ["warn", "always"],
	}
};