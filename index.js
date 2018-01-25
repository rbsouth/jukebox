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
	trackTime(time_display){
		var current_time_minutes = Math.floor(this.audio.currentTime / 60);
		var current_time_seconds = Math.floor(this.audio.currentTime - current_time_minutes * 60);
		var duration_minutes = Math.floor(this.audio.duration / 60);
		var duration_seconds = Math.floor(this.audio.duration - duration_minutes * 60);
		if (current_time_minutes < 10) {
			current_time_minutes = ' ' + current_time_minutes;
		}
		if (current_time_seconds < 10) {
			current_time_seconds = '0' + current_time_seconds;
		}
		time_display.innerHTML = current_time_minutes + ':' + current_time_seconds + ' / ' + duration_minutes + ':' + duration_seconds + '';
		
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

//listen for timeupdate 
var realtime = document.getElementById('realtime')
song.addEventListener('timeupdate', function(){
		jukebox.trackTime(realtime)
})