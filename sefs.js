$(document).ready(function() {
    function loadCSS(filename){ 
        var file = document.createElement("link");
        file.setAttribute("rel", "stylesheet");
        file.setAttribute("type", "text/css");
        file.setAttribute("href", filename);
        document.head.appendChild(file);
    }

    //just call a function to load your CSS
    //this path should be relative your HTML location
    loadCSS("https://monash-eng-engine.github.io/moodle-sandbox/sefs.css");

    let sefHTML = `
        <div class='my-3 eng-sefs'>
            <a href='https://monash.az1.qualtrics.com/jfe/form/SV_4GYposkTNIKj1Zk' title='Engineering Student Experience Feedback Survey (SEFS)'>
                <img src='https://monash-eng-engine.github.io/moodle-sandbox/SEFS-S2-2024-Top.jpg' alt='Click here to complete the Engineering Student Experience Feedback Survey (SEFS) for a chance to win one of 5 100 dollar vourchers' width="100%"/>
                <img src='https://monash-eng-engine.github.io/moodle-sandbox/SEFS-S2-2024-Bottom.jpg' alt='' width="100%"/>
            </a>
        </div>
    `;
    $(sefHTML).insertAfter("div.course-content > ul#mst-navigation");
});