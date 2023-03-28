var questionsDB = [
    {
        question: "what does HTML stand for? ",
        answer: "Hyper text markup language. ",


    },
    {
        question: "what does CSS stand for?",
        answer: "cascading style sheet"
    },
    {
        question:"Load Test Switch: Load test switch to simulate normal power failure. (Maintained type).",
        answer:"Accessory 5L"
        
    }
    ,
    {
        question:"Transfer Override Switch: Overrides automatic retransfer control so automatic transfer switch will remain connected to emergency power source regardless of condition of normal source. Pilot light indicates override status.",
        answer:"Accessory 6DL"
    },
    {
        question:"Signal-Before-Transfer Contacts: A set of normally open/normally closed dry contacts operates in advance of retransfer to normal source. Interval shall be adjustable from 1 to 30 seconds.",
        answer:"Accessory 31Z"
    },
    {
       question:"The transfer switch shall have load-shed and sequencing capability to allow up to nine selected loads to be disconnected prior to transfer in either direction. It shall be possible to vary the time sequence for reenergizing of the nine loads. ",
       answer:"Accessory 31CJ"
    },
    {
        question:"Engine-Generator Exerciser: Solid-state, programmable-time switch starts engine generator and transfers load to it from normal source for a preset time, then retransfers and shuts down engine after a preset cool-downn period.",
        answer:"Accessory 11BE"
    },
    {
        question:"Initiates exercise cycle at preset intervals adjustable from 7 to 30 days. Running periods shall be adjustable from 10 to 30 minutes. Factory settings shall be for 7-day exercise cycle, 20-minute running period, and 5-minute cool-down period.",
        answer:"Accessory 11BE"
    },
    {
        question:"This accessory includes: Exerciser Transfer Selector Switch: Permits selection of exercise with and without load transfer.",
        answer:"Accessory 11BE"
    },
    {
        question:" This accessory includes: Push-button programming control with digital display of settings.",
        answer:"Accessory 11BE"
    },
    {
        question:"This accessory includes: Integral battery operation of time switch when normal control power is unavailable.",
        answer:"Accessory 11BE"
    },
    {
        question:"Inhibit Transfer Control: Dry contact input overrides automatic transfer control so automatic transfer switch will not connect to emergency power source regardless of condition of normal source. Pilot light indicates override status. ",
        answer:"Accessory 34A & 34B"
    },
    {
        question:"True or False: Accessory 34A is standard on both the 7000 series and the 300 series.",
        answer:"FALSE. Accessory 34A is standard on the 300 series only."
    }
    

] // Array of JSON objects

var flCardEl = document.querySelector(".flip-card")

flCardEl.getElementsByClassName.display = "none"
document.getElementById("cards").addEventListener("click", function () {

    flCardEl.getElementsByClassName.display = "block"
    displayCard()
})
var Qno = 0
var qEl = document.getElementById("question")
var aEl = document.getElementById("Answer")

function displayCard() {
    Qno = Math.floor(Math.random() * questionsDB.length)
    qEl.innerText = questionsDB[Qno].question
    aEl.innerText = questionsDB[Qno].answer
};