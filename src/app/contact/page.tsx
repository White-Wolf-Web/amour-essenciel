import React from 'react'
import styles from './style.module.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pa ge de contact pour un massage à Courcelles",
	description: "Vous trouverez ici comment me contacter, par telephone ou mail ou éventuellement facebook si vous le désirez",
	alternates: {
		canonical: "https://www.amour-essenciel.com/contact",
	} }


export default function Contact () {
  return (
   <main>

<h1>Contact</h1>

<p>Accompagnement pour votre bien-être… pour me joindre :</p>
<ul>
<li className="bullet-point">0497.33.09.44</li>
<li className="bullet-point">amouressenciel@gmail.com</li>
</ul>

<section className={styles.googleMapContainer}>
            
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1ed37bMwc1bDTIYFgGOWVCN7zHjB9hdA&ehbc=2E312F&noprof=1"
              width="1000"
              height="600"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" 
              title="Localisation de Amour EssenCiel à Courcelles"></iframe>
          </section>
   </main>
  )
}
