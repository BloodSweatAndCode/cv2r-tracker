module.exports = {
	'env': {
		'commonjs': true,
		'es6': true,
		'node': true,
		'browser': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
		'$': 'readonly'
	},
	'parserOptions': {
		'ecmaVersion': 2018
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'quotes': [
			'error',
			'single',
			{ 'avoidEscape': true }
		],
		'semi': [
			'error',
			'always'
		],
		'space-infix-ops': [
			'error'
		],
		'space-before-blocks': [
			'error'
		],
		'eqeqeq': [
			'error',
			'smart'
		],
		'no-trailing-spaces': [ 'error' ],
		'no-irregular-whitespace': [ 'error' ],
		'no-multi-spaces': [ 'error', { 'ignoreEOLComments': true } ],
		'spaced-comment': [ 'error', 'always' ]
	}
};
