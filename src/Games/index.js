import GameCard from "./game-card";

const Games = () => {
    return (
        <div>
            <h1>Games</h1>
            <p>A side interest of mine is game development. I work in Unity with C#, and have made a few small games over the years. My strong points include:</p>
            <ul>
                <li>Level blocking</li>
                <li>Project management</li>
                <li>Concept ideation</li>
            </ul>
            <p> Check out my <a href={"https://dortiz.itch.io/"}>Itch.io page</a>!</p>
            <hr/>


            <GameCard
                img={"https://img.itch.zone/aW1nLzExMjQ1OTA1LnBuZw==/original/ADYMUQ.png"}
                title={"Root Router"}
                date={"February 2023"}
                description={"Made for the Global Game Jam. Theme was \"Roots\". Worked with a team of 5 & a sound designer."}
                url={"https://dortiz.itch.io/rootrouter"}
            />

            <GameCard
                img={"https://img.itch.zone/aW1nLzEwMzA4OTU3LnBuZw==/original/tfafNr.png"}
                title={"Rat Game"}
                date={"Fall 2022"}
                description={"Semester long class project for my game programming class. Made with a team of 5. I was responsible for lighting, and did a lot of level design/blocking with ProBuilder."}
                url={"https://dortiz.itch.io/rat-game"}
            />

            <GameCard
                img={"https://img.itch.zone/aW1hZ2UvMTA4MDQ1My82MjEzNTcwLnBuZw==/original/Gyt6JJ.png"}
                title={"Bubble Up"}
                date={"Summer 2021"}
                description={"Made for the GMTK Game Jam. Solo developed in 48 hours. Theme was \"Joined Together\". My first game jam!"}
                url={"https://dortiz.itch.io/bubbleup"}
            />


            <GameCard
                img={"https://img.itch.zone/aW1nLzY1NDA5ODkucG5n/original/tkMbHj.png"}
                title={"Puffer Poison"}
                date={"Summer 2021"}
                description={"Made for the Northeastern University Husky Jam. Theme was \"Toxic\". Collaborated with an artist for the art."}
                url={"https://dortiz.itch.io/pufferpoison"}
            />




        </div>
    )
}

export default Games