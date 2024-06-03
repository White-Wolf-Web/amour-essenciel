import Link from "next/link";

export default function Footer() {
	return (
		<footer className="text-xs  flex-col  justify-around md:flex py-2 mt-5 rounded-t">
			<div className="flex justify-around">
				<Link href="https://www.creation-site-internet.dev/">
					<p>Créé par CSI</p>
				</Link>
				<p>Design par MG</p>
			</div>

			<div className="flex justify-around">
				<p>0497.33.09.44</p>
				<p>amouressenciel@gmail.com</p>
				<p className="hidden sm:block">©AmourEssenciel 2024</p>{" "}
			</div>
		</footer>
	);
}
