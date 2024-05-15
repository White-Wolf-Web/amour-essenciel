import Link from "next/link";

export default function Footer() {
	return (
		<footer className='bg-slate-100 text-xs  flex justify-around py-2 mt-5 rounded-t'>
			<Link href="https://www.creation-site-internet.dev/">
				<p>Créé par CSI</p></Link>
			<p className='hidden xs:block'>Design by MG</p>
			<p>RDV 0497.33.09.44</p>
			<p>amouressenciel@gmail.com</p>
			<p className='hidden sm:block'>©AmourEssenciel</p> 
		</footer>
	);
}
