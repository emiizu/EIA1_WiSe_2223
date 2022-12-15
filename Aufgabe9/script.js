var L09;
(function (L09) {
    let zahl = 0;
    let interval;
    let check = 0;
    let a = new Audio('./Keyboard/a.mp3');
    let af = new Audio('./Keyboard/af.mp3');
    let b = new Audio('./Keyboard/b.mp3');
    let bf = new Audio('./Keyboard/bf.mp3');
    let c = new Audio('./Keyboard/c.mp3');
    let d = new Audio('./Keyboard/d.mp3');
    let df = new Audio('./Keyboard/df.mp3');
    let e = new Audio('./Keyboard/e.mp3');
    let ef = new Audio('./Keyboard/ef.mp3');
    let f = new Audio('./Keyboard/f.mp3');
    let g = new Audio('./Keyboard/g.mp3');
    let gf = new Audio('./Keyboard/gf.mp3');
    let sounds = [
        ("./Keyboard/a.mp3"), ("./Keyboard/af.mp3"), ("./Keyboard/b.mp3"),
        ("./Keyboard/bf.mp3"), ("./Keyboard/c.mp3"), ("./Keyboard/d.mp3"),
        ("./Keyboard/df.mp3"), ("./Keyboard/e.mp3"), ("./Keyboard/ef.mp3"),
        ("./Keyboard/f.mp3"), ("./Keyboard/g.mp3"), ("./Keyboard/gf.mp3")
    ];
    let music = [
        sounds[2], sounds[3], sounds[11], sounds[1], sounds[10],
        sounds[9], sounds[0]
    ];
    function playSample(soundquelle) {
        let sound = new Audio(soundquelle);
        sound.play();
    }
    function song() {
        playSample(music[zahl]);
        zahl += 1;
        if (zahl > (music.length - 1))
            zahl = 0;
    }
    function remix() {
        zahl = Math.round(Math.random() * 9);
        music.push(sounds[zahl]);
    }
    ;
    function playMusic() {
        console.log(check);
        if (check == 0) {
            song();
        }
    }
    function playremix() {
        console.log("test2");
        if (document.getElementById("play").classList.contains("fa-play")) {
            document.getElementById("play").classList.remove("fa-play");
            document.getElementById("play").classList.add("fa-stop");
            interval = setInterval(playMusic, 350);
        }
        else {
            document.getElementById("play").classList.remove("fa-stop");
            document.getElementById("play").classList.add("fa-play");
            clearInterval(interval);
            zahl = 0;
        }
    }
    document.querySelector("#play").addEventListener("click", function () {
        playremix();
    });
    document.querySelector("#remix").addEventListener("click", function () {
        music = [];
        for (let i = 0; i < 9; i++) {
            remix();
        }
        check = 1;
    });
    document.querySelector("#a").addEventListener('click', function () {
        playSample(sounds[0]);
    });
    document.querySelector("#af").addEventListener('click', function () {
        playSample(sounds[1]);
    });
    document.querySelector("#b").addEventListener('click', function () {
        playSample(sounds[2]);
    });
    document.querySelector("#bf").addEventListener('click', function () {
        playSample(sounds[3]);
    });
    document.querySelector("#c").addEventListener('click', function () {
        playSample(sounds[4]);
    });
    document.querySelector("#d").addEventListener('click', function () {
        playSample(sounds[5]);
    });
    document.querySelector("#df").addEventListener('click', function () {
        playSample(sounds[6]);
    });
    document.querySelector("#e").addEventListener('click', function () {
        playSample(sounds[7]);
    });
    document.querySelector("#ef").addEventListener('click', function () {
        playSample(sounds[8]);
    });
    document.querySelector("#f").addEventListener('click', function () {
        playSample(sounds[9]);
    });
    document.querySelector("#g").addEventListener('click', function () {
        playSample(sounds[10]);
    });
    document.querySelector("#gf").addEventListener('click', function () {
        playSample(sounds[11]);
    });
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map