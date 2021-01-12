import MediaPlayer, { foo } from "@jzamora5/mediaplayer";
import AutoPlay from "@jzamora5/mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@jzamora5/mediaplayer/lib/plugins/AutoPause";
import Ads from "@jzamora5/mediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("button");
const buttonMute: HTMLElement = document.querySelector("#mute");

// class MediaPlayerClass {
//   constructor(config) {
//     this.media = config.el;
//   }

//   play() {
//     this.media.play();
//   }

//   pause() {
//     this.media.pause();
//   }
// }

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});
//   const player = new MediaPlayerClass({ el: video });
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
console.log(foo);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../sw.js").catch((error) => {
    console.log(error.message);
  });
}
