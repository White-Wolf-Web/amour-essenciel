import Image from "next/image";
import CranioFacialImg from '../../../../public/img/massage-du-visage.webp'

export default function MassageCranioFaciale() {
	return (
		<main>
			<h1>Massage cranio-facial</h1>
			<p>
				La réflexologie faciale et crânienne est une technique de relaxation manuelle, inspirée de la médecine traditionnelle chinoise, partant du postulat que tout le corps est représenté sur
				le visage. En stimulant des points spécifiques, il est possible de soulager le corps dans sa globalité.
			</p>
			<p>Le patient est confortablement installé, allongé, sur le dos, sur une table de massage.</p>
      <p>Ce massage du visage et du crâne procure plusieurs bienfaits :</p>
			<ul>
				<li className="bullet-point">Apporte une détente et une sensation de relaxation.</li>
				<li className="bullet-point">Stimule la circulation sanguine et lymphatique.</li>
				<li className="bullet-point">Par l’apaisement procuré, il favorise la déconnexion du mental.</li>
				<li className="bullet-point">Soulage les migraines.</li>
				<li className="bullet-point">Recentre et remet la personne qui le reçoit dans le moment présent.</li>
				<li className="bullet-point">Apporte une sensation de légèreté et de bien être.</li>
				<li className="bullet-point">Par la détente ressentie, les traits se relâchent et le visage rayonne.</li>
			</ul>
      <p>Pour encore plus de détente, vous pouvez choisir de combiner le massage crânio-facial avec une séance de réflexologie palmaire</p>
      <p>Durée de la séance complète (accueil + soin) : 45 min ou 1h15 avec la réflexologie palmaire</p>
      <Image
				src={CranioFacialImg}
				alt="2 mains tendu vers le ciel récoltant l'energie du Lahochi"
				width={768}
				height={432}
				title="Massage Cranio-facial"
				layout="responsive"
				className="max-w-[768px] mx-auto"
			/>
		</main>
	);
}
