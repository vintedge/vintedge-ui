module.exports = {
	options: {
		livereload: true,
	},
	scripts: {
		files: ['assets/js/src/vendor/*.js', 'assets/js/src/*.js'],
		tasks: ['jshint', 'concat', 'uglify', 'usebanner'],
		options: {
			spawn: false,
		}
	},
	css: {
		files: ['assets/css/src/*/*.styl', 'assets/css/src/*.styl'],
		tasks: ['stylus', 'styleguide', 'cssmin', 'usebanner'],// 'autoprefixer'
		options: {
			spawn: false,
		}
	},
	images: {
		files: ['assets/images/**/*.{png,jpg,gif}', 'assets/images/*.{png,jpg,gif}'],
		tasks: ['imagemin'],
		options: {
			spawn: false,
		}
	},
	html:{
		files: ['./**/*.html'],
		tasks: [],
		options: {
			spawn: false
		}
	}
}