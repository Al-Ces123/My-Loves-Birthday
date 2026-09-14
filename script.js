/* =========================================================
   OPENING LETTER
   ========================================================= */

const envelope =
    document.getElementById("envelope");

const openButton =
    document.getElementById("openButton");

const letterScreen =
    document.getElementById("letter-screen");

const mainContent =
    document.getElementById("main-content");


openButton.addEventListener("click", function () {

    // Open the envelope
    envelope.classList.add("open");

    openButton.textContent =
        "Opening... ❤️";


    // Fade the opening screen
    setTimeout(function () {

        letterScreen.style.opacity = "0";

    }, 1000);


    // Remove opening screen
    // and show the website
    setTimeout(function () {

        letterScreen.style.display =
            "none";

        mainContent.classList.remove(
            "hidden"
        );

        window.scrollTo(0, 0);

    }, 1800);

});



/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function scrollToSection(sectionID) {

    const section =
        document.getElementById(sectionID);


    if (section) {

        section.scrollIntoView({

            behavior: "smooth"

        });

    }

}



/* =========================================================
   OPTIONAL MUSIC
   ========================================================= */

const musicButton =
    document.getElementById("musicButton");

const loveSong =
    document.getElementById("loveSong");


musicButton.addEventListener(
    "click",
    function () {

        if (loveSong.paused) {

            loveSong.play()

                .then(function () {

                    musicButton.textContent =
                        "🔊 Our Song Is Playing";

                    musicButton.classList.add(
                        "playing"
                    );

                })

                .catch(function () {

                    musicButton.textContent =
                        "🎵 Add Your Song First";

                });

        }

        else {

            loveSong.pause();

            musicButton.textContent =
                "🎵 Play Our Song";

            musicButton.classList.remove(
                "playing"
            );

        }

    }
);



/* =========================================================
   SECRET MESSAGE
   ========================================================= */

const secretButton =
    document.getElementById("secretButton");

const secretMessage =
    document.getElementById("secretMessage");


secretButton.addEventListener(
    "click",
    function () {

        secretMessage.classList.toggle(
            "hidden"
        );


        if (
            secretMessage.classList.contains(
                "hidden"
            )
        ) {

            secretButton.textContent =
                "P.S. I have one more thing to tell you... 👀";

        }

        else {

            secretButton.textContent =
                "I meant every word. ❤️";

        }

    }
);



/* =========================================================
   TIME TOGETHER COUNTER
   =========================================================

   CHANGE THIS DATE.

   Example:

   const relationshipStart =
       new Date("2019-08-15T00:00:00");

   ========================================================= */


const relationshipStart =
    new Date("2019-01-01T00:00:00");


function updateCounter() {

    const now =
        new Date();


    let difference =
        now - relationshipStart;


    if (difference < 0) {

        difference = 0;

    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds / 86400
        );


    const hours =
        Math.floor(
            (totalSeconds % 86400)
            / 3600
        );


    const minutes =
        Math.floor(
            (totalSeconds % 3600)
            / 60
        );


    const seconds =
        totalSeconds % 60;


    document.getElementById(
        "daysTogether"
    ).textContent =
        days.toLocaleString();


    document.getElementById(
        "hoursTogether"
    ).textContent =
        hours;


    document.getElementById(
        "minutesTogether"
    ).textContent =
        minutes;


    document.getElementById(
        "secondsTogether"
    ).textContent =
        seconds;

}


updateCounter();


setInterval(
    updateCounter,
    1000
);



/* =========================================================
   FINAL SURPRISE
   ========================================================= */

const surpriseButton =
    document.getElementById(
        "surpriseButton"
    );

const surprise =
    document.getElementById(
        "surprise"
    );


surpriseButton.addEventListener(
    "click",
    function () {

        surprise.classList.remove(
            "hidden"
        );


        surpriseButton.textContent =
            "🌻 For You, Always 🌻";


        createCelebration();


        surprise.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }
);



/* =========================================================
   HEART + SUNFLOWER CELEBRATION
   ========================================================= */

function createCelebration() {

    const symbols = [

        "❤️",
        "🌻",
        "💗",
        "✨"

    ];


    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const element =
            document.createElement("div");


        element.textContent =
            symbols[
                Math.floor(
                    Math.random()
                    * symbols.length
                )
            ];


        element.style.position =
            "fixed";


        element.style.left =
            Math.random() * 100 + "vw";


        element.style.top =
            "80vh";


        element.style.fontSize =
            18 +
            Math.random() * 25 +
            "px";


        element.style.zIndex =
            "9999";


        element.style.pointerEvents =
            "none";


        document.body.appendChild(
            element
        );


        const duration =
            1500 +
            Math.random() * 1500;


        element.animate(

            [

                {

                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {

                    transform:
                        `translateY(-${300 + Math.random() * 400}px)
                         rotate(${Math.random() * 360}deg)`,

                    opacity: 0

                }

            ],

            {

                duration:
                    duration,

                easing:
                    "ease-out"

            }

        );


        setTimeout(

            function () {

                element.remove();

            },

            duration

        );

    }

}