module.exports = {
	myTask: {
		options: {},
		files: [{
			expand: true,
			src: ['assets/img/**/*.{jpg,gif,png}'],
			cwd: 'src/',
			dest: 'dist/'
		}]
	}
}