module.exports = {
	dist: {
		options: {
			compress: false
		},
		files: {
			'assets/css/build/style.css': [
				'assets/css/libs/*/*.styl',
				'assets/css/libs/*.styl'
			],
			'assets/css/build/structure/breadcrumbs.css': 'assets/css/libs/structure/_breadcrumbs.styl'
		}
	}
}