namespace MyPortfolio {
    
    /*--------------------------------------------------------------- */
    window.addEventListener("load", handleLoad);
    /*--------------------------------------------------------------- */
    let worksamples: Worksample[] = [];
    let startPageDiv: HTMLDivElement;
    let contentNode: HTMLDivElement;
    /*--------------------------------------------------------------- */

    function handleLoad(_event: Event): void {
        console.log("Hello World, Anna here with my selfmade Website!");

        startPageDiv = <HTMLDivElement>document.getElementById("startPage");
        contentNode = <HTMLDivElement>document.getElementById("content");
        worksamples =
            [
                /*prog*/ walkcycleRoxie, spaceAdventure, houdiniVellum, tableScene, /*spaceShips,*/ droids,
                /*3D*/ spaceInvaders, thesis, realDream, escapeTheEdge, websitePortfolio, /* seaworld, */
                /*movies*/ musikgigant, cypcyd,
                /*skills*/ unity, max3ds, substacePainter, webTech, imageEditing, videoEditing, otherSkills
            ];
        installListeners();
        showStartPage();
    }


    function handleNavClick(_event: MouseEvent): void {
        console.log("Clicked List Element in Head");
        let clicked: HTMLLIElement = <HTMLLIElement>_event.currentTarget;
        console.log(clicked.id);
        if (clicked.id == "About_Me")
            showStartPage();
        else
            generateHTMLData(clicked.id);
    }

    function installListeners(): void {
        let navElements: HTMLCollectionOf<HTMLLIElement> = document.getElementsByTagName("header")[0].getElementsByTagName("li");

        for (let navElement of navElements) {
            console.log("found navElement");
            navElement.addEventListener("click", handleNavClick);
        }
    }

    function showStartPage(): void {
        contentNode.innerHTML = "";
        startPageDiv.style.display = "initial";
    }


    function generateHTMLData(categoryFilter: string): void {
        startPageDiv.style.display = "none";
        let content: string = "";

        for (let worksample of worksamples) {
            if (worksample.category == categoryFilter) {
                content += "<div class='MediaBox " + worksample.category + "'>";
                content += "<div class='container'>";

                if (worksample.link) {
                    content += "<a href=' " + worksample.link + "' target='_blank'>";
                    if (worksample.picture)
                        content += "<img class='img' title = '" + worksample.title + "' src =' " + worksample.picture + "'>";
                    content += "<div class='overlay'><div class='text'> Click to view </div></div></a>";
                } else if (worksample.picture) {
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

}