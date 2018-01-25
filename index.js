class Jukebox {
	constructor(audio){
		this.audio = audio;
		this.songs = ['Bye bye bye', '21 guns', '6 foot 7 foot'];
		this.currentSongIndex = 0;
	}
	getSongName(){
		for (var i = 0; i < this.songs.length; i++) {
			return this.songs[this.currentSongIndex];
		}
	}
	playSong(){
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
		this.audio.setAttribute("src", 'songs/' + this.songs[this.currentSongIndex] + '.mp3');
		this.playSong();
	}
	trackTime(){
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
		return current_time_minutes + ':' + current_time_seconds + ' / ' + duration_minutes + ':' + duration_seconds + '';
	}
}

var $song = $('#song');
var jukebox = new Jukebox($song[0]);

var $play_song = $('#play-button');

$play_song.click(function(){
	jukebox.playSong();
});

var $pause_song = $('#pause-button');

$pause_song.click(function(){
	jukebox.pause();
});

var $stop_song = $('#stop-button');

$stop_song.click(function(){
	jukebox.stop();
});

var $skip_song = $('#skip-button');
var $change_header = $('#header');

$skip_song.click(function(){
	jukebox.skip($change_header);
});

//listen for timeupdate 
var $realtime = $('#realtime')

$song.on('timeupdate', function(){
		$realtime.text(jukebox.trackTime());
});

//change header to song name
var $change_header = $('#header');

$song.on('play', function(){
	$change_header.text(jukebox.getSongName());
});