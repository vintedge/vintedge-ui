module.exports = {
	options: {
		browsers: ['last 2 version']
	},
	multiple_files: {
		expand: true,
		flatten: true,
		src: 'assets/css/dist/*.css',
		dest: 'assets/css/dist/prefixed/'
	}
}