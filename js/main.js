/**
 * Created by LtaS on 27.12.2015.
 */
// Can also be used with $(document).ready()
// slider
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});
//button play on video
document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);
var mediaPlayer;
function initialiseMediaPlayer() {
    mediaPlayer = document.getElementById('media-video');
    mediaPlayer.controls = false;
}
function togglePlayPause() {
    var btn = document.getElementById('play-pause-button');
    if (mediaPlayer.paused || mediaPlayer.ended) {
        btn.style.display = 'none';
        mediaPlayer.play();
        mediaPlayer.controls = true;
    }
}