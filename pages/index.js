import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Design Manual | NBf</title>
                <meta name="description" content="Design Manual for Norges Blindeforbund" />
            </Head>

            <main>
                <section>
                    <h1>Design Manual</h1>
                </section>
                <section>
                    <div id='intro'>
                        <h2>Intro</h2>
                        <p>Denne designmanualen inneholder retningslinjer, tips og regler for bruk av merkevaren Blindeforbundet.</p>
                        <p>Vi er til for medlemmene våre og setter naturligvis brukervennlighet og universell utforming svært høyt. Derfor håper vi at alle som skal forvalte vår merkevare tar det på alvor. Samtidig ønsker vi å oppfordre til å bruke våre verktøy med med kreativitet og varme.</p>
                    </div>
                </section>
            </main>
        </>
    )
}