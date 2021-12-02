function styleW() {
    //método .play() é um método de audio tag element principalmente parece
    document.querySelector("audio.keyW").play()


    document.getElementById("W").classList.remove("letter")
    document.getElementById("W").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("W").classList.remove("buttonHover")
        document.getElementById("W").classList.add("letter")
    }
}
function styleQ() {
    document.querySelector("audio.keyQ").play()


    document.getElementById("Q").classList.remove("letter")
    document.getElementById("Q").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("Q").classList.remove("buttonHover")
        document.getElementById("Q").classList.add("letter")
    }
}
function styleE() {

    document.querySelector("audio.keyE").play()

    document.getElementById("E").classList.remove("letter")
    document.getElementById("E").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("E").classList.remove("buttonHover")
        document.getElementById("E").classList.add("letter")
    }
}
function styleA() {

    document.querySelector("audio.keyA").play()

    document.getElementById("A").classList.remove("letter")
    document.getElementById("A").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("A").classList.remove("buttonHover")
        document.getElementById("A").classList.add("letter")
    }
}
function styleS() {
    document.querySelector("audio.keyS").play()


    document.getElementById("S").classList.remove("letter")
    document.getElementById("S").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("S").classList.remove("buttonHover")
        document.getElementById("S").classList.add("letter")
    }
}
function styleD() {
    document.querySelector("audio.keyD").play()


    document.getElementById("D").classList.remove("letter")
    document.getElementById("D").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("D").classList.remove("buttonHover")
        document.getElementById("D").classList.add("letter")
    }
}
function styleZ() {
    document.querySelector("audio.keyZ").play()


    document.getElementById("Z").classList.remove("letter")
    document.getElementById("Z").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("Z").classList.remove("buttonHover")
        document.getElementById("Z").classList.add("letter")
    }
}
function styleX() {

    document.querySelector("audio.keyX").play()

    document.getElementById("X").classList.remove("letter")
    document.getElementById("X").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("X").classList.remove("buttonHover")
        document.getElementById("X").classList.add("letter")
    }
}
function styleC() {
    document.querySelector("audio.keyC").play()


    document.getElementById("C").classList.remove("letter")
    document.getElementById("C").classList.add("buttonHover")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("C").classList.remove("buttonHover")
        document.getElementById("C").classList.add("letter")
    }
}


function tocar(){

    document.getElementById("tocar").classList.remove("mainButtom")
    document.getElementById("tocar").classList.add("mainButtomPressed")
    setTimeout(backNormal, 100);
    function backNormal(){
        document.getElementById("tocar").classList.remove("mainButtomPressed")
        document.getElementById("tocar").classList.add("mainButtom")
    }

}