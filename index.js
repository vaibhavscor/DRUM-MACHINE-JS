
// after the content is loaded the code here will run 
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound_c');
    const pads = document.querySelectorAll('.pads div');
    // this  cont will get all the elements of class specified 

    const visual = document.querySelector('.visual_c');
    const color_L = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
    ];

    

    // sounds going here 

    // for each pad when ever clicked runs a function 
    pads.forEach((pad, index)=> {
        pad.addEventListener('click', function() {

            // multiple click working 
            // BY RESETING THE TIME
            sounds[index].currentTime = 0;

            // playing sounds 
            sounds[index].play();

            // accesing animation 
            createBubble(index);
        });
    });

    // visual making functions 
    const createBubble = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = color_L[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        })
    };

}); // main close 
