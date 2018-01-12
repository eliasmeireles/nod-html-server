var gulp = require('gulp')
	,browserSync = require('browser-sync');

gulp.task('default',  function() {
    gulp.start();
});



//Servidor
gulp.task('server', function() {
	browserSync.init({
		server : {

			/*Set in here where the gulp will finde the index.html*/
			baseDir : 'src/'
		}
	});
});
