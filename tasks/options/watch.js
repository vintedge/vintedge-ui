module.exports = {
	options: {
		livereload: true,
	},
	scripts: {
		files: ['assets/js/src/plugins/*.js', 'assets/js/src/*.js'],
		tasks: ['jshint', 'concat', 'uglify', 'usebanner'],
		options: {
			spawn: false,
		}
	},
	css: {
		files: ['assets/css/src/plugins/*.css' , 'assets/css/src/*/*.styl', 'assets/css/src/*.styl'],
		tasks: ['stylus', 'styleguide', 'cssmin', 'usebanner'],// 'autoprefixer'
		options: {
			spawn: false,
		}
	},
	images: {
		files: ['assets/img/**/*.{png,jpg,gif}', 'assets/img/*.{png,jpg,gif}'],
		tasks: ['imagemin'],
		options: {
			spawn: false,
		}
	},
	//svg: {
		//files: ['assets/img/**/*.{svg}', 'assets/img/*.{png,jpg,gif}'],
		//tasks: ['imagemin'],
		//options: {
			//spawn: false,
		//}
	//},
	html:{
		files: ['./**/*.html'],
		tasks: [],
		options: {
			spawn: false
		}
	}
}