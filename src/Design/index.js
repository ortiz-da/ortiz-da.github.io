import VideoCard from "../Videos/video-card";

const Design = () => {
    return (
        <div>
            <h1>Design</h1>
            <p>
                While it's not my primary focus, I enjoy working on application design components, including UI and
                UX. I've used the following tools for design:
            </p>
            <ul>
                <li>Figma</li>
                <li>Miro</li>
                <li>Gimp</li>
            </ul>
            <hr/>


            <div className={"row my-5"}>
                <div className={"col-7"}>
                    <p>{"This is a project I worked on for my Human Computer Interaction class at Northeastern. We created a \"MassPass\" app prototype in Figma. This involved user interviews, varying levels of prototype fidelity, and user testing."}</p>
                </div>
                <div className={"col-auto"}>
                    <div className="embed-responsive">
                        <iframe className={"embed-responsive-item"} width="450" height="800"
                                src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FpcTWbMhAZAPDSvxpVuy6jw%2FMassPass%3Ftype%3Ddesign%26node-id%3D3-5%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D3%253A5"}
                                title="YouTube video player" frameBorder="0"
                                allowFullScreen></iframe>
                    </div>
                </div>

            </div>


        </div>
    )
}
export default Design