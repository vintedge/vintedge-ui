module.exports = {
	all: {
		src: ['assets/img/sprite/libs/*.png'],
		destImg: 'assets/img/sprite/build/sprite.png',
		destCSS: 'assets/css/libs/structure/_sprite.styl',
		engineOpts: { 'imagemagick': true }
	}
}