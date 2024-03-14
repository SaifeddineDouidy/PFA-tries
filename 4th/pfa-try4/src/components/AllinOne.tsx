import { CheckIcon } from '@heroicons/react/outline';

const AllInOne = () => {
  return (
    <div className='w-full my-[32px] bg-[white]'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
        The future of employment management is here! Welcome to a platform revolutionizing job management, akin to Indeed
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Sécurité</h3>
                    <ul className='list-disc text-lg pt-2 pb-4'>
                        <li>Confidentialité des données personnelles des utilisateurs (employés, entreprises, encadrants, etc.).</li>
                        <li>Protection contre les cyberattaques et les violations de données.</li>
                        <li>Authentification sécurisée des utilisateurs.</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Performances</h3>
                    <ul className='list-disc text-lg pt-2 pb-4'>
                        <li>Temps de réponse rapide pour les requêtes des utilisateurs.</li>
                        <li>Capacité à gérer un grand volume de données (offres d'emploi, profils d'utilisateurs, etc.).</li>
                        <li>Évolutivité pour s'adapter à une augmentation du nombre d'utilisateurs.</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Fiabilité</h3>
                    <ul className='list-disc text-lg pt-2 pb-4'>
                        <li>Disponibilité élevée du système (uptime).</li>
                        <li>Tolérance aux pannes pour assurer la continuité du service.</li>
                        <li>Sauvegarde régulière des données pour prévenir la perte de données.</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Convivialité et accessibilité</h3>
                    <ul className='list-disc text-lg pt-2 pb-4'>
                        <li>Interface utilisateur intuitive et conviviale pour une expérience utilisateur optimale.</li>
                        <li>Accessibilité pour les utilisateurs ayant des besoins spécifiques (conformité aux normes WCAG, par exemple).</li>
                        <li>Prise en charge de différentes langues et localisations pour une portée internationale.</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Évolutivité et extensibilité</h3>
                    <ul className='list-disc text-lg pt-2 pb-4'>
                        <li>Capacité à intégrer de nouvelles fonctionnalités et à évoluer avec les besoins changeants des utilisateurs.</li>
                        <li>Flexibilité pour s'intégrer avec d'autres systèmes ou plateformes externes.</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Compatibilité</h3>
                    <ul className='list-disc text-lg pt-2 pb-4'>
                        <li>Compatibilité avec différents navigateurs web et appareils (ordinateurs de bureau, tablettes, smartphones, etc.).</li>
                        <li>Prise en charge de différents systèmes d'exploitation (Windows, macOS, Linux, iOS, Android, etc.).</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Performance et optimisation</h3>
                    <ul className='list-disc text-lg pt-2 pb-4'>
                        <li>Optimisation des performances pour réduire les temps de chargement des pages.</li>
                        <li>Gestion efficace de la mémoire et des ressources système pour une utilisation efficiente.</li>
                    </ul>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Éthique et conformité réglementaire</h3>
                    <ul className='list-disc text-lg pt-2 pb-4'>
                        <li>Conformité aux réglementations en matière de protection des données personnelles (telles que le RGPD en Europe).</li>
                        <li>Respect des normes éthiques en matière de traitement des candidatures et des données des utilisateurs.</li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;