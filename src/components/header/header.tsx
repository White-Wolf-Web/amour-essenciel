import Image from "next/image";
import Banner from '../../../public/img/banniere-amour-essentiel.webp'
import Nav from "@/components/header/nav";

export default function Header() {
	return (
		<div>
			<Image src={Banner} alt="Baniere de Amour Essenciel sur un fond doré" width={1160} height={445} layout="responsive" title="Amour Essenciel" className="" priority />
			<Nav />
		</div>
	);
}
