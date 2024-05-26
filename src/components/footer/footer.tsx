import Link from "next/link";

export default function Footer() {
	return (
		<footer className='text-xs  flex justify-around py-2 mt-5 rounded-t'>
			<Link href="https://www.creation-site-internet.dev/">
				<p>CSI</p></Link>
			<p className='hidden xxs:block'>MG</p>
			<p>0497.33.09.44</p>
			<p>amouressenciel@gmail.com</p>
			<p className='hidden sm:block'>©AmourEssenciel 2024</p> 
		</footer>
	);
}
