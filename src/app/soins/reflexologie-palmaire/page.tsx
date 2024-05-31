import Image from "next/image";
import ReflexologiePalmaireImg from "../../../../public/img/reflexologie-palmaire.webp";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Réflexologie palmaire à Courcelles ",
	description: "Réflexologie palmaire à Courcelles, Le massage des mains est moins connu que le massage des pieds et pourtant il est tout aussi bénéfique.",
	alternates: {
		canonical: "https://www.amour-essenciel.com/soins/reflexologie-palmaire",
	} }

export default function ReflexologiePalmaire() {
	return (
		<main>
			<h1>Réflexologie Palmaire</h1>

			<p>
				Le massage des mains est moins connu que le massage des pieds et pourtant il est tout aussi bénéfique. Tout comme les pieds, les mains ont des zones réflexes qui correspondent aux
				différentes parties du corps ou à un organe.
			</p>
			<p>Par les légères pressions et les différents mouvements sur les mains, un bienfait immédiat est ressenti.</p>
			<p>Ce massage des mains procure plusieurs bienfaits :</p>
			<ul>
				<li className="bullet-point">Soulage les tensions.</li>
				<li className="bullet-point">Apporte une détente et une sensation de relaxation.</li>
				<li className="bullet-point">Recentre et remet la personne qui le reçoit dans le moment présent.</li>
				<li className="bullet-point">Assouplit le poignet et les articulations.</li>
				<li className="bullet-point">Excellent pour la circulation sanguine et lymphatique.</li>
			</ul>
			<p>
				Pour encore plus de détente, vous pouvez choisir de combiner la séance de réflexologie palmaire avec une séance de 30 minutes de massage crânio-facial</p><p>Durée de la séance complète
				(accueil + soin) : 45 min ou 1h15 avec le massage crânio-facial.
			</p>

			<Image
				src={ReflexologiePalmaireImg}
				alt="2 mains pratiquant un soin enelph dans le bas du dos"
				width={768}
				height={432}
				title="Soin Enelph"
				layout="responsive"
				className="max-w-[768px] mx-auto"
			/>
		</main>
	);
}
