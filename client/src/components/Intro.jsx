import { useRef } from "react";
import "../styles/intro.css";

import introVideo from "../assets/intro.webm";

function Intro({ onFinish }) {

    const videoRef = useRef(null);

    return (

        <div className="intro">

            <video

                ref={videoRef}

                autoPlay

                muted

                playsInline

                onEnded={onFinish}

            >

                <source
                    src={introVideo}
                    type="video/webm"
                />

            </video>

            <button

                className="skip"

                onClick={onFinish}

            >

                Skip Intro

            </button>

        </div>

    );

}

export default Intro;