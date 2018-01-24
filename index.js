class Jukebox {
	constructor(audio){
		this.audio = audio;
		this.songs = ['songs/bye.mp3', 'songs/21-guns.mp3', 'songs/6foot7foot.mp3'];
		this.currentSongIndex = 0;
	}
	play(){
		this.audio.play();
	}
	pause(){
		this.audio.pause();
	}
	stop(){
		this.audio.pause();
		this.audio.currentTime = 0;
	}
	skip(){
		this.currentSongIndex++;
		this.audio.pause();
		this.audio.setAttribute("src", this.songs[this.currentSongIndex]);
		this.audio.play();
	}
}

var song = document.getElementById('song');
var jukebox = new Jukebox(song);
var play_song = document.getElementById('play-button');

play_song.addEventListener('click', function(){
	jukebox.play();
})

var pause_song = document.getElementById('pause-button');

pause_song.addEventListener('click', function(){
	jukebox.pause();
})

var stop_song = document.getElementById('stop-button');

stop_song.addEventListener('click', function(){
	jukebox.stop();
})

var skip_song = document.getElementById('skip-button');

skip_song.addEventListener('click', function(){
	jukebox.skip();
})
