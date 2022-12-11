namespace L09 {
    let zahl: number = 0;
    let interval: number;
    let check: number = 0;
    
    let a:HTMLAudioElement = new Audio('./Keyboard/a.mp3');
    let af:HTMLAudioElement = new Audio('./Keyboard/af.mp3');
    let b:HTMLAudioElement = new Audio('./Keyboard/b.mp3');
    let bf:HTMLAudioElement = new Audio('./Keyboard/bf.mp3');
    let c:HTMLAudioElement = new Audio('./Keyboard/c.mp3');
    let d:HTMLAudioElement = new Audio('./Keyboard/d.mp3');
    let df:HTMLAudioElement = new Audio('./Keyboard/df.mp3');
    let e:HTMLAudioElement = new Audio('./Keyboard/e.mp3');
    let ef:HTMLAudioElement = new Audio('./Keyboard/ef.mp3');
    let f:HTMLAudioElement = new Audio('./Keyboard/f.mp3');
    let g:HTMLAudioElement = new Audio('./Keyboard/g.mp3');
    let gf:HTMLAudioElement = new Audio('./Keyboard/gf.mp3');
    
    let sounds: string [] = [
        ("./Keyboard/a.mp3"),("./Keyboard/af.mp3"),("./Keyboard/b.mp3"),
        ("./Keyboard/bf.mp3"),("./Keyboard/c.mp3"),("./Keyboard/d.mp3"),
        ("./Keyboard/df.mp3"),("./Keyboard/e.mp3"),("./Keyboard/ef.mp3"),
        ("./Keyboard/f.mp3"),("./Keyboard/g.mp3"),("./Keyboard/gf.mp3")];
        
        let music: string [] = [
            sounds[2], sounds[3], sounds[11], sounds[1], sounds[10],
            sounds[9], sounds[0]
        ];
    
    
    
    
    
    function playSample (soundquelle:string){
        let sound: HTMLAudioElement = new Audio(soundquelle);
        sound.play()
    }
    
    function song (){
        
        playSample(music[zahl]);
        zahl += 1;
        if (zahl > (music.length - 1))
        zahl - 0;
        
        
         
    }
    
    function remix (){
        playSample(music[zahl]);
        zahl = Math.round(Math.random()*9);
        
    };
    
    
    
    function playMusic(){
        if (check ==0) {
            song();
        
    }
    else {
        remix()
    }
    }
    
    function playremix(){
    
    if (document.getElementById("play").classList.contains("fa-play")){
        document.getElementById("play").classList.remove("fa-play");
        document.getElementById("play").classList.add("fa-stop");
        interval= setInterval(playMusic, 350);
    
    
    }
    else {
        document.getElementById("play").classList.remove("fa-stop");
        document.getElementById("play").classList.add("fa-play");
        clearInterval(interval);
        zahl=0;
    }
    
    
    }
    
    document.querySelector("#play").addEventListener("click",
        playremix);
    
    
    document.querySelector("#remix").addEventListener("click", function(){remix();
        check=1
    });
    
    document.querySelector("#a").addEventListener('click', function() {
        playSample(sounds[0])
    })
    
    document.querySelector("#af").addEventListener('click', function() {
        playSample(sounds[1])
    })
    
    document.querySelector("#b").addEventListener('click', function() {
        playSample(sounds[2])
    })
    
    document.querySelector("#bf").addEventListener('click', function() {
        playSample(sounds[3])
    })
    
     document.querySelector("#c").addEventListener('click', function() {
        playSample(sounds[4])
    })
    
    document.querySelector("#d").addEventListener('click', function() {
        playSample(sounds[5])
    })
    
    document.querySelector("#df").addEventListener('click', function() {
        playSample(sounds[6])
    })
    
    document.querySelector("#e").addEventListener('click', function() {
        playSample(sounds[7])
    })
    
    document.querySelector("#ef").addEventListener('click', function() {
        playSample(sounds[8])
    })
    
    document.querySelector("#f").addEventListener('click', function() {
        playSample(sounds[9])
    })
    
    document.querySelector("#g").addEventListener('click', function() {
        playSample(sounds[10])
    })
    
    document.querySelector("#gf").addEventListener('click', function() {
        playSample(sounds[11])
    })
    
}   