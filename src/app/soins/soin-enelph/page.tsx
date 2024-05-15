import Image from "next/image";
import SoinEnelphImg from "../../../../public/img/soin-enelph.webp";

export default function SoinEnelph() {
	return (
		<main>
			<h1>Soin Enelph</h1>
			<div>
				<h2 className="text-left text-base">Qu’est ce qu’est la méthode Enelph ?</h2>
				<p>L’énergie Enelph est une énergie qui vous remet en contact avec l’Amour, l’Amour de Soi, l’Amour de la Vie.</p>
				<p>Recevoir un soin Enelph, c’est se remettre en contact avec son corps, son cœur et son espace intérieur. C’est s’accorder un moment de pause pour son mieux-être.</p>
				<p>Le but du soin est de permettre au corps de réactiver son processus d’auto-guérison en se reconnectant à soi et à l’énergie Universelle.</p>
			</div>
			<div>
				<h2 className="text-left text-base">Les bienfaits d’un soin Enelph ?</h2>
				<p>
					Comme dans tous les soins énergétiques, les effets sont multiples et diffèrent d’une personne à l’autre. Il est important d’accueillir ce qui se vit dans l’instant et les moments
					qui suivent le soin.
				</p>
				<p>Quelques exemples d’effets ressentis :</p>
				<ul>
					<li className="bullet-point"> Bien être général par la détente et la relaxation que le soin apporte</li>
					<li className="bullet-point"> Détente musculaire</li>
					<li className="bullet-point"> Sensation de rééquilibrage holistique corps /esprit</li>
					<li className="bullet-point"> Lâcher prise</li>
					<li className="bullet-point"> Prise de conscience du corps dans son ensemble</li>
					<li className="bullet-point"> Sensation d’ Être plus intense (relié à ce qui nous entoure, au monde, à l’univers)</li>
					<li className="bullet-point"> Sensation de Paix intérieure</li>
					<li className="bullet-point"> Sentiment de gratitude</li>
				</ul>
				<p>
					S’accorder du temps pour soi et recevoir un soin énergétique (ou un massage) est une façon de se reconnecter à soi et de prendre en main son envie de se sentir mieux ou de se faire
					tout simplement du bien. Il n’est pas rare que dans ce processus de reconnexion et en agissant sur les tensions accumulées une amélioration de la santé ou de la qualité du sommeil
					par exemple est constatée.
				</p>
			</div>
			<div>
				<h2 className="text-left text-base">Comment se passe une séance ?</h2>
				<p>Le soin de base combine la transmission d’énergie avec un travail de massage doux depuis le sacrum jusqu’au sommet de la tête, ainsi que sur les bras et les jambes.</p>
				<p>Le soin est prodigué à partir de l’ouverture de canaux de propagation de l’énergie le long de le colonne vertébrale tel les nervures d’une feuille d’arbre.</p>
				<p>J’utilise une huile végétale légèrement chauffée. Il faut prévoir qu’il y aura un peu d’huile dans les cheveux.</p>
				<p>
					Vous recevez le soin allongé(e) sur une table de massage, en sous-vêtements et allongé(e) sur le ventre. Vous êtes enveloppé(e) dans un tissu pour un effet « cocoon » et
					enveloppant. Seules les parties du corps sollicitées seront découvertes pour vous permettre de rester dans cette sensation de sécurité et de confort.
				</p>
				<p>Après le soin, un temps de paroles est prévu. Ce moment peut vous permettre, si vous le souhaitez, d’exprimer votre ressenti sur la séance.</p>
				<p>Durée de la séance complète (accueil + soin) : 1h.</p>
			</div>
			<Image src={SoinEnelphImg} alt="2 mains pratiquant un soin enelph dans le bas du dos" width={768} height={432} title="Soin Enelph" layout="responsive" className="max-w-[768px] mx-auto" />
		</main>
	);
}
