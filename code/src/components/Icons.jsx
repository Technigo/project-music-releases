import HeartLogo from "../icons/heart.svg"
import PlayLogo from "../icons/play.svg"
import DotsLogo from "../icons/dots.svg"


export const Icons = () => {

    return (
        <div className="icons-container">
            <img src={HeartLogo} alt="Heart icon" className="icon heart-icon" />
            <img src={PlayLogo} alt="Play icon" className="icon play-icon" />
            <img src={DotsLogo} alt="Dots icon" className="icon dots-icon" />
        </div>
    )
}