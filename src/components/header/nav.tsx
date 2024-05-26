"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Style from "./header.module.css";

export default function Nav() {
	const [activeMenu, setActiveMenu] = useState<string | null>(null);
	const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	const [isLinkDisabled, setIsLinkDisabled] = useState(true);

	useEffect(() => {
		return () => {
			if (hoverTimer.current) {
				clearTimeout(hoverTimer.current);
			}
		};
	}, []);

	const handleMouseEnter = (menu: string) => {
		if (hoverTimer.current) {
			clearTimeout(hoverTimer.current);
		}
		setActiveMenu(menu);
	};

	const handleMouseLeave = () => {
		if (hoverTimer.current) {
			clearTimeout(hoverTimer.current);
		}
		hoverTimer.current = setTimeout(() => {
			setActiveMenu(null);
		}, 700);
	};

	return (
		<nav id="nav"  className="flex justify-center items-center space-x-2 sm:space-x-8 text-center shadow relative z-10 min-h-[60px]  ">
			<Link href="/" className="text-base font-medium  hover:text-orange-500 active:text-orange-500">
				ACCUEIL
			</Link>
			<Link href="/nathalie" className="text-base font-medium hover:text-orange-500 active:text-orange-500">
				QUI SUIS JE ?
			</Link>

			<ul>
				<li className={Style.relative} onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
					
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
			{/*<Link href="/ateliers" className="  text-base font-medium text-black hover:text-orange-500 active:text-orange-500">
				ATELIERS
	</Link>*/}
			<Link href="/tarifs" className="text-base font-medium  hover:text-orange-500 active:text-orange-500">
				TARIFS
			</Link>
			<Link href="/contact" className="text-base font-medium hover:text-orange-500 active:text-orange-500">
				CONTACT
			</Link>
		</nav>
	);
}
