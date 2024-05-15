import LahochiImg from "../../../../public/img/lahochi.webp";
import Image from "next/image";

export default function Lahochi() {
	return (
		<main>
			<h1>LaHoChi</h1>
			<p className="mb-4">
				Le son « La » fait référence à la lumière, l’amour et la sagesse. <br /> Le son « Ho » fait référence au mouvement de cette énergie. <br /> Le son « Chi » est la force de vie,
				l’énergie universelle.{" "}
			</p>
			<p className="mb-4">
				Le LaHoChi est une technique de soin puissante qui nous relie à une très haute fréquence de lumière. Ce soin soulage les maux du corps et de l’esprit par l’apposition des mains.
			</p>
			<p className="mb-4">
				Dans une séance de guérison LaHoChi, le praticien dispose de cinq positions spécifiques de base où il place ses mains sur le corps du patient. Elles couvrent la tête, le torse, les
				bras et la région du cœur.
			</p>
			<p>Les bienfaits du soin LaHoChi sont multiples</p>

			<ul>
				<li className="bullet-point"> Apporte relaxation et lâcher-prise.</li>
				<li className="bullet-point"> Procure un sentiment de bien-être.</li>
				<li className="bullet-point"> Permet de se reconnecter à soi.</li>
				<li className="bullet-point"> Libère et réaligne nos centres énergétiques.</li>
				<li className="bullet-point"> Élargit le champs d’énergie.</li>
				<li className="bullet-point"> Active le potentiel d’auto-guérison.</li>
				<li className="bullet-point"> Revitalise l’énergie du corps.</li>
				<li className="bullet-point"> …</li>
			</ul>
			<p>Durée de la séance complète (accueil + soin) : 1h.</p>
			<Image
				src={LahochiImg}
				alt="2 mains tendu vers le ciel récoltant l'energie du Lahochi"
				width={768}
				height={432}
				title="Soin Lahochi"
				layout="responsive"
				className="max-w-[768px] mx-auto"
			/>
		</main>
	);
}
