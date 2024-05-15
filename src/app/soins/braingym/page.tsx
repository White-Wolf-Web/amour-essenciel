import Image from "next/image"
import BrainGymImg from '../../../../public/img/brain-gym.webp'

export default function BrainGym () {
  return (
   <main>
<h1>BrainGym pour enfants</h1>
<p>Mise au point aux Etats-Unis par le chercheur Paul Dennison, le « <strong>Brain Gym</strong> » propose 26 mouvements simples qui permettent d’intégrer et de développer des compétences. Certains aident à évacuer les tensions pour mieux se concentrer. D’autres favorisent la compréhension et la mise en mémoire en stimulant les deux hémisphères du cerveau, d’autres encore peuvent aider à mieux lire ou à équilibrer les émotions.</p>
<p>Cette approche a déjà fait ses preuves dans des structures d’enseignement en Belgique et ailleurs.</p>
<p>C’est une technique mis en place au départ pour l’accompagnement des enfants en difficulté scolaire mais qui, par les <strong>résultats positifs</strong> obtenus, s’adresse aujourd’hui à tout type de profil d’enfant et même d’adulte en parcours d’études.</p>
<p>Les mots clés du Brain Gym sont :</p>
<ul><li className="bullet-point">Mouvements</li>
<li className="bullet-point">Cerveau</li>
<li className="bullet-point">Apprentissage</li>
<li className="bullet-point">Enseignement</li>
<li className="bullet-point">Représentation</li>
</ul>
<p>Le Brain Gym invite à être dans son corps et à être attentif à soi en règle générale et pendant le temps d’étude en particulier.</p>
<p>Vous sentez-vous tendu(e)? dispersé(e) ? fatigué(e) ? découragé(e) ?</p>
<p>Testez les mouvements simples du Brain gym et observez l’effet bénéfice que cela vous apporte.</p>
<p>Adoptez les mouvements qui vous aident et vous conviennent le mieux et prenez l’habitude de les réaliser avant des séances de travail ou avant un examen.</p>
<p>Séance pour les enfants du niveau primaire : +/- 45 min</p>
<p>Si demande d’accompagnement pour un étudiant du cycle secondaire, la demande et la démarche doit venir du jeune et être motivée pour optimaliser les séances.</p>
  
<Image
				src={BrainGymImg}
				alt="Représentation du cerveau d'un enfant pratiquant le braingym"
				width={768}
				height={432}
				title="Séance de BrainGym"
				layout="responsive"
				className="max-w-[768px] mx-auto"
			/>
      <p className="text-center"> <strong>Optimisez vos performances par la gymnastique du cerveau</strong></p>
   </main>
  )
}
