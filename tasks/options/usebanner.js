module.exports = {
	css: {
		options: {
			banner: '/*!\n' +
				' * <%= pkg.name %>\n' +
				' * v<%= pkg.version %>\n' +
				' * <%= grunt.template.today("dd-mm-yyyy") %>\n' +
				' * <%= pkg.homepage %>\n' +
				//' * Licensed under MIT (<%= _.pluck(pkg.licenses, "url").join(", ") %>)\n' +
				' */\n\n'
		},
		files: {
			src: ['assets/css/dist/style.min.css']
		}
	},
	js: {
		options: {
			banner: '/*!\n' +
				' * <%= pkg.name %>\n' +
				' * v<%= pkg.version %>\n' +
				' * <%= grunt.template.today("dd-mm-yyyy") %>\n' +
				' * <%= pkg.homepage %>\n' +
				//' * Licensed under MIT (<%= _.pluck(pkg.licenses, "url").join(", ") %>)\n' +
				' */\n\n'
		},
		files: {
			src: ['assets/js/dist/script.min.js']
		}
	}
}