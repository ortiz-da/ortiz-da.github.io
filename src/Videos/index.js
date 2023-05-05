import VideoCard from "./video-card";

const Videos = () => {
    return (
        <div>
            <h1>Videos</h1>
            <p>I occasionally do some video/image editing.</p>
            <hr/>


            <VideoCard url={"https://www.youtube.com/embed/74HCVedH1c8"}
                       description={"Simple Unity tutorial I made for my game programming class."}/>
            <hr/>

            <VideoCard url={"https://www.youtube.com/embed/4rGEuYWMVGk"}
                       description={"A timelapse of our Northeastern community effort on r/place 2022."}/>
            <hr/>

            <VideoCard url={"https://www.youtube.com/embed/TY0KG0Z3Lfs"}
                       description={"Analysis video made for my HCI class of some bad design examples."}/>
            <hr/>



            <VideoCard url={"https://www.youtube.com/embed/_aVcptMiGDE"}
                       description={"I made this video in November 2020. It's showing off some gameplay clips of a teammate on my college club Overwatch team. This was one of my first projects made in Adobe Premiere Pro."}/>
            <hr/>
            <VideoCard url={"https://www.youtube.com/embed/VeXCNo5m5Vc"}
                       description={"This video is from 2018. Its purpose was to show off the different games that people were playing. I made it using a free video editor called Kdenlive."}/>
            <hr/>


        </div>
    )
}


export default Videos