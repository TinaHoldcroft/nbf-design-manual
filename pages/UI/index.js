export default function UI() {
    return (
        <>
            <section id='layout'>
                <h2>Layout og grafiske elementer</h2>
                <div>
                    <h3>Ledelinjer</h3>
                    <p>Ledelinjer er et arkitektonisk virkemiddel som hjelper blinde og svaksynte med å navigere i fysisk rom - både inne og ute. Når man navigerer på en nettside med høy zoom har man ofte en utfordring med å se hvor man er på siden, hvor noe begynner og hvor noe slutter.Derfor har vi tatt med oss konseptet "Veiviser inn i layouten og i de grafiske elementene og videreført ledelinjene. I kombinasjon med infobokser inspirert av skilting utviklet vi et unikt grafisk univers for svaksynte. Først og fremst funksjonelt, men også et verktøy man i stor grad skal kunne være kreativ med og kommunisere med. Ledelinjene kan benyttes horisontalt eller vertikalt eller som mer levende linjer som flyter inn i tekstene. Linjene benyttes primært i sort. Se eksempler på kampanjer og lignende.</p>
                    [photo]
                    [photo]
                    [photo]
                </div>
                <div>
                    <h3>Informasjonsbokser</h3>
                    <p>Som en del av design systemet benyttes også en rekke informasjonsbokser ved behov, disse kan benyttes i ulike farger avhengig av viktighetsgraden av informasjonene inni boksen. Disse boksene har alltid avrundede hjørner for å fremstå mer vennlige.</p>
                    <p>Radiusen på hjørnene er 30 px på digitale flater og ca 6mm på trykte flater, men merk at avvik vil komme på trykte flater da man forholder seg til ulike formater og radiusen på sees i sammenheng med helheten. </p>
                    [photo]
                    [photo]
                </div>
                <div>
                    <h3>Iteraksjonseelementer digitale flater</h3>
                    <p>Til digitale flater er det utviklet en rekke ulike elementer som knapper, tekstfelt  oguike moduler. Dette er dokumenter i en Figma fil, kontakt IT for mer informasjon.</p>
                    <div>
                        <h4>Knapper</h4>
                        <div>
                            <div>
                                <h5>Primær</h5>
                                <button className='primary'>Default</button>
                                <button className='primary hover'>Hover</button>
                                <button className='primary disabled'>Disabled</button>
                                <button className='primary focus'>Focus</button>
                            </div>
                            <div>
                                <h5>Sekundær</h5>
                                <div className='secondary-wrapper'>
                                    <div>
                                        <button className='secondary peach'>Default</button>
                                        <button className='secondary peach hover'>Hover</button>
                                        <button className='secondary peach disabled'>Disabled</button>
                                        <button className='secondary peach focus'>Focus</button>
                                    </div>
                                    <div>
                                        <button className='secondary black'>Default</button>
                                        <button className='secondary black hover'>Hover</button>
                                        <button className='secondary black disabled'>Disabled</button>
                                        <button className='secondary black focus'>Focus</button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h5>Ekstra</h5>
                                <button className='menu'>
                                    <>
                                        <div className='icon'>
                                            <span className='bar' />
                                            <span className='bar' />
                                            <span className='bar' />
                                        </div>
                                        <p>meny</p>
                                    </>
                                </button>
                                <button className='menu active'>
                                    <>
                                        <div className='icon'>
                                            <span className='bar' />
                                            <span className='bar' />
                                            <span className='bar' />
                                        </div>
                                        <p>lukk</p>
                                    </>
                                </button>
                                <button className='theme'>bakgrunn</button>
                                <button className='search'>søk</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}