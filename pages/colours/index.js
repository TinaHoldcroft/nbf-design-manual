export default function Colours() {
    return (
        <section id='farger'>
            <h2>Farger</h2>
            <div>
                <p>Gul er hovedfargen til Blindeforbundet. Det er den fargen folk kjenner oss i og den representerer kjerneverdien vår Optimisme. Det sammenfaller også med konseptet En tydelig og imøtekommende veiviser ved å lyse opp og være tydelig. Sort og hvitt brukes aktivt for å underbygge gulfargen og for oppnå størst mulig kontrast for lesbarhet. Sekundærfargene våre er fersken, samt grader av den og gult. Slik får vi en varme og noe menneskelig inn sammen med typografien og linjene.</p>
                <p>Som støttefarger til UX-elementer og andre spesielle behov er gråtoner og mørkerød valgt ut.</p>
            </div>
            <div>
                <h3>Positiv og negativ fargebruk</h3>
                <p>Mange med synshemninger bruker såkalt darkmode på skjerm. Siden skjermen er en lyskilde opplever mange at store, hvite skjermflater er blendende og slitsomme å lese av. Derfor er fargene optimalisert for å kunne brukes både på hvit og på sort bakgrunn. </p>
            </div>
            <div>
                <h3>Fargekoder</h3>
                <p>Farger er en viktig del av Norges Blindeforbund sin identitet. Profilfargene skal alltid gjengis med de fargeverdiene som er oppgitt her.Det finnes ulike fargekoder til ulike produksjonsmetoder. Skjerm: HEX# eller RGB. Trykk: CMYK og PMS. Fargene er spesifisert i 100% farge, men det er tillatt med bruk av gradienter av disse i dag henholdsvis 65% og 25%</p>
                <div className='color-box-wrapper'>
                    <div className='color-box'>
                        <input type='color' id='gul' name='gul' value='#FFDF00' readOnly />
                        <div className='txt'>
                            <label htmlFor='gul'>gul</label>
                            <p>PMS: 109</p>
                            <p>CMYK: 0/9/100/0</p>
                            <p>RGB: 255/233/0</p>
                            <p>#FFDF00</p>
                        </div>
                    </div>
                    <div className='color-box'>
                        <input type='color' id='fersken' name='fersken' value='#FFA76A' readOnly />
                        <div className='txt'>
                            <label htmlFor='fersken'>fersken</label>
                            <p>PMS: 714</p>
                            <p>CMYK: 0/45/64/0</p>
                            <p>RGB: 255/167/106</p>
                            <p>#FFA76A</p>
                        </div>
                    </div>
                    <div className='color-box'>
                        <input type='color' id='sort' name='sort' value='#000000' readOnly />
                        <div className='txt'>
                            <label htmlFor='sort'>sort</label>
                            <p>PMS: 714</p>
                            <p>CMYK: 0/0/0/100</p>
                            <p>RGB: 0/0/0</p>
                            <p>#000000</p>
                        </div>
                    </div>
                    <div className='color-box'>
                        <input type='color' id='hvit' name='hvit' value='#FFFFFF' readOnly />
                        <div className='txt'>
                            <label htmlFor='hvit'>hvit</label>
                            <p>PMS: 714</p>
                            <p>CMYK: 0/0/0/0</p>
                            <p>RGB: 55/255/255</p>
                            <p>#FFFFFF</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}