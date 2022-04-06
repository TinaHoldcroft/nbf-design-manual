import Head from 'next/head'
import Colours from './colours'
import Typograpy from './typography'
import styles from '../styles/Logo.module.scss'

export default function Home() {
    return (
        <>
            <Head>
                <title>Design Manual | NBf</title>
                <meta name="description" content="Design Manual for Norges Blindeforbund" />
            </Head>

            <main>
                <img className={styles.logo} src='./logo_black.svg' alt='' />
                <section id='designmanual'>
                    <h1>Blindeforbundet designmanual</h1>
                    <p>Norsk Blindeforbund skal fremstå enhetlig i intern og ekstern kommunikasjon. Her er retningslinjer og eksempel på bruk. Kun virksomheter vi drifter, eier, har formell tilhørighet eller formelt samarbeid med, kan bruke vår visuelle profil. Alle nye designoppdrag skal godkjennes av kommunikasjonsavdelingen før ferdigstilling.</p>
                </section>

                <section id='merkevaren'>
                    <h2>Om merkevaren Blindeforbundet</h2>
                    <div id='introduksjon'>
                        <h3>Introduksjon</h3>
                        <p>Denne designmanualen inneholder retningslinjer, tips og regler for bruk av merkevaren Blindeforbundet.</p>
                        <p>Vi er til for medlemmene våre og setter naturligvis brukervennlighet og universell utforming svært høyt. Derfor håper vi at alle som skal forvalte vår merkevare tar det på alvor. Samtidig ønsker vi å oppfordre til å bruke våre verktøy med med kreativitet og varme.</p>
                    </div>
                    <div id='konsept'>
                        <h3>Merkevarepersonlighet og konsept</h3>
                        <p>Vår merkevarepersonlighet og vårt overordnede merkevarekonsept er det vi legger til grunn for all kommunikasjon utad. Det er et virkemiddel for oss internt og de som jobber med kommunikasjon på våre vegne.</p>
                        <h4>En tydelig og imøtekommende veiviser</h4>
                        <p>En veiviser er en pådriver som tråkker opp stier og ferdes i vanskelige landskap for å sette retning mot målet den reisende har satt seg. Som en kamporganisasjon av og for svaksynte og blinde, baner vi i Blindeforbundet vei i politisk arbeid, og gir oss ikke før målene er nådd. Vi er tydelige i vår kommunikasjon og fremtoning, og vi kommer deg i møte der du er – om du er blind, eller bare ser litt dårlig. Målet vi vandrer mot, er et likestilt samfunn der synsevne ikke påvirker den enkeltes muligheter, frihet og rettigheter, og der vi som svaksynte og blinde får rett hjelp når vi trenger det.</p>
                        <p>Du kan finne veien sammen med Blindeforbundet når din livssituasjon er krevende. Vi er til stede i hverdagen din – nær deg menneskelig, og nær deg geografisk. Vi bruker forskning, faglig kunnskap og erfaring for å hindre synstap og inspirere til læring og mestring, slik at du gjenvinner et optimistisk syn på din egen fremtid. Du vet hva slags liv du vil leve, og vi vet at det dette livet er mulig som svaksynt eller blind. Sammen finner vi nye, mulige veier.</p>
                    </div>
                    <div id='verdier'>
                        <h3>Våre verdier</h3>
                        <h4>Optimistisk</h4>
                        <p>Vi ser mulighetene og er løsningsorienterte. Vi gir folk verktøy og kompetanse til å se dem selv, for vi vet at svaksynte og blinde kan leve fullverdige liv og delta på alle områder i samfunnet. Vi er optimister basert på erfaringen og tryggheten vi har. Vi har alltid jobbet for synshemmedes rettigheter og vet at det nytter, så lenge vi er konstruktive og iherdige.</p>
                        <h4>Offensiv</h4>
                        <p>Vi er en tydelig og sterk pådriver for svaksynte og blindes rettigheter og kjemper for et likestilt samfunn. Vi hever stemmen og har et tydelig budskap og rak rygg på våre medlemmers vegne. I vårt interessepolitiske arbeid er vi utadvendte og synlige, og går i front for synshemmedes rett til et aktivt og selvstendig liv.</p>
                        <h4>Omsorgsfull</h4>
                        <p>Vi viser omsorg gjennom kunnskap, erfaring, nærhet og et tydelig engasjement. Vi har et godt service- og rehabiliteringstilbud og sikrer synshemmede bedre livskvalitet, vi er alltid i nær dialog med medlemmene og jobber utrettelig for å sikre at deres rettigheter er ivaretatt.</p>
                    </div>
                </section>

                <Typograpy />
                <Colours />
            </main>
        </>
    )
}