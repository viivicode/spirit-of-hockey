// ============================================================
//  SPIRIT OF HOCKEY — SIVUN KAIKKI SISÄLLÖT
// ============================================================
//  Muokkausohjeet:
//  • Muuta VAIN lainausmerkkien "..." sisällä olevaa tekstiä
//    tai pelkkiä numeroita (esim. voitot: 6).
//  • Älä poista lainausmerkkejä, pilkkuja tai sulkuja.
//  • Rivin voi kopioida uudeksi riviksi (esim. uusi pelaaja):
//    kopioi koko { ... }, ja lisää pilkku edellisen perään.
//  • Tallenna (GitHubissa: Commit changes) → sivu päivittyy
//    automaattisesti noin minuutissa.
// ============================================================

const SISALTO = {

  // ---------- SELAIMEN VÄLILEHDEN OTSIKKO ----------
  sivunOtsikko: "Spirit of Hockey — International U20 Hockey Program in Finland",

  // ---------- YLÄVALIKKO ----------
  valikko: [
    { teksti: "HOME",      linkki: "#",          aktiivinen: true  },
    { teksti: "TEAM",      linkki: "#team",      aktiivinen: false },
    { teksti: "SCHEDULE",  linkki: "#schedule",  aktiivinen: false },
    { teksti: "STANDINGS", linkki: "#standings", aktiivinen: false },
    { teksti: "APPLY",     linkki: "#apply",     aktiivinen: false },
    { teksti: "CONTACT",   linkki: "#contact",   aktiivinen: false }
  ],

  // ---------- ETUSIVUN ISO OTSIKKO JA NAPIT ----------
  hero: {
    otsikkoRivi1: "Spirit of",
    otsikkoRivi2: "Hockey",
    alaotsikko:   "INTERNATIONAL U20 HOCKEY PROGRAM IN FINLAND",
    nappi1: { pieniTeksti: "APPLY FOR THE", isoTeksti: "2027–28 ROSTER", linkki: "#apply" },
    nappi2: { pieniTeksti: "MEET",          isoTeksti: "THE TEAM",       linkki: "#team"  }
  },

  // ---------- INFOPALKKI (4 laatikkoa) ----------
  infopalkki: {
    seuraavaPeli: {
      otsikko: "NEXT GAME",
      rivi1: "vs. TPS Turku",              // lihavoitu rivi
      rivi2: "MAY 24, 2025 • 18:00 EEST",
      rivi3: "RAISIO ICE ARENA"
    },
    viimeisinTulos: {
      otsikko: "LATEST RESULT",
      rivi1: "W 5–2 vs. JYP Jyväskylä",    // lihavoitu rivi
      rivi2: "MAY 17, 2025",
      rivi3: "RAISIO ICE ARENA"
    },
    kansainvalisetPelaajat: {
      otsikko: "INTERNATIONAL PLAYERS",
      iso_numero: "18",
      alateksti: "FROM 9 COUNTRIES"
    },
    treenit: {
      otsikko: "ELITE TRAINING",
      rivi1: "HIGH PERFORMANCE COACHING",
      rivi2: "WORLD-CLASS FACILITIES",
      rivi3: "ACADEMIC SUPPORT"
    }
  },

  // ---------- PELAAJAT ----------
  // lippu-vaihtoehdot tällä hetkellä: "fi" (Suomi), "de" (Saksa), "se" (Ruotsi)
  // kuva: laita kuvatiedoston nimi (esim. "aleksi.png") tai jätä null,
  //       jolloin näytetään piirretty pelaajahahmo.
  pelaajat: {
    otsikko: "FEATURED PLAYERS",
    linkkiTeksti: "VIEW ALL ›",
    linkki: "#team",
    lista: [
      { numero: 27, nimi: "Aleksi Korhonen", pelipaikka: "F", maa: "FINLAND", lippu: "fi", kuva: null },
      { numero: 15, nimi: "Lucas Berger",    pelipaikka: "D", maa: "GERMANY", lippu: "de", kuva: null },
      { numero: 9,  nimi: "Jacob Lindström", pelipaikka: "F", maa: "SWEDEN",  lippu: "se", kuva: null }
    ]
  },

  // ---------- OTTELUOHJELMA ----------
  // vari1 ja vari2 = joukkueen pallukan värit (vaalea ja tumma)
  ottelut: {
    otsikko: "SCHEDULE / RESULTS",
    linkkiTeksti: "FULL SCHEDULE ›",
    linkki: "#schedule",
    lista: [
      { pvm: "MAY 24", lyhenne: "TPS", vari1: "#2b5cb8", vari2: "#0e1f44", vastustaja: "vs. TPS Turku",          aika: "18:00 EEST", halli: "Raisio Ice Arena" },
      { pvm: "MAY 31", lyhenne: "KÄR", vari1: "#5a4c3a", vari2: "#241c10", vastustaja: "vs. Kärpät Oulu",        aika: "17:00 EEST", halli: "Oulu Arena" },
      { pvm: "JUN 07", lyhenne: "JYP", vari1: "#3a6fd0", vari2: "#122a58", vastustaja: "@ JYP Jyväskylä",        aika: "17:00 EEST", halli: "Lähitapiola Areena" },
      { pvm: "JUN 14", lyhenne: "SAI", vari1: "#e8b923", vari2: "#7a5a00", vastustaja: "vs. SaiPa Lappeenranta", aika: "16:00 EEST", halli: "Raisio Ice Arena" },
      { pvm: "JUN 21", lyhenne: "TAP", vari1: "#e0642a", vari2: "#6e2408", vastustaja: "@ Tappara Tampere",      aika: "17:00 EEST", halli: "Nokia Arena" }
    ]
  },

  // ---------- SARJATAULUKKO ----------
  // oma: true = rivi korostetaan sinisellä (oma joukkue)
  // o = ottelut, v = voitot, h = häviöt, jv = jatkoaikahäviöt, p = pisteet
  sarjataulukko: {
    otsikko: "STANDINGS",
    linkkiTeksti: "VIEW FULL STANDINGS ›",
    linkki: "#standings",
    joukkueet: [
      { sija: 1, lyhenne: "SOH", vari1: "#e8eef5", vari2: "#8fa0b8", nimi: "Spirit of Hockey", o: 8, v: 6, h: 1, jv: 1, p: 13, oma: true  },
      { sija: 2, lyhenne: "TPS", vari1: "#2b5cb8", vari2: "#0e1f44", nimi: "TPS Turku",        o: 8, v: 6, h: 2, jv: 0, p: 12, oma: false },
      { sija: 3, lyhenne: "KÄR", vari1: "#5a4c3a", vari2: "#241c10", nimi: "Kärpät Oulu",      o: 8, v: 5, h: 2, jv: 1, p: 11, oma: false },
      { sija: 4, lyhenne: "JYP", vari1: "#3a6fd0", vari2: "#122a58", nimi: "JYP Jyväskylä",    o: 8, v: 4, h: 3, jv: 1, p: 9,  oma: false },
      { sija: 5, lyhenne: "TAP", vari1: "#e0642a", vari2: "#6e2408", nimi: "Tappara Tampere",  o: 8, v: 3, h: 4, jv: 1, p: 7,  oma: false }
    ]
  },

  // ---------- ALAPALKKI (FOOTER) ----------
  footer: {
    nimi: "SPIRIT OF HOCKEY",
    kuvaus: "International U20 Hockey Program in Finland",
    linkit: [
      { teksti: "ABOUT US", linkki: "#" },
      { teksti: "NEWS",     linkki: "#" },
      { teksti: "ALUMNI",   linkki: "#" },
      { teksti: "PARTNERS", linkki: "#" },
      { teksti: "FAQ",      linkki: "#" }
    ],
    some: {
      instagram: "#",
      youtube:   "#",
      x:         "#",
      sahkoposti: "info@spiritofhockey.fi"
    }
  }
};
