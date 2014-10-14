module.exports = {
	options: {
		livereload: true,
	},
	scripts: {
		files: ['assets/js/src/script.js'],
		tasks: ['jshint'],
		options: {
			spawn: false,
		}
	},
	css: {
		files: ['assets/css/src/structure/*.styl', 'assets/css/src/plugins/*.css' , 'assets/css/src/style.styl'],
		tasks: ['stylus'],
		options: {
			spawn: false,
		}
	},
	images: {
		files: ['assets/img/src/*.{png,jpg,gif}'],
		tasks: ['imagemin'],
		options: {
			spawn: false,
		}
	},
	html: {
		files: ['*.html','*.php'],
		options: {
			spawn: false,
		}
	}
}