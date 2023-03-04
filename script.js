function calculateTotalTime() {
    var numEpisodes = document.getElementById("num-episodes").value;
    var durationPerEpisode = document.getElementById("duration-per-episode").value;
    var totalTimeMinutes = numEpisodes * durationPerEpisode;
    var totalTimeHours = totalTimeMinutes / 60;
    var totalTimeDays = totalTimeHours / 24;
    var formattedTime = "";
  
    if (totalTimeDays >= 1) {
      formattedTime += Math.floor(totalTimeDays) + " dia(s)";
    } else {
      formattedTime += Math.floor(totalTimeHours) + " hora(s)";
    }
  
    document.getElementById("total-time").innerHTML = "Tempo total para assistir a série: " + formattedTime;
  }
  