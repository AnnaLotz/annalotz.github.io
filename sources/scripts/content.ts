namespace MyPortfolio {

    export interface Worksample {
        category: string; //Für Filterkategorien
        title: string; //überschrift Box
        //alt: string; //alt fürs Bild
        description: string[]; //Beschreibung box
        time: string;
        picture: string; //Bildlink
        link: string; //link auf dem Bildhover
    }

    /*--------------------------------------------------------------- */
    /* 3D */
    /*--------------------------------------------------------------- */

    export let walkcycleRoxie: Worksample = {
        category: "3D",
        title: "Rigging and Walkcycle",
        description: ["Body-Rig from scratch. Made with 3dsMax. Triple-IK Leg Setup, IK-FK-Blend in Arms, Twistbones in Underarm. Simple Skinning. Keyframe-Animation."],
        time: "WS 2021",
        picture: "sources/pictures/Roxie_Rig45.png",
        link: "https://youtu.be/8lebfj3IhTU"
    };

    export let spaceAdventure: Worksample = {
        category: "3D",
        title: "Space Adventure",
        description: ["Short 3D Movie made in Blender. My Tasks: Some Planets, Camera"],
        time: "SS 2018",
        picture: "sources/pictures/spaceAdventure.png",
        link: "https://www.youtube.com/watch?v=BadjKZukxEY"
    };

    export let houdiniVellum: Worksample = {
        category: "3D",
        title: "Cloth-Animation with Houdini Vellum",
        description: ["Trying out cloth-animation and analysing its steps in Houdini with Houdini Vellum for a university-Project."],
        time: "WS 2019",
        picture: "sources/pictures/HoudiniVellum.png",
        link: "https://youtu.be/bfQAIsTYnAU"
    };

    export let tableScene: Worksample = {
        category: "3D",
        title: "Table and Chairs",
        description: ["Models and UV-Layout done in 3ds Max, textured in Adobe Substance 3D Painter."],
        time: "03/2022",
        picture: "sources/pictures/tableScene.png",
        link: ""
    };

    export let spaceShips: Worksample = {
        category: "3D",
        title: "Tie-Fighter and A-Wing",
        description: ["Simple Models made in Blender"],
        time: "SS 2018",
        picture: "sources/pictures/ships.png",
        link: ""
    };

    export let droids: Worksample = {
        category: "3D",
        title: "Droids",
        description: ["One of the first 3D-Models I did in my second Semester. Made in Blender"],
        time: "SS 2018",
        picture: "sources/pictures/droids.png",
        link: ""
    };

    /*--------------------------------------------------------------- */
    /* Programming */
    /*--------------------------------------------------------------- */

    export let spaceInvaders: Worksample = {
        category: "Prog",
        title: "Space Invaders",
        description: ["Made with html, css, and typescript in my second Semester."],
        time: "SS 2018",
        picture: "sources/pictures/spaceInvaders.png",
        link: "https://annalotz.github.io/EIA2/SpaceInvaders2/spaceInvaders.html"
    };

    export let thesis: Worksample = {
        category: "Prog",
        title: "Bachelor Thesis",
        description: ["Title: 'Conception and prototypical implementation of a cross-platform VR game with local multiplayer'. The Thesis was written at the company 'Couch in the Woods Interactive'. /* Link zu GDD Indie-Award*/"],
        time: "WS 2020",
        picture: "",
        link: ""
    };

    export let realDream: Worksample = {
        category: "Prog",
        title: "RealDream",
        description: ["An interactive installation to control a holographic projection with a physical cube. My main task in this group project was to make the technical prototype. This was done with an arduino and processing its data in Unity."],
        time: "SS 2020",
        picture: "sources/pictures/realDream.png",
        link: "https://youtu.be/uOWimO_lPgc"
    };

    export let escapeTheEdge: Worksample = {
        category: "Prog",
        title: "Escape The Edge",
        description: ["Small game made with FUDGE (Furtwangen University Didactic Game Editor)."],
        time: "WS 2019",
        picture: "sources/pictures/escapeTheEdge.png",
        link: "https://annalotz.github.io/PRIMA/EscapeTheEdge/Main.html"
    };

    export let websitePortfolio: Worksample = {
        category: "Prog",
        title: "This Website",
        description: ["This Website is completely handmade by me with html, css and typescript. Hosting over Github-Pages."],
        time: "",
        picture: "",
        link: ""
    };

    export let seaworld: Worksample = {
        category: "Prog",
        title: "Seaworld Canvas",
        description: ["Canvas animation with html and typescript"],
        time: "SS 2018",
        picture: "sources/pictures/seaworld.png",
        link: "https://annalotz.github.io/EIA2/Aufgabe_11/Seaworld/Canvas.html"
    };

    /*--------------------------------------------------------------- */
    /* Movies */
    /*--------------------------------------------------------------- */

    export let musikgigant: Worksample = {
        category: "Movies",
        title: "Der Musikgigant - Eine Orgel für China",
        description: ["Team-Production in my second semester."],
        time: "SS 2018",
        picture: "sources/pictures/musikgigant.jpg",
        link: "https://youtu.be/5eLRdUD5BLw"
    };

    export let cypcyd: Worksample = {
        category: "Movies",
        title: "Change your partner - change your day",
        description: ["Short Movie for the Modul 'Idea-Development' in my fourth semester."],
        time: "SS 2019",
        picture: "sources/pictures/cypcyd.png",
        link: "https://youtu.be/5eLRdUD5BLw"
    };

    /*--------------------------------------------------------------- */
    /* Skills */
    /*--------------------------------------------------------------- */

    export let unity: Worksample = {
        category: "Skills",
        title: "<img class='skillsLogos' src='sources/logos/unity.png'> Unity 3D",
        description:
            [
                "<ul>" +
                "<li>Working with the Editor</li>" +
                "<li>basic scripting in C# </li>" +
                "<li>worked with the VR-Plugin</li>" +
                "</ul>"
            ],
        time: "",
        picture: "",
        link: ""
    };

    export let max3ds: Worksample = {
        category: "Skills",
        title: "<img class='skillsLogos' src='sources/logos/max.jpg'> Autodesk 3ds Max",
        description:
            [
                "<ul>" +
                "<li>Hard-Surface Modeling</li>" +
                "<li>UV-Layout</li>" +
                "<li>Normal-Map Baking</li>" +
                "<li>Rigging</li>" +
                "<li>Skinning</li>" +
                "<li>Keyframe animation</li>" +
                "</ul>"
            ],
        time: "",
        picture: "",
        link: ""
    };

    export let substacePainter: Worksample = {
        category: "Skills",
        title: "<img class='skillsLogos' src='sources/logos/substance.png'> Adobe Substance 3D Painter",
        description: 
        [
            "<ul><li>Texturing</li></ul>"
        ],
        time: "",
        picture: "",
        link: ""
    };

    export let webTech: Worksample = {
        category: "Skills",
        title: "<img class='skillsLogos' src='sources/logos/ts-logo.png'><img class='skillsLogos' src='sources/logos/html.png'><img class='skillsLogos' src='sources/logos/css.png'> Web Technologies",
        description:
            [
                "<ul>" +
                "<li>TypeScript</li>" +
                "<li>HTML5</li>" +
                "<li>CSS</li>" +
                "</ul>"
            ],
        time: "",
        picture: "",
        link: ""
    };

    export let imageEditing: Worksample = {
        category: "Skills",
        title: "<img class='skillsLogos' src='sources/logos/photoshop.png'><img class='skillsLogos' src='sources/logos/gimp.png'> Image editing ",
        description:
        [
            "<ul>" +
            "<li>GIMP</li>" +
            "<li>Adobe Photoshop</li>" +
            "</ul>"
        ],
        time: "",
        picture: "",
        link: ""
    };

    export let videoEditing: Worksample = {
        category: "Skills",
        title: "<img class='skillsLogos' src='sources/logos/premiere.png'><img class='skillsLogos' src='sources/logos/davinci.png'> Video editing",
        description:
        [
            "<ul>" +
            "<li>DaVinci Resolve</li>" +
            "<li>Adobe Premiere</li>" +
            "</ul>"
        ],
        time: "",
        picture: "",
        link: ""
    };

}