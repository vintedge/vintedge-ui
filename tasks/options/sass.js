module.exports = {
	dist: {
		options: {
			// cssmin will minify later
			style: 'expanded'
		},
		files: {
			'assets/css/dist/style.css': 'assets/css/style.scss'
		}
	}
}