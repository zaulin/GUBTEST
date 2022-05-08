const jsonData = {
   "situacions" : [
 {
  "situacio": "Abús sexual",
  "actes": "N01,A108,A109,N02,A106,A17,G30",
  "extra": null
 },
 {
  "situacio": "Agresió sexual",
  "actes": "N01,A108,A109,N02,A17,G30",
  "extra": "Ha d'existir violència o intimidació.\n\nAgreujant:\n\nAccès carnal"
 },
 {
  "situacio": "ViGe",
  "actes": "N01,A108,A109,A106,N02,N101,A17,G30",
  "extra": "Home (parella o ex) agredeix a la víctima (amb o sense convivència)\n\nAgreujants:\n\n- Fer servir armes\n- Al domicili familiar\n- En presència de menors"
 },
 {
  "situacio": "Maltractament d'obra",
  "actes": "N02,N09,A18,N10",
  "extra": "Requereix denúncia de la víctima"
 },
 {
  "situacio": "Robatori amb força",
  "actes": "N01,A108,A109,N02,A31,A56,G30",
  "extra": "Es considera també robatori amb força si la força s'exerceix per abandonar el lloc"
 },
 {
  "situacio": "Usurpació (okupes)",
  "actes": "N09,N02,A31,G133",
  "extra": "Si es tracta d'un edifici públic: GUB - UI\nSi es tracta d'un edifici privat: CME"
 },
 {
  "situacio": "Falsetat documental",
  "actes": "N01,A108,A109,I55",
  "extra": "És falsetat documental fer servir un document verdader per una persona que no es la titular"
 },
 {
  "situacio": "Salud pública",
  "actes": "N01,A108,A20,A109,I55,A17",
  "extra": "Dues A108 pel venedor: Una pels diners i l'altre per la droga\nSi el comprador te droga se li fa una altra A108\nEl comprador és testimoni del delicte: A17\nEl mateix agent signa A108 i A20\n\nDOSIS SUPERIOR A CONSUM PROPI:\n\n- Marihuana: 100g\n- Haixix: 50g\n- Cocaina: 12-15g\n- Heroina: 6-8g\n- MDMA: 3g\n- Èxtasi: 3g\n- Metamfetamina: 0,7g\n- Pastilles de síntesis: 20 unitats"
 },
 {
  "situacio": "Furt",
  "actes": "N09,N10,A108,A35,N02,A56,A57,A18,N10",
  "extra": "N10 per a investigat, perjudicat i agent."
 },
 {
  "situacio": "Furt +400€",
  "actes": "N01,A108,A109,N02,A56,G30,A17",
  "extra": "Agreujants:\n\n- Furtar cables amb greu perjudici\n- Productes agraris amb greu perjudici\n- Valor artístic\/històric\n- Objectes de 1ª necesitat (desabastiment)\n- Desamparament de la víctima\n- Aprofitant-se d'un accident\n- Fer servir menors"
 },
 {
  "situacio": "Apropiació indeguda",
  "actes": "N09,A108,N02,A56",
  "extra": null
 },
 {
  "situacio": "Apropiació indeguda +400€",
  "actes": "N01,A108,A109",
  "extra": "Si l'autor s'ha trobat l'objecte sempre serà un delicte lleu independentment del valor de l'objecte."
 },
 {
  "situacio": "Robatori\/furt ús de vehícle",
  "actes": "N08,G30,A108,N02,A33,G30",
  "extra": "Ingresar el vehícle a disposició judicial."
 },
 {
  "situacio": "Amenaces lleus",
  "actes": "N09,A108,N02,A18",
  "extra": "Requereix denúncia de la víctima\nAmb o sense armes (si hi ha arma s'intervé amb A108)\nMostrar arma en baralla\nAmenaça lleu"
 },
 {
  "situacio": "Amenaces",
  "actes": "N09,A108,N02,A17,G30",
  "extra": "En ViGe és amb o sense arma\nEn ViDo és AMB arma\nResta de delictes: amb o sense arma\nL'amenaça ha de ser directe i creïble\nLa diferència amb el delicte lleu es la por que es produeix en la víctima"
 },
 {
  "situacio": "Atemptat",
  "actes": "N01,A108,A109,N02",
  "extra": "S'ha de fer document per la mutua laboral\nS'han de tipificar també les lesions\nS'ha de trucar a Molins advocats\n\nAgreujants:\n- Fer ús armes\/objectes perillosos\n- Potencial perill per la vida"
 },
 {
  "situacio": "Resistència",
  "actes": "N01,A108,A109,N02",
  "extra": "Ha d'impedir les funcions dels agents."
 },
 {
  "situacio": "Desobediéncia greu",
  "actes": "N01,A108,A109,N02",
  "extra": "Ha d'impedir les funcions dels agents."
 },
 {
  "situacio": "Receptació",
  "actes": "N01,A108,A109",
  "extra": "Ha d'haver previament un delicte contra el patrimoni.\nEl comet la persona que compra o es beneficia SENSE haver participat en el delicte precedent.\nL'autor ha de saber o sospitar de la procedència il·licita de l'objecte."
 },
 {
  "situacio": "Vermell",
  "actes": "N01,A55,A109",
  "extra": "Fer copia del requeriment de detenció\nOmplir el llibre de detinguts"
 },
 {
  "situacio": "Estafa",
  "actes": "N09,A108,N02,A17",
  "extra": "Ha d'haver: ànim de lucre i engany suficient.\nEs considera estafa fer servir targetes de crèdit o dèbit."
 },
 {
  "situacio": "Estafa +400€",
  "actes": "N01,A108,A109,N02,A17,G30",
  "extra": "Ha d'haver: ànim de lucre i engany suficient.\nEs considera estafa fer servir targetes de crèdit o dèbit."
 },
 {
  "situacio": "Danys",
  "actes": "N09,A108,N02,A33,A31,A17",
  "extra": null
 },
 {
  "situacio": "Danys +400€",
  "actes": "N01,A108,A109,N02,A33,A31,A17",
  "extra": null
 },
 {
  "situacio": "Conduir sota influència alcohol",
  "actes": "T100",
  "extra": "Taxa > 0,43"
 },
 {
  "situacio": "Alcoholèmia penal",
  "actes": "T101,A21,T102,T100,A13,T104",
  "extra": null
 },
 {
  "situacio": "Negativa proves alcohol\/drogues",
  "actes": "A101,A21,T102,N01,T100,T104",
  "extra": null
 }
]
}
