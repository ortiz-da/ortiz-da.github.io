import {Link} from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <p>
                My name is Dario Ortiz. I graduated from Northeastern University with a bachelors degree in <strong>Computer
                Science and Communications</strong>, and a minor in <strong>Digital Communications</strong>.
            </p>

            <p>I like to think that one of the core ideas behind my studies is discovering <strong>how technology can
                bring people together in positive ways</strong>. There is a lot of talk in the news about the negative
                effects of technology: gaming addictions, political manipulation, toxic social media, etc. While these
                issues should not be entirely dismissed, I see myself as an advocate for the good side of technology, a
                “digital communication optimist” of sorts. I am fascinated by the effects that digital media has on
                humans, and how this powerful influence can be used for good: building communities, connecting friends,
                and caring for mental health. </p>

            <p>Our world is only going to become more digitally integrated as time goes on. I want to encourage people
                to embrace this global, digital shift in a healthy way. To explore the ways in which technology can be a
                force for good in our world. To understand that digital does not necessarily mean worse (nor does it
                always mean better).</p>


            <ul className={"list-group list-group-flush"}>
                <a className={"list-group-item"} href={"https://www.linkedin.com/in/dario-ortiz/"}><h3><i
                    className="fa-brands fa-linkedin"></i> LinkedIn </h3></a>
                <a className={"list-group-item"} href={"https://github.com/ortiz-da"}><h3><i
                    className="fa-brands fa-square-github"></i> Github</h3></a>
            </ul>


        </div>
    )
}

export default About