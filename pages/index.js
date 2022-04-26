import Head from 'next/head'
import Brand from './brand'
import Colours from './colours'
import Typograpy from './typography'

export default function Home() {
    return (
        <>
            <Head>
                <title>Design Manual | NBf</title>
                <meta name="description" content="Design Manual for Norges Blindeforbund" />
            </Head>

            <section id='designmanual'>
                <h1>Blindeforbundet designmanual</h1>
                <p>Norsk Blindeforbund skal fremstå enhetlig i intern og ekstern kommunikasjon. Her er retningslinjer og eksempel på bruk. Kun virksomheter vi drifter, eier, har formell tilhørighet eller formelt samarbeid med, kan bruke vår visuelle profil. Alle nye designoppdrag skal godkjennes av kommunikasjonsavdelingen før ferdigstilling.</p>
            </section>
            
            <Brand />
            <Colours />
            <Typograpy />
        </>
    )
}