module.exports = {
	dist: {
		options: {
			compress: false
		},
		files: {
			'assets/css/dist/style.css': [
				'assets/css/src/*.styl',
				'assets/css/src/*/*.styl'
			],
			'assets/css/dist/structure/breadcrumbs.css': 'assets/css/src/structure/_breadcrumbs.styl'
		}
	}
}