function styleW() {
    let letterW = document.querySelector("audio.keyW")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterW.currentTime = 0;
    letterW.play()
    //método .play() é um método de audio tag element principalmente parece
    //document.querySelector("audio.keyW").play()

    document.getElementById("W").classList.remove("letter")
    document.getElementById("W").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("W").classList.remove("buttonHover")
        document.getElementById("W").classList.add("letter")
    }
}
function styleQ() {
    let letterQ = document.querySelector("audio.keyQ")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterQ.currentTime = 0;
    letterQ.play()
    document.getElementById("Q").classList.remove("letter")
    document.getElementById("Q").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("Q").classList.remove("buttonHover")
        document.getElementById("Q").classList.add("letter")
    }
}
function styleE() {
    let letterE = document.querySelector("audio.keyE")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterE.currentTime = 0;
    letterE.play()
    document.getElementById("E").classList.remove("letter")
    document.getElementById("E").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("E").classList.remove("buttonHover")
        document.getElementById("E").classList.add("letter")
    }
}
function styleA() {

    let letterA = document.querySelector("audio.keyA")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterA.currentTime = 0;
    letterA.play()
    document.getElementById("A").classList.remove("letter")
    document.getElementById("A").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("A").classList.remove("buttonHover")
        document.getElementById("A").classList.add("letter")
    }
}
function styleS() {
    let letterS = document.querySelector("audio.keyS")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterS.currentTime = 0;
    letterS.play()
    document.getElementById("S").classList.remove("letter")
    document.getElementById("S").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("S").classList.remove("buttonHover")
        document.getElementById("S").classList.add("letter")
    }
}
function styleD() {
    let letterD = document.querySelector("audio.keyD")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterD.currentTime = 0;
    letterD.play()
    document.getElementById("D").classList.remove("letter")
    document.getElementById("D").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("D").classList.remove("buttonHover")
        document.getElementById("D").classList.add("letter")
    }
}
function styleZ() {
    let letterZ = document.querySelector("audio.keyZ")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterZ.currentTime = 0;
    letterZ.play()
    document.getElementById("Z").classList.remove("letter")
    document.getElementById("Z").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("Z").classList.remove("buttonHover")
        document.getElementById("Z").classList.add("letter")
    }
}
function styleX() {

    let letterX = document.querySelector("audio.keyX")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterX.currentTime = 0;
    letterX.play()
    document.getElementById("X").classList.remove("letter")
    document.getElementById("X").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("X").classList.remove("buttonHover")
        document.getElementById("X").classList.add("letter")
    }
}
function styleC() {

    let letterC = document.querySelector("audio.keyC")
    //O current time abaixo zera o tempo para que se toque repetidas vezes a tecla sem esperar acabar o audio
    letterC.currentTime = 0;
    letterC.play()
    document.getElementById("C").classList.remove("letter")
    document.getElementById("C").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("C").classList.remove("buttonHover")
        document.getElementById("C").classList.add("letter")
    }
}


function tocar() {

    let music = document.getElementById("music").value
    console.log(music)
    console.log(typeof music)

    //Usando o spread operator para transformar de string para Array
    let musicArray = [...music]
    console.log(musicArray)
    setTimeout(playing1, 100)
    function playing1() {
        let firstNote = musicArray[0].toUpperCase()
        document.querySelector("audio.key" + [firstNote]).play()
    }
    setTimeout(playing2, 500)
    function playing2() {
        let firstNote = musicArray[1].toUpperCase()
        document.querySelector("audio.key" + [firstNote]).play()
    }
    setTimeout(playing3, 1000)
    function playing3() {
        let firstNote = musicArray[2].toUpperCase()
        document.querySelector("audio.key" + [firstNote]).play()
    }
    setTimeout(playing4, 1500)
    function playing4() {
        let firstNote = musicArray[3].toUpperCase()
        document.querySelector("audio.key" + [firstNote]).play()
    }
    setTimeout(playing5, 2000)
    function playing5() {
        let firstNote = musicArray[4].toUpperCase()
        document.querySelector("audio.key" + [firstNote]).play()
    }
    setTimeout(playing6, 2500)
    function playing6() {
        let firstNote = musicArray[5].toUpperCase()
        document.querySelector("audio.key" + [firstNote]).play()
    }
    setTimeout(playing7, 3000)
    function playing7() {
        let firstNote = musicArray[6].toUpperCase()
        document.querySelector("audio.key" + [firstNote]).play()
    }

    document.getElementById("tocar").classList.remove("mainButtom")
    document.getElementById("tocar").classList.add("mainButtomPressed")
    setTimeout(backNormal, 100);
    function backNormal() {
        document.getElementById("tocar").classList.remove("mainButtomPressed")
        document.getElementById("tocar").classList.add("mainButtom")
    }
}

window.addEventListener("keydown", playTheKey);

function playTheKey(key) {
    console.log(key.keyCode)
    let letterCode = 'p'

    if (key.keyCode == 87) {
        letterCode = 'W'
        let signW = document.querySelector("audio.key" + [letterCode])
        signW.currentTime = 0;
        signW.play()
    } else if (key.keyCode == 65) {
        letterCode = 'A'
        let signA = document.querySelector("audio.key" + [letterCode])
        signA.currentTime = 0;
        signA.play()
    } else if (key.keyCode == 90) {
        letterCode = 'Z'
        let signZ = document.querySelector("audio.key" + [letterCode])
        signZ.currentTime = 0;
        signZ.play()
    } else if (key.keyCode == 81) {
        letterCode = 'Q'
        let signQ = document.querySelector("audio.key" + [letterCode])
        signQ.currentTime = 0;
        signQ.play()
    } else if (key.keyCode == 67) {
        letterCode = 'C'
        let signC = document.querySelector("audio.key" + [letterCode])
        signC.currentTime = 0;
        signC.play()
    } else if (key.keyCode == 69) {
        letterCode = 'E'
        let signE = document.querySelector("audio.key" + [letterCode])
        signE.currentTime = 0;
        signE.play()
    } else if (key.keyCode == 83) {
        letterCode = 'S'
        let signS = document.querySelector("audio.key" + [letterCode])
        signS.currentTime = 0;
        signS.play()
    } else if (key.keyCode == 68) {
        letterCode = 'D'
        let signD = document.querySelector("audio.key" + [letterCode])
        signD.currentTime = 0;
        signD.play()
    } else if (key.keyCode == 88) {
        letterCode = 'X'
        let signX = document.querySelector("audio.key" + [letterCode])
        signX.currentTime = 0;
        signX.play()
    }
}
