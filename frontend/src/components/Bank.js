import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import earthSrc from "../earth.png";
import moonSrc from "../moon.png";

const Wave = () => {
    const numOfCircles = 150;

    const circles = Array.from({ length: numOfCircles }).map(() => {
        const cx = Math.random() * 100;
        const cy = Math.random() * 80 + 12;
        const random = Math.random();
        const r = random * 0.2 + 0.1;
        const opacity = random * 0.8 + 0.2;

        return <circle cx={cx} cy={cy} r={r} style={{ opacity }} fill="white" filter={"url(#blur)"}></circle>;
    });

    return (
        <svg viewBox="0 8.6 100 100" preserveAspectRatio="none" id="svgArea">
            <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: "#202030", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#303045", stopOpacity: 1 }} />
                </linearGradient>
                <filter id="blur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="0.1" />
                </filter>
                <clipPath id="clipPath1">
                    <path d="M0 10Q20 23 36 16T65 14 85 18 100 10V100H0Z" />
                </clipPath>
                <filter id="shadow">
                    <feDropShadow dx="0" dy="-0.5" stdDeviation="0.5" flood-color="#3335" flood-opacity="0.8" />
                </filter>
            </defs>
            <path d="M0 10Q20 23 36 16T65 14 85 18 100 10V80H0Z" fill="url(#gradient1)" filter="url(#shadow)"></path>
            <g clipPath="url(#clipPath1)">{circles}</g>
        </svg>
    );
};

const FullWave = ({ flipped = false }) => {
    return (
        <div className={`${styles.coloredContainer} ${flipped ? styles.flipped : ""}`}>
            <div className={styles.coloredBG}></div>
            <div className={styles.waveContainer}>
                <Wave />
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <section>
                <div className={styles.split}>
                    <div>
                        <title style={{ color: "#333" }}>Some big title with important words</title>
                        <p>Some description with information about the important title stuff</p>
                        <div className={styles.smallMargin}>Margin</div>
                        <div className={styles.smallMargin}>Margin</div>
                        <Link to="/more" className="outlined-button">
                            Link
                        </Link>
                    </div>
                    <div></div>
                </div>
                <div className={styles.earthContainer}>
                    <img className={styles.earth} src={earthSrc}></img>
                </div>
            </section>
            <section className={styles.featureContainer}>
                <FullWave />
                <div className={styles.waveMarginTop}>Margin</div>
                <title>Features</title>
                <div className={styles.cardContainer}>
                    <div>Card</div>
                    <div>Card</div>
                    <div>Card</div>
                </div>
                <Link to="/more" className="outlined-button">
                    Link
                </Link>
                <div className={styles.smallMargin}>Margin</div>
            </section>
            <section>
                <div className={styles.split}>
                    <div></div>
                    <div>
                        <title style={{ color: "#333" }}>Some big title with important words</title>
                        <p>Some description with information about the important title stuff</p>
                        <div className={styles.smallMargin}>Margin</div>
                        <div className={styles.smallMargin}>Margin</div>
                        <Link to="/more" className="outlined-button">
                            Link
                        </Link>
                    </div>
                </div>
                <div className={styles.moonContainer}>
                    <img className={styles.moon} src={moonSrc}></img>
                </div>
            </section>
            <section className={styles.solutionContainer}>
                <FullWave flipped />
                <div className={styles.smallMargin}>Margin</div>

                <title>Solutions</title>
                <div className={styles.cardContainer}>
                    <div>Card</div>
                    <div>Card</div>
                    <div>Card</div>
                </div>
                <Link to="/more" className="outlined-button">
                    Link
                </Link>
                <div className={styles.waveMarginTop}>Margin</div>
            </section>
            <section>
                <div className={styles.split}>
                    <div>
                        <title style={{ color: "#333" }}>Some big title with important words</title>
                        <p>Some description with information about the important title stuff</p>
                        <p>Some description with information about the important title stuff</p>
                        <p>Some description with information about the important title stuff</p>
                    </div>
                    <div className={styles.inputField}>
                        <input></input>
                        <input></input>
                        <input></input>
                    </div>
                </div>
                <Link to="/more" className="outlined-button">
                    Link
                </Link>
                <div className={styles.smallMargin}>Margin</div>
                <div className={styles.smallMargin}>Margin</div>
                <div className={styles.smallMargin}>Margin</div>
            </section>
        </div>
    );
};

export default Home;
