(
  function () 
 {
    function playMusic() 
    {
        var myAudio = document.getElementById('playAudio');
        if (myAudio.duration > 0 && !myAudio.paused) 
        {
            // It's playing...do your job
        } else {
            myAudio.play();
            // Not playing...maybe paused, stopped, or never played.
        }
    }
)
