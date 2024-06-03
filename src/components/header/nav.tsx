"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Style from "./header.module.css";

export default function Nav() {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
            if (hoverTimer.current) {
                clearTimeout(hoverTimer.current);
            }
            if (closeTimer.current) {
                clearTimeout(closeTimer.current);
            }
        };
    }, []);

    const handleMouseEnter = (menu: string) => {
        if (hoverTimer.current) {
            clearTimeout(hoverTimer.current);
        }
        if (!isSmallScreen) {
            setActiveMenu(menu);
        }
    };

    const handleMouseLeave = () => {
        if (hoverTimer.current) {
            clearTimeout(hoverTimer.current);
        }
        if (!isSmallScreen) {
            hoverTimer.current = setTimeout(() => {
                setActiveMenu(null);
            }, 700);
        }
    };

    const handleClick = (menu: string) => {
        if (isSmallScreen) {
            if (closeTimer.current) {
                clearTimeout(closeTimer.current);
            }
            setActiveMenu(menu);
            closeTimer.current = setTimeout(() => {
                setActiveMenu(null);
            }, 3000);
        }
    };

    return (
        <nav id="nav" className="flex items-center justify-between flex-wrap space-x-2 sm:space-x-8 text-center shadow relative z-10 min-h-[60px]">
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-base font-medium hover:text-orange-500 active:text-orange-500">
                        ACCUEIL
                    </Link>
                    <Link href="/nathalie" className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-base font-medium hover:text-orange-500 active:text-orange-500">
                        QUI SUIS JE ?
                    </Link>
                    <ul className="inline-flex items-center space-x-4 mr-3 mt-4">
                        <li 
                            className={Style.relative}
                            onMouseEnter={() => handleMouseEnter("services")}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick("services")}
                        >
                            SOINS
                            <div className={`${Style.dropdownMenu} ${activeMenu === "services" ? Style.show : ""}`}>
                                <ul>
                                    <li>
                                        <Link href="/soins/soin-enelph" className={Style.dropdownItem}>
                                            SOIN ENELPH
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/soins/lahochi" className={Style.dropdownItem}>
                                            LAHOCHI
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/soins/reiki" className={Style.dropdownItem}>
                                            REIKI
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/soins/massage-cranio-faciale" className={Style.dropdownItem}>
                                            MASSAGE CRANIO-FACIAL
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/soins/reflexologie-palmaire" className={Style.dropdownItem}>
                                            REFLEXOLOGIE PALMAIRE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/soins/braingym" className={Style.dropdownItem}>
                                            BRAINGYM POUR ENFANTS
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <Link href="/tarifs" className="block mt-4 lg:inline-block lg:mt-0 mr-4 text-base font-medium hover:text-orange-500 active:text-orange-500">
                        TARIFS
                    </Link>
                    <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 mr-4 mb-4 text-base font-medium hover:text-orange-500 active:text-orange-500">
                        CONTACT
                    </Link>
                </div>
                <div></div>
            </div>
        </nav>
    );
}
