import Image from "next/image";
import CheminDeVie from '../../public/img/chemin-de-vie-amour-essenciel.webp'
import type { Metadata } from "next";
import { MetadataHomePage } from "@/components/metadata/MetadataHomePage";
import Head from "next/head";


export const metadata: Metadata = {
	title: "Soin énergétique - Massage | Courcelles | Amour EssenCiel",
	description:
		"A Courcelles, chez ‘Amour-EssenCiel’, un soin énergétique, un massage c'est faire l'expérience d'un moment de présence à soi, d'amour et de gratitude.",
		alternates: {
		canonical: "https://www.amour-essenciel.com",
	},	openGraph: {
		title: "Soin énergétique - Massage | Courcelles | Amour EssenCiel",
			description:
			"A Courcelles, chez ‘Amour-EssenCiel’, un soin énergétique, un massage c'est faire l'expérience d'un moment de présence à soi, d'amour et de gratitude.",
			url: "https://www.amour-essenciel.com",
			siteName: "Soin énergétique - Massage | Courcelles | Amour EssenCiel",
			locale: "fr_BE",
			type: "website",
			images: [
				{
					url: "https://www.amour-essenciel.com/img/banniere-amour-essentiel.webp",
					width: 1302,
					height: 500,
					alt: "Amour EssenCiel - pour vous relier à l'Essentiel",
				},
			],
	},
	twitter: {
		title: "Soin énergétique - Massage | Courcelles | Amour EssenCiel",
	  card: 'summary_large_image',
	  images: 'https://www.amour-essenciel.com/img/banniere-amour-essentiel.webp',
	  site:'@amouressenciel',
	  description:"A Courcelles, chez ‘Amour-EssenCiel’, un soin énergétique, un massage c'est faire l'expérience d'un moment de présence à soi, d'amour et de gratitude."
  
	},
};

export default function Home() {
	return (
		<main className=" p-10">
			<h1>Amour EssenCiel</h1>
			<h2>Pour vous relier à l&apos;Essentiel</h2>

			<p>
				Dans notre monde où tout va vite et où nous sommes le plus souvent dans le « faire » que dans « l’Être », il est important de s’accorder des pauses afin de pouvoir se recentrer et
				s’ajuster avec son Être profond. Le contact et l’accueil de ce que nous sommes sans artifices et sans jugement permet de sentir ce qui nous relie aux autres, à la nature et au monde.
			</p>
			<p>
				S’accorder un moment dans l’ espace AmourEssenCiel, c’est faire une pause pour Soi, c’est se re- appeler (entendre l’appel) de notre Être profond. C’est se reconnecter à son ressenti
				et à ses émotions. C’est s’aligner à qui nous sommes et surtout se reconnaître comme la personne la plus importante pour Soi-même (m’aime). Prendre du temps pour Soi c’est s’accorder
				un moment de douceur et de bien-être pour pouvoir offrir au monde la meilleure version de nous-mêmes.
			</p>
			<p>
				Dans une vision holistique, l’humain est pris en compte dans sa globalité. Un soin énergétique posé en conscience avec respect et bienveillance permet un rééquilibrage et offre
				l’opportunité de ré-harmoniser l’ensemble corps/esprit/ âme.
			</p>
		<p>Un soin énergétique c’est faire l’expérience d’un moment de présence à soi, d’amour et de gratitude.</p>
	<div className="ml-8 border-l-4 border-orange-600 rounded">
	<p className='text-lg'><em>Fais du bien à ton corps pour que ton âme ait envie d’y rester</em></p>
	<p>Proverbe indien</p>
	</div>
	<Image src={CheminDeVie} alt="Chemin de vie dans l'amour essentiel" width={71} height={262}  title="Le chemin de vie" className="mx-auto" />
	<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(MetadataHomePage) }} />
		</main>
	);
}
