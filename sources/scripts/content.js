"use strict";
var MyPortfolio;
(function (MyPortfolio) {
    /*--------------------------------------------------------------- */
    /* Programming */
    /*--------------------------------------------------------------- */
    MyPortfolio.spaceInvaders = {
        category: "Prog",
        title: "Space Invaders",
        description: "In my second semester we had the task to program a simple game with typescript, html and css to be played in the browser. " +
            "I decided to remake the classic arcade-game.",
        time: "SS 2018",
        picture: "sources/pictures/spaceInvaders.png",
        link: "https://annalotz.github.io/EIA2/SpaceInvaders2/spaceInvaders.html"
    };
    MyPortfolio.thesis = {
        category: "Prog",
        title: "Bachelor Thesis",
        description: "<p>My Thesis was written at the company 'Couch in the Woods Interactive'. </p>" +
            "<p>Title: 'Conception and prototypical implementation of a cross-platform VR game with local multiplayer' </p>" +
            "Abstract: 'The virtual reality (VR) market has been growing continuously since 2017. " +
            "Nevertheless, for many users the low quantity of high-quality contents is a " +
            "reason not to buy a VR system. In order to attract more gamers, this Thesis " +
            "develops a concept and a prototype for a game that uses a cross-platform " +
            "design between VR and smartphones. The game is based on one person " +
            "using a VR system to play, while a co-player in the same room uses a " +
            "smartphone. For research, online sources and scientific papers are used as " +
            "well as analogue and digital games. These are analyzed in terms of general " +
            "mechanics and interaction between the co-players and adapted to the game " +
            "concept. This Thesis aims at showing the aspects of the current state of " +
            "research and development that must be considered when developing a " +
            "cross-platform VR game with a local multiplayer mode.'",
        time: "WS 2020",
        picture: "",
        link: ""
    };
    MyPortfolio.realDream = {
        category: "Prog",
        title: "RealDream",
        description: "An interactive installation to control a holographic projection with a physical cube. " +
            "My main task in this group project was to make the technical prototype. " +
            "This was done with an arduino and processing its data in Unity.",
        time: "SS 2020",
        picture: "sources/pictures/realDream.png",
        link: "https://youtu.be/uOWimO_lPgc"
    };
    MyPortfolio.escapeTheEdge = {
        category: "Prog",
        title: "Escape The Edge",
        description: "Idea and implementation of a simple game. Programmed with FUDGE (Furtwangen University Didactic Game Editor).",
        time: "WS 2019",
        picture: "sources/pictures/escapeTheEdge.png",
        link: "https://annalotz.github.io/PRIMA/EscapeTheEdge/Main.html"
    };
    MyPortfolio.websitePortfolio = {
        category: "Prog",
        title: "This Website",
        description: "This Website is completely handmade by me with html, css and typescript. The hosting is done over Github-Pages.",
        time: "",
        picture: "sources/pictures/thisWebsite.png",
        link: "https://annalotz.github.io/"
    };
    /*
        export let seaworld: Worksample = {
            category: "Prog",
            title: "Seaworld Canvas",
            description: "Canvas animation with html and typescript",
            time: "SS 2018",
            picture: "sources/pictures/seaworld.png",
            link: "https://annalotz.github.io/EIA2/Aufgabe_11/Seaworld/Canvas.html"
        };
    */
    /*--------------------------------------------------------------- */
    /* 3D */
    /*--------------------------------------------------------------- */
    MyPortfolio.walkcycleRoxie = {
        category: "3D",
        title: "Rigging and Walkcycle",
        description: "This Body-Rig is made from scratch with 3dsMax to learn the fundamental components of Rigging. <br>" +
            "The Rig includes: Triple-IK Leg Setup, IK-FK-Blend in Arms, Twistbones in Underarm, Spline IK as Spine. " +
            "Skinning was mainly done with Paint Weights. To make the Walkcycle I made a Keyframe-Animation.",
        time: "WS 2021",
        picture: "sources/pictures/Roxie_Rig45.png",
        link: "https://youtu.be/8lebfj3IhTU"
    };
    MyPortfolio.spaceAdventure = {
        category: "3D",
        title: "Space Adventure",
        description: "A short 3D Movie made in Blender. This group-work was the final project in the second semester module 'Computer Graphics'. " +
            "My task was to design and model five Planets and do the animation of the camera.",
        time: "SS 2018",
        picture: "sources/pictures/spaceAdventure.png",
        link: "https://www.youtube.com/watch?v=BadjKZukxEY"
    };
    MyPortfolio.houdiniVellum = {
        category: "3D",
        title: "Cloth-Animation with Houdini Vellum",
        description: "Trying out cloth-animation and analysing its steps in Houdini with Houdini Vellum for a university-project.",
        time: "WS 2019",
        picture: "sources/pictures/HoudiniVellum.png",
        link: "https://youtu.be/bfQAIsTYnAU"
    };
    MyPortfolio.tableScene = {
        category: "3D",
        title: "Table and Chairs",
        description: "A little scene I made as a private project. " +
            "Models and UV-Layout done in 3ds Max, textured in Adobe Substance 3D Painter.",
        time: "03/2022",
        picture: "sources/pictures/tableScene.png",
        link: ""
    };
    /*
        export let spaceShips: Worksample = {
            category: "3D",
            title: "Tie-Fighter and A-Wing",
            description: "Simple Models made in Blender",
            time: "SS 2018",
            picture: "sources/pictures/ships.png",
            link: ""
        };
    */
    MyPortfolio.droids = {
        category: "3D",
        title: "Droids",
        description: "Some of the first 3D-Models I did in my second Semester. Made in Blender",
        time: "SS 2018",
        picture: "sources/pictures/droids.png",
        link: ""
    };
    /*--------------------------------------------------------------- */
    /* Movies */
    /*--------------------------------------------------------------- */
    MyPortfolio.musikgigant = {
        category: "Movies",
        title: "Der Musikgigant - Eine Orgel für China",
        description: "In my second semester we had to shoot a short film, " +
            "so me and my team made a documentation about an organ builder near Freiburg.",
        time: "SS 2018",
        picture: "sources/pictures/musikgigant.jpg",
        link: "https://youtu.be/5eLRdUD5BLw"
    };
    MyPortfolio.cypcyd = {
        category: "Movies",
        title: "Change your partner - change your day",
        description: "A team-production in the module 'Idea-Development' which resulted in a short movie in my fourth semester.",
        time: "SS 2019",
        picture: "sources/pictures/cypcyd.png",
        link: "https://youtu.be/gYM7WluhMWU"
    };
    /*--------------------------------------------------------------- */
    /* Skills */
    /*--------------------------------------------------------------- */
    MyPortfolio.unity = {
        category: "Skills",
        title: "Unity 3D" +
            "<img class='skillsLogos' src='sources/logos/unity.png'>",
        description: "<ul>" +
            "<li>Working with the Editor - &#11088 &#11088</li>" +
            "<li>Scripting in C# -  &#11088 &#11088 </li>" +
            "<li>Worked with the VR-Plugin - &#11088</li>" +
            "</ul>",
        time: "",
        picture: "",
        link: ""
    };
    MyPortfolio.max3ds = {
        category: "Skills",
        title: "Autodesk 3ds Max" +
            "<img class='skillsLogos' src='sources/logos/max.jpg'>",
        description: "<ul>" +
            "<li>Hard-Surface Modeling - &#11088 &#11088</li>" +
            "<li>Rigging - &#11088 &#11088 &#11088</li>" +
            "<li>Skinning - &#11088 &#11088</li>" +
            "<li>Keyframe animation - &#11088 &#11088</li>" +
            "<li>UV-Layouting - &#11088</li>" +
            "<li>Normal-Map Baking - &#11088</li>" +
            "</ul>",
        time: "",
        picture: "",
        link: ""
    };
    MyPortfolio.substacePainter = {
        category: "Skills",
        title: "Adobe Substance 3D Painter" +
            "<img class='skillsLogos' src='sources/logos/substance.png'>",
        description: "<ul><li>Texturing - &#11088</li></ul>",
        time: "",
        picture: "",
        link: ""
    };
    MyPortfolio.webTech = {
        category: "Skills",
        title: "Web Technologies" +
            "<img class='skillsLogos' src='sources/logos/ts-logo.png'>" +
            "<img class='skillsLogos' src='sources/logos/html.png'>" +
            "<img class='skillsLogos' src='sources/logos/css.png'> ",
        description: "<ul>" +
            "<li>TypeScript - &#11088 &#11088 &#11088</li>" +
            "<li>HTML5 - &#11088 &#11088</li>" +
            "<li>CSS - &#11088</li>" +
            "</ul>",
        time: "",
        picture: "",
        link: ""
    };
    MyPortfolio.imageEditing = {
        category: "Skills",
        title: "Image editing" +
            "<img class='skillsLogos' src='sources/logos/photoshop.png'>" +
            "<img class='skillsLogos' src='sources/logos/gimp.png'>",
        description: "<ul>" +
            "<li>GIMP - &#11088</li>" +
            "<li>Adobe Photoshop - &#11088</li>" +
            "</ul>",
        time: "",
        picture: "",
        link: ""
    };
    MyPortfolio.videoEditing = {
        category: "Skills",
        title: "Video editing" +
            "<img class='skillsLogos' src='sources/logos/premiere.png'>" +
            "<img class='skillsLogos' src='sources/logos/davinci.png'>",
        description: "<ul>" +
            "<li>DaVinci Resolve - &#11088</li>" +
            "<li>Adobe Premiere - &#11088</li>" +
            "</ul>",
        time: "",
        picture: "",
        link: ""
    };
    MyPortfolio.otherSkills = {
        category: "Skills",
        title: "Other" +
            "<img class='skillsLogos' src='sources/logos/Google_Drive.png'>" +
            "<img class='skillsLogos' src='sources/logos/UML_logo.png'>" +
            "<img class='skillsLogos' src='sources/logos/Git-Icon.png'>" +
            "<img class='skillsLogos' src='sources/logos/Arduino.png'>",
        description: "<ul>" +
            "<li>Google Docs, Sheets & Slides - &#11088 &#11088</li>" +
            "<li>UML - &#11088</li>" +
            "<li>Git - &#11088</li>" +
            "<li>Arduino & physical computing - &#11088</li>" +
            "</ul>",
        time: "",
        picture: "",
        link: ""
    };
})(MyPortfolio || (MyPortfolio = {}));
//# sourceMappingURL=content.js.map