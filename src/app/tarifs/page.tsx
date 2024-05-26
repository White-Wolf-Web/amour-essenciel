import Image from "next/image";
import Link from "next/link";
import BrainGymPriceImg from "../../../public/img/braingym-tarif.webp";
import CranioFacialPriceImg from "../../../public/img/cranio-facial-tarif.webp";
import ReflexologiePalmairePriceImg from "../../../public/img/reflexologie-palmaire-tarif.webp";
import LahochiPriceImg from "../../../public/img/lahochi-tarif.webp";
import SoinEnelphPriceImg from "../../../public/img/soin-enelph-tarif.webp";
import ReikiPriceImg from "../../../public/img/reiki-tarif.webp";

export default function Tarifs() {
	return (
		<main>
			<h1>Tarifs</h1>
			<div className='flex-col my-5 lg:flex lg:flex-row lg:justify-around'>
				<Link href="/soins/soin-enelph">
					<Image
						src={SoinEnelphPriceImg}
						alt="Soin Enelph 1 h (accueil et soin) 60€"
						width={270}
						height={420}
						title="Tarif d'une séance de soin Enelph"
						className="max-w-[270px] my-5 mx-auto"
					/>
				</Link>
				<Link href="/soins/lahochi">
					<Image src={LahochiPriceImg} alt="Lahochi 1 h (accueil et soin) 60€" width={270} height={420} title="Tarif d'un massage Lahochi" className="max-w-[270px] my-5 mx-auto" />
				</Link>
				<Link href="/soins/reiki">
					{" "}
					<Image src={ReikiPriceImg} alt="Reiki 1 h (accueil et soin) 60€" width={270} height={420} title="Tarif d'une séance de reiki" className="max-w-[270px] my-5 mx-auto" />
				</Link>
			</div>
			<div className='flex-col my-5 lg:flex lg:flex-row lg:justify-around'>
				<Link href="/soins/massage-cranio-faciale">
					<Image
						src={CranioFacialPriceImg}
						alt="Massage Cranio-facial 45 mn (accueil et soin) 45€ - Combiné réflexologie palmaire 1H15 - 70€"
						width={270}
						height={520}
						title="Tarif pour un massage cranio-facial"
						className="max-w-[270px] my-5 mx-auto"
					/>
				</Link>

				<Link href="/soins/reflexologie-palmaire">
					<Image
						src={ReflexologiePalmairePriceImg}
						alt="Réflexologie palmaire 45 mn (accueil et soin) 45€ - Combiné massage cranio-facial 1H15 - 70€"
						width={270}
						height={520}
						title="Tarif pour séance de réflexologie palmaire"
						className="max-w-[270px] my-5 mx-auto"
					/>
				</Link>

				<Link href="/soins/braingym">
					<Image
						src={BrainGymPriceImg}
						alt="Braingym pour enfants 45 mn (accueil et soin) 40€"
						width={270}
						height={440}
						title="Tarif pour une séance de Braingym pour enfant"
						className="max-w-[270px] my-5 mx-auto max-h-[440px]"
					/>{" "}
				</Link>
			</div>
		</main>
	);
}
