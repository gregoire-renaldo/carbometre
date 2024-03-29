class Footprint < ApplicationRecord
  # belongs_to :user
  before_save :default_values, :total_score

  validates_length_of :title, maximum: 21, allow_blank: true

  def default_values


    self.ble = 0 if self.ble.nil?
    self.carotte = 0 if self.carotte.nil?
    self.boeuf = 0 if self.boeuf.nil?
    self.riz = 0 if self.riz.nil?
    self.patate = 0 if self.patate.nil?
    self.saladesaison = 0 if self.saladesaison.nil?
    self.saladess = 0 if self.saladess.nil?
    self.tomatesfr = 0 if self.tomatesfr.nil?
    self.tomatesfrss = 0 if self.tomatesfrss.nil?
    self.veau = 0 if self.veau.nil?
    self.laitvache = 0 if self.laitvache.nil?
    self.poulet = 0 if self.poulet.nil?
    self.oeufs = 0 if self.oeufs.nil?
    self.electricite = 0 if self.electricite.nil?
    self.gazkwh = 0 if self.gazkwh.nil?
    self.gazm = 0 if self.gazm.nil?
    self.fioul = 0 if self.fioul.nil?
    self.granulebois = 0 if self.granulebois.nil?
    self.buchebois = 0 if self.buchebois.nil?
    self.eau = 0 if self.eau.nil?
    self.aspirateur = 0 if self.aspirateur.nil?
    self.congelateur = 0 if self.congelateur.nil?
    self.refrigerateur250l = 0 if self.refrigerateur250l.nil?
    self.fourelectrique = 0 if self.fourelectrique.nil?
    self.lavelinge = 0 if self.lavelinge.nil?
    self.microonde = 0 if self.microonde.nil?
    self.smartphone = 0 if self.smartphone.nil?
    self.ordinateur = 0 if self.ordinateur.nil?
    self.tgv = 0 if self.tgv.nil?
    self.terelectrique = 0 if self.terelectrique.nil?
    self.terthermique = 0 if self.terthermique.nil?
    self.intercite = 0 if self.intercite.nil?
    self.metro = 0 if self.metro.nil?
    self.bus = 0 if self.bus.nil?
    self.avion = 0 if self.avion.nil?
    self.avionregional = 0 if self.avionregional.nil?
    self.essence = 0 if self.essence.nil?
    self.gazole = 0 if self.gazole.nil?
    self.gpl = 0 if self.gpl.nil?
    self.e85 = 0 if self.e85.nil?
    self.electrique = 0 if self.electrique.nil?
    self.autre = 0 if self.autre.nil?
    self.valeur2 = 0 if self.valeur2.nil?
    self.streaming = 0 if self.streaming.nil?
    self.lessence = 0 if self.lessence.nil?
    self.kmessence = 0 if self.kmessence.nil?
    self.gazolel = 0 if self.gazolel.nil?
    self.kmgazolel = 0 if self.kmgazolel.nil?
    self.lgpl = 0 if self.lgpl.nil?
    self.kmgpl = 0 if self.kmgpl.nil?
    self.le85 = 0 if self.le85.nil?
    self.kme85 = 0 if self.kme85.nil?
    self.lelectrique = 0 if self.lelectrique.nil?
    self.kmelectrique = 0 if self.kmelectrique.nil?
    self.person = 1 if self.person.nil?
    self.streaming = 0 if self.person.nil?
    self.mail = 0 if self.mail.nil?
    self.tweet = 0 if self.tweet.nil?
    self.voiture = 0 if self.voiture.nil?
    self.voitureelec = 0 if self.voitureelec.nil?
    self.velo = 0 if self.velo.nil?
    self.veloelec = 0 if self.veloelec.nil?
    self.voitureasie = 0 if self.voitureasie.nil?
    self.voitureasieelec = 0 if self.voitureasieelec.nil?
    self.jeanmonde = 0 if self.jeanmonde.nil?
    self.jeanfr = 0 if self.jeanfr.nil?
    self.appartemnentneuf = 0 if self.appartemnentneuf.nil?
    self.voitgaznatkg = 0 if self.voitgaznatkg.nil?
    self.voitgaznatkwh = 0 if self.voitgaznatkwh.nil?
    self.voitgaznatkwh = 0 if self.voitgaznatkwh.nil?
    self.eauusee = 0 if self.eauusee.nil?
    self.dechets = 0 if self.dechets.nil?
    self.agneau = 0 if self.agneau.nil?
    self.truite = 0 if self.truite.nil?
    self.truite = 0 if self.truite.nil?
    self.crevette = 0 if self.crevette.nil?
    self.poissonpecheeuro = 0 if self.poissonpecheeuro.nil?
    self.poissonpechetropico = 0 if self.poissonpechetropico.nil?
    self.pomme = 0 if self.pomme.nil?
    self.voitureelecmoins50 = 0 if self.voitureelecmoins50.nil?
    self.voitureelecplus50 = 0 if self.voitureelecplus50.nil?
    self.trotinette = 0 if self.trotinette.nil?
    self.chemisecoton = 0 if self.chemisecoton.nil?
    self.chemiseviscose = 0 if self.chemiseviscose.nil?
    self.tshirtcoton = 0 if self.tshirtcoton.nil?
    self.tshirtpoly = 0 if self.tshirtpoly.nil?
    self.polaire = 0 if self.polaire.nil?
    self.pullacrylique = 0 if self.pullacrylique.nil?
    self.pullenlaine = 0 if self.pullenlaine.nil?
    self.sweat = 0 if self.sweat.nil?
    self.polo = 0 if self.polo.nil?
    self.robecoton = 0 if self.robecoton.nil?
    self.robepolyester = 0 if self.robepolyester.nil?
    self.chaussuretissu = 0 if self.chaussuretissu.nil?
    self.chaussuresport = 0 if self.chaussuresport.nil?
    self.anorak = 0 if self.anorak.nil?
    self.voitgaznat = 0 if self.voitgaznat.nil?
  end

  def total_score
    (total_voiture + total_autre_transport + total_logement + total_alimentation + total_autres + total_valeur + total_vetements + total_divers + (self.person*1500)).ceil(2)
  end

  def score_person
    (((total_voiture + total_autre_transport + total_logement + total_alimentation + total_autres + total_valeur + total_vetements + total_divers) / self.person).ceil(2)) + 1500
  end

  def total_voiture
    ( total_electriquel + total_e85l + total_gpll + total_essencel + total_gazolel + (self.essence*2.7) + (self.gazole*3.1) + (self.gpl*1.86) + (self.e85*1.11) + (self.electrique*0.071) + total_gazl  + (self.voitgaznat * 3.22)  ).ceil(2)
  end

  def total_essencel
    (((self.lessence/100) * self.kmessence*2.7)).ceil(2)
  end

  def total_gazolel
    (((self.gazolel/100) * self.kmgazolel*3.1)).ceil(2)
  end

  def total_gpll
    (((self.lgpl/100) * self.kmgpl*1.86)).ceil(2)
  end

  def total_e85l
    (((self.le85/100) * self.kme85*1.11)).ceil(2)
  end
  def total_gazl
    (((self.voitgaznatkwh/100) * self.voitgaznatkg*3.22)).ceil(2)
  end

  def total_electriquel
    (((self.lelectrique/100) * self.kmelectrique*0.052)).ceil(2)
  end

  def total_autre_transport
    ((self.tgv*0.00293) + (self.terelectrique*0.0277) + (self.terthermique*0) + (self.intercite*0.00898) + (self.metro*0.00978) + (self.bus*0.092166667) + (self.avion*0.178) + (self.avionregional*0.258)).ceil(2)
  end

  def total_logement
    ((self.electricite*0.052) + (self.gazkwh*0.243 ) + (self.gazm*2.32) + (self.fioul*3.24) + (self.granulebois*0.11) + (self.buchebois*0.114) + (self.eau*0.132) + (self.eauusee*0.262) + (self.dechets*0.172)).ceil(2)
  end

  def total_alimentation
    ((self.ble*0.439) + (self.boeuf*15) + (self.carotte*0.0706) + (self.riz*3.59) + (self.patate*0.0861) + (self.saladesaison*0.326) + (self.saladess*11.05) + (self.tomatesfr*0.177) + (self.tomatesfrss*2.23) + (self.veau*6.5) + (self.laitvache*0.9) + (self.poulet*2.14) + (self.oeufs*1.72) + (self.agneau*6) + (self.truite*3.08) + (self.crevette*9.3) + (self.poissonpecheeuro*1.9) + (self.poissonpechetropico*3.8) + (self.pomme*0.0675)            ).ceil(2)
  end

  def total_vetements
    ( (self.jeanfr*15) + (self.jeanmonde*23) + (self.chemisecoton*11) + (self.chemiseviscose*10) + (self.tshirtcoton*5) + (self.tshirtpoly*6) + (self.polaire*24) + (self.pullacrylique*26) + (self.pullenlaine*53)+ (self.sweat*27) + (self.polo*8) + (self.robecoton*50) + (self.robepolyester*52) + (self.chaussuretissu*17) + (self.chaussuresport*19) + (self.anorak*39) ).ceil(2)
  end

  def total_autres
    ((self.appartemnentneuf*500) + (self.voitureasieelec*15) +  (self.voitureelec*7.6) + (self.voiture*5.5) + (self.velo*100) + (self.veloelec*160) + (self.aspirateur*52) + (self.congelateur*415) + (self.refrigerateur250l*300) + (self.fourelectrique*217) + (self.lavelinge*315) + (self.microonde*100) + (self.smartphone*15) + (self.ordinateur*150) + (self.voitureelecmoins50*11000) + (self.voitureelecplus50*14500) + (self.trotinette*92)     ).ceil(2)
  end

  def total_divers
    ((self.streaming*0.25) + (self.mail*0.035) + (self.tweet*0.00002)).ceil(2)
  end


  def total_valeur
    (self.autre  + self.valeur2).ceil(2)
  end

end
