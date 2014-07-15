module.exports = {
	dev: {
		options: {
			engine: 'im'
		},
		files: [{
			expand: true,
			src: ['*.{jpg,gif,png}'],
			cwd: 'assets/img/src/',
			dest: 'assets/img/dist/'
		}]
	}
}