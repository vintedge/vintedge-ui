module.exports = {
	options: {
		browsers: ['last 2 version']
	},
	multiple_files: {
		expand: true,
		flatten: true,
		src: 'assets/css/build/*.css',
		dest: 'assets/css/build/prefixed/'
	}
}