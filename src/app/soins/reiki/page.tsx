import Image from "next/image";
import ReikiImg from "../../../../public/img/symbole-reiki.webp";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reiki à Courcelles",
	description: "Reiki à Courcelles, c'est une pratique de guérison holistique qui trouve son origine au Japon. signifie « force de Vie Universelle »",
	alternates: {
		canonical: "https://www.amour-essenciel.com/soins/reiki",
	} }


export default function Reiki() {
	return (
		<main>
			<h1>Reiki</h1>

			<h2 className="text-left text-base">Qu’est-ce que le Reïki ?</h2>
			<p>Le Reïki est une pratique de guérison holistique qui trouve son origine au Japon.</p>
			<p>
				Le mot « Reiki » signifie « force de Vie Universelle », « REI » désignant l’Esprit, la Lumière, l’Amour, l’Essence et « Ki » ou « QI » renvoie à l’énergie vitale qui circule en nous et
				qui est présente partout autour de nous.
			</p>
			<p>
				Cette méthode de guérison a été développée au début du 20ème siècle par un moine bouddhiste nommé Mikao Usui et a été introduite en Occident en 1937 par Hawayo Takata, une patiente
				soignée dans une clinique japonaise par Chujiro Hayashi, praticien Reïki et élève de Mikao Usui.
			</p>
			<br />
			<h2 className="text-left text-base">Les bénéfices du Reïki ?</h2>
			<p>Le Reiki permet par son action relaxante et anti-stress de retrouver une paix intérieure.</p>
			<p>Par ce moment pour soi, le mental étant calmé, le receveur peut discerner avec plus de cohérence les situations et les émotions qu’il vit .</p>
			<p>Quelques exemples de bienfaits apportés par le Reiki :</p>
			<ul>
				<li className="bullet-point">Réduction du stress</li>
				<li className="bullet-point">Augmentation de la vitalité</li>
				<li className="bullet-point">Amélioration du sommeil</li>
				<li className="bullet-point">Sensation de détente et de bien-être</li>
				<li className="bullet-point">Harmonisation de la circulation d’énergie</li>
				<li className="bullet-point">Meilleure conscience de ses ressentis et connexion à soi</li>
			</ul>
			<br />
			<h2 className="text-left text-base">Comment fonctionne le Reiki ?</h2>
			<p>Le praticien capte l’énergie universelle et la transmet au receveur par l’imposition des mains.</p>
			<p>L’énergie circule alors dans tout le corps du receveur : elle aligne, nettoie, équilibre, transforme, soigne ce qui peut l’être pendant le soin.</p>
			<p>Le Reiki agit sur la totalité de l’individu à savoir sur le plan mental, physique, émotionnel et spirituel.</p>

			<br />
			<h2 className="text-left text-base">Comment se déroule une séance Reiki ?</h2>
			<p>Le receveur reste habillé, se déchausse et s’installe confortablement sur une table de massage.</p>
			<p>
				Le praticien pose légèrement ses mains sur les centres d’énergie du corps et laisse la transmission se faire. Le praticien utilise son intuition et sensibilité pour identifier les
				zones qui nécessitent une attention particulière.
			</p>
			<p>Durée de la séance complète (accueil + soin) : 1h.</p>
			<br />
			<Image
				src={ReikiImg}
				alt="2 mains tendu vers le ciel récoltant l'energie du universelle du Reiki"
				width={768}
				height={432}
				title="Soin Reiki"
				layout="responsive"
				className="max-w-[768px] mx-auto"
			/>
		</main>
	);
}
