var speech_recognition=window.webkitSpeechRecognition
var recognition=new speech_recognition()
function start(){
    document.getElementById("textbox").innerHTML=""
    recognition.start()

}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("textbox").innerHTML=content
    if (content=="take my selfie") {
     speak()   
    }
   
}
function speak(){
    var speech=window.speechSynthesis
    speakdata=document.getElementById("textbox").innerHTML
    var utter=new SpeechSynthesisUtterance(speakdata)
    speech.speak(utter)
    Webcam.attach(camera)
    setTimeout(() => {
        takesnapshot()
        save()
    }, 5000);
}
var camera=document.getElementById("camera")
Webcam.set({width:360, height: 250, image_format:'jpeg', jpeg_quality:90})
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfieimage">'
    })
}
function save(){
    link=document.getElementById("link")
image=document.getElementById("selfieimage").src
link.href=image
link.click()
}