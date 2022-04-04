import Head from 'next/head'
import Typograpy from './typography'

export default function Home() {
    return (
        <>
            <Head>
                <title>Design Manual | NBf</title>
                <meta name="description" content="Design Manual for Norges Blindeforbund" />
            </Head>

            <main>
                <section>
                    <h1>Blindeforbundet designmanual</h1>
                    <p>Norsk Blindeforbund skal fremstå enhetlig i intern og ekstern kommunikasjon. Her er retningslinjer og eksempel på bruk. Kun virksomheter vi drifter, eier, har formell tilhørighet eller formelt samarbeid med, kan bruke vår visuelle profil. Alle nye designoppdrag skal godkjennes av kommunikasjonsavdelingen før ferdigstilling.</p>
                </section>

                <section>
                    <div id='intro'>
                        <h2>Introduksjon</h2>
                        <p>Denne designmanualen inneholder retningslinjer, tips og regler for bruk av merkevaren Blindeforbundet.</p>
                        <p>Vi er til for medlemmene våre og setter naturligvis brukervennlighet og universell utforming svært høyt. Derfor håper vi at alle som skal forvalte vår merkevare tar det på alvor. Samtidig ønsker vi å oppfordre til å bruke våre verktøy med med kreativitet og varme.</p>
                    </div>
                </section>
                
                <Typograpy/>
            </main>
        </>
    )
}