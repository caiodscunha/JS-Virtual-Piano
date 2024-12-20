const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keyCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let volume = 1;

const playTune = async (key) => {
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(()=> {
        clickedKey.classList.remove("active");
    }, 150)

    let audio = new Audio(`src/tunes/${key}.wav`);
    audio.volume = volume;
    audio.play();
};

pianoKeys.forEach((key=>{
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
}))


document.addEventListener("keydown", (key) => {
    if(mapedKeys.includes(key.key)){
        playTune(key.key);
    }
})

const handleVolume = (e) => {
    volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keyCheck.addEventListener("click", showHideKeys);