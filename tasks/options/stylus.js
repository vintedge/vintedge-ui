module.exports = {
	dist: {
		options: {
			compress: false
		},
		files: {
			'assets/css/dist/style.css': [
				'assets/css/src/style.styl',
				'assets/css/src/structure/*.styl'
			]
		}
	}
}