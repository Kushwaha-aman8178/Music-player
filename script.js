var audioElement = new Audio("songs/1.mp3");
var masterplay = document.getElementById("masterplay");
var progressBar = document.getElementById("range-vol");
var gif = document.getElementById("gif");
var songItems = Array.from(document.getElementsByClassName("songs"));
let songIndex = 0;
// for play and pause click

let songs = [
  {
    songName: "Let me Love You",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Shape of You",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "See you again",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Sorry for Late",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Uptown Funk",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Blinding Lights",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Head & Heart",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Little bit of love",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
];

songItems.forEach((element, i) => {
  //console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("song-name")[0].innerText = songs[i].songName;
});

masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// for updating progressBar

audioElement.addEventListener("timeupdate", () => {
  var progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );

  progressBar.value = progress;
});

progressBar.addEventListener("change", () => {
  audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      songIndex = parseInt(e.target.id);
      makeAllPlays();

      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.play();
      audioElement.currentTime = 0;
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 8;
  } else {
    songIndex -= 1;
  }

  makeAllPlays();
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.play();
  audioElement.currentTime = 0;
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-pause-circle");
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 8) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }

  makeAllPlays();
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.play();
  audioElement.currentTime = 0;
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-pause-circle");
});
