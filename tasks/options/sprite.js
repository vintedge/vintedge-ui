module.exports = {
	all: {
		src: ['assets/img/sprite/src/*.png'],
		destImg: 'assets/img/sprite/dist/sprite.png',
		destCSS: 'assets/css/src/structure/_sprite.styl',
		engineOpts: { 'imagemagick': true }
	}
}