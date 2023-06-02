import { React, useEffect, useRef } from "react";
import "./NavStyles.scss";
import { gsap } from "gsap";
import { Power3 } from "gsap/gsap-core";

const Nav = () => {
    const navItems = useRef([]);
    const scope = useRef();
    const bar = useRef();
    const tl = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline();
            navItems.current.forEach((navItem) => {
                tl.current.to(
                    navItem,
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.5,
                        ease: Power3,
                    },
                    "-=.3"
                );
            });
            tl.current.to(
                bar.current,
                {
                    height: "100%",
                    ease: Power3,
                },
                "-=.3"
            );
        }, scope);

        return () => ctx.revert();
    }, []);
    return (
        <nav ref={scope}>
            <ul>
                <li
                    ref={(el) => {
                        navItems.current.push(el);
                    }}
                >
                    <a href="#Home">Home</a>
                    <ion-icon name="home-outline"></ion-icon>
                </li>
                <li
                    ref={(el) => {
                        navItems.current.push(el);
                    }}
                >
                    <a href="#About">About</a>
                    <ion-icon name="person-circle-outline"></ion-icon>
                </li>
                <li ref={(el) => navItems.current.push(el)}>
                    <a href="#Portfolio">Portfolio</a>
                    <ion-icon name="library-outline"></ion-icon>
                </li>
                <li ref={(el) => navItems.current.push(el)}>
                    <a href="#Contact">Contact</a>
                    <ion-icon name="mail-outline"></ion-icon>
                </li>
                <aside ref={bar}>
                    <div className="marker"></div>
                </aside>
            </ul>
        </nav>
    );
};

export default Nav;
