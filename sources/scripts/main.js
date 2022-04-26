"use strict";
var MyPortfolio;
(function (MyPortfolio) {
    /*--------------------------------------------------------------- */
    window.addEventListener("load", handleLoad);
    /*--------------------------------------------------------------- */
    let worksamples = [];
    let startPageDiv;
    let contentNode;
    /*--------------------------------------------------------------- */
    function handleLoad(_event) {
        console.log("Hello World, Anna here with my selfmade Website!");
        startPageDiv = document.getElementById("startPage");
        contentNode = document.getElementById("content");
        worksamples =
            [
                /*prog*/ MyPortfolio.walkcycleRoxie, MyPortfolio.spaceAdventure, MyPortfolio.houdiniVellum, MyPortfolio.tableScene, /*spaceShips,*/ MyPortfolio.droids,
                /*3D*/ MyPortfolio.spaceInvaders, MyPortfolio.thesis, MyPortfolio.realDream, MyPortfolio.escapeTheEdge, MyPortfolio.websitePortfolio,
                /*movies*/ MyPortfolio.musikgigant, MyPortfolio.cypcyd,
                /*skills*/ MyPortfolio.unity, MyPortfolio.max3ds, MyPortfolio.substacePainter, MyPortfolio.webTech, MyPortfolio.imageEditing, MyPortfolio.videoEditing, MyPortfolio.otherSkills
            ];
        installListeners();
        showStartPage();
    }
    function handleNavClick(_event) {
        console.log("Clicked List Element in Head");
        let clicked = _event.currentTarget;
        console.log(clicked.id);
        if (clicked.id == "About_Me")
            showStartPage();
        else
            generateHTMLData(clicked.id);
    }
    function installListeners() {
        let navElements = document.getElementsByTagName("header")[0].getElementsByTagName("li");
        for (let navElement of navElements) {
            console.log("found navElement");
            navElement.addEventListener("click", handleNavClick);
        }
    }
    function showStartPage() {
        contentNode.innerHTML = "";
        startPageDiv.style.display = "initial";
    }
    function generateHTMLData(categoryFilter) {
        startPageDiv.style.display = "none";
        let content = "";
        for (let worksample of worksamples) {
            if (worksample.category == categoryFilter) {
                content += "<div class='MediaBox " + worksample.category + "'>";
                content += "<div class='container'>";
                if (worksample.link) {
                    content += "<a href=' " + worksample.link + "' target='_blank'>";
                    if (worksample.picture)
                        content += "<img class='img' title = '" + worksample.title + "' src =' " + worksample.picture + "'>";
                    content += "<div class='overlay'><div class='text'> Click to view </div></div></a>";
                }
                else if (worksample.picture) {
                    content += "<img class='img' title = 'title' src =' " + worksample.picture + "'>";
                }
                content += "<div class='TextBox'>";
                content += "<h3>" + worksample.title + " </h3>";
                content += "<p>" + worksample.description + " </p>";
                content += "</div></div></div>";
            }
        }
        contentNode.innerHTML = content;
    }
})(MyPortfolio || (MyPortfolio = {}));
//# sourceMappingURL=main.js.map