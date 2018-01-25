class Jukebox {
	constructor(audio){
		this.audio = audio;
		this.songs = ['Bye bye bye', '21 guns', '6 foot 7 foot'];
		this.currentSongIndex = 0;
	}
	getSongName(selector){
		selector.innerText = this.songs[this.currentSongIndex];
	}
	setNameInterval(){
		setInterval(this.getSongName, 1000);
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
	skip(selector){
		this.currentSongIndex++;
		this.audio.pause();
		this.audio.setAttribute("src", 'songs/' + this.songs[this.currentSongIndex] + '.mp3');
		//selector.innerText = this.songs[this.currentSongIndex];
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
		if (duration_minutes < 10) {
			duration_minutes = ' ' + duration_minutes;
		}
		if (duration_seconds < 10) {
			duration_seconds = '0' + duration_seconds;
		}
		time_display.innerHTML = current_time_minutes + ':' + current_time_seconds + ' / ' + duration_minutes + ':' + duration_seconds + '';
	}
	//setInterval(this.getSongName, 1000);
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
//var change_header = document.getElementById('header');

skip_song.addEventListener('click', function(){
	jukebox.skip(/*change_header*/);
})

//listen for timeupdate 
var realtime = document.getElementById('realtime')
song.addEventListener('timeupdate', function(){
		jukebox.trackTime(realtime);
})

//change header to song name
var change_header = document.getElementById('header');

// setInterval(jukebox.getSongName, 1000);
jukebox.setNameInterval();
jukebox.getSongName(change_header);
