$(document).ready(function() {
    let sefHTML = `
        <div>
            <a href='https://monash.az1.qualtrics.com/jfe/form/SV_4GYposkTNIKj1Zk' title='Engineering Student Experience Feedback Survey (SEFS)'>
                <img src='https://monash-eng-engine.github.io/moodle-sandbox/SEFS-S2-2024-2.jpg' alt='Click here to complete the Engineering Student Experience Feedback Survey (SEFS) for a chance to win one of 5 100 dollar vourchers' width='100%' />
            </a>
        </div>
    `;
    $(sefHTML).insertAfter("div.course-content > ul#mst-navigation");
});