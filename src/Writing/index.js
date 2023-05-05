import {Link} from "react-router-dom";

const Writing = () => {
    return (
        <div>
            <h1>Writing</h1>
            <p>Some samples of my writing.</p>
            <hr/>
            <ul className={"list-group list-group-flush"}>
                <Link className={"list-group-item"} to={"./co-play"}>Exploring Parent-Child Video Game Co-Play</Link>
                <Link className={"list-group-item"} to={"./undertale"}>Using Undertale to Teach in Schools</Link>
                <Link className={"list-group-item"} to={"./depression"}>Combating Depression With Online
                    Communities</Link>
                <Link className={"list-group-item"} to={"./streaks"}>The Motivational Effects of Streak Systems in
                    Digital Media.
                </Link>


                <a className={"list-group-item"} href={"https://en.wikipedia.org/wiki/User:Ortiz.da"}>Wikipedia
                    Account</a>
            </ul>


        </div>
    )
}

export default Writing