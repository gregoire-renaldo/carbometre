class Footprint < ApplicationRecord
  belongs_to :user
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
  end

  def total_score
    ((self.ble*0.439) + (self.boeuf*15) + (self.carotte*0.0706) + (self.riz*3.59) + (self.patate*0.0861) + (self.saladesaison*0.326) + (self.saladess*11.05) + (self.tomatesfr*0.177) + (self.tomatesfrss*2.23) + (self.veau*6.5) + (self.laitvache*0.9) + (self.poulet*2.14) + (self.oeufs*1.72) + (self.electricite*0.571) + (self.gazkwh*0.205) + (self.gazm*2.2) + (self.fioul*3.25) + (self.granulebois*0.11) + (self.buchebois*0.114) + (self.eau*0.132) + (self.aspirateur*52) + (self.congelateur*415) + (self.refrigerateur250l*300) + (self.fourelectrique*217) + (self.lavelinge*305) + (self.microonde*100) + (self.smartphone*15) + (self.ordinateur*150) + (self.tgv*0.00369) + (self.terelectrique*0.00891) + (self.terthermique*0.0798) + (self.intercite*0.0056) + (self.metro*0.0057) + (self.bus*0.092166667) + (self.avion*0.258) + (self.avionregional*0.453) + (self.essence*2.8) + (self.gazole*3.16) + (self.gpl*1.86) + (self.e85*1.68) + (self.electrique*0.071) + (self.autre) + (self.valeur2)).ceil(2)
  end

  def total_voiture
    ((self.essence*2.8) + (self.gazole*3.16) + (self.gpl*1.86) + (self.e85*1.68) + (self.electrique*0.071)).ceil(2)
  end

  def total_autre_transport
    ((self.tgv*0.00369) + (self.terelectrique*0.00891) + (self.terthermique*0.0798) + (self.intercite*0.0056) + (self.metro*0.0057) + (self.bus*0.092166667) + (self.avion*0.258) + (self.avionregional*0.453)).ceil(2)
  end

  def total_logement
    ((self.electricite*0.0571) + (self.gazkwh*0.205) + (self.gazm*2.2) + (self.fioul*3.25) + (self.granulebois*0.11) + (self.buchebois*0.114) + (self.eau*0.132)).ceil(2)
  end

  def total_alimentation
    ((self.ble*0.439) + (self.boeuf*15) + (self.carotte*0.0706) + (self.riz*3.59) + (self.patate*0.0861) + (self.saladesaison*0.326) + (self.saladess*0.1105) + (self.tomatesfr*0.177) + (self.tomatesfrss*2.23) + (self.veau*6.5) + (self.laitvache*0.9) + (self.poulet*2.14) + (self.oeufs*1.72)).ceil(2)
  end

  def total_autres
    ((self.aspirateur*52) + (self.congelateur*415) + (self.refrigerateur250l*300) + (self.fourelectrique*217) + (self.lavelinge*305) + (self.microonde*100) + (self.smartphone*15) + (self.ordinateur*150) + (self.streaming*25)).ceil(2)
  end

  def total_valeur
    (self.autre  + self.valeur2).ceil(2)
  end

  # def calculations
  #   unless self.ble == nil
  #      self.ble * 0.439
  #   end
  #   unless self.carotte == nil
  #      self.carotte * 0.0706
  #   end
  #   unless self.boeuf == nil
  #      self.boeuf * 15
  #   end
  #   unless self.riz == nil
  #      self.riz * 3.59
  #   end
  #   unless self.patate == nil
  #      self.patate * 0.0861
  #   end
  #   unless self.saladesaison == nil
  #      self.saladesaison * 0.326
  #   end
  #   unless self.saladess == nil
  #      self.saladess * 11.05
  #   end
  #   unless self.tomatesfr == nil
  #      self.tomatesfr * 0.177
  #   end
  #   unless self.tomatesfrss == nil
  #      self.tomatesfrss * 2.23
  #   end
  #   unless self.veau == nil
  #      self.veau * 6.5
  #   end
  #   unless self.laitvache == nil
  #      self.laitvache * 0.9
  #   end
  #   unless self.poulet == nil
  #      self.poulet * 2.14
  #   end
  #   unless self.oeufs == nil
  #      self.oeufs * 1.72
  #   end
  #   unless self.electricite == nil
  #      self.electricite * 0.0571
  #   end
  #   unless self.gazkwh == nil
  #      self.gazkwh * 0.205
  #   end
  #   unless self.gazm == nil
  #      self.gazm * 2.2
  #   end
  #   unless self.fioul == nil
  #      self.fioul * 3.25
  #   end
  #   unless self.granulebois == nil
  #      self.granulebois * 0.111
  #   end
  #   unless self.buchebois == nil
  #      self.buchebois * 0.114
  #   end
  #   unless self.eau == nil
  #      self.eau * 0.132
  #   end
  #   unless self.aspirateur == nil
  #      self.aspirateur * 52
  #   end
  #   unless self.congelateur == nil
  #      self.congelateur * 415
  #   end
  #   unless self.refrigerateur250l == nil
  #      self.refrigerateur250l * 300
  #   end
  #   unless self.fourelectrique == nil
  #      self.fourelectrique * 217
  #   end
  #   unless self.lavelinge == nil
  #      self.lavelinge * 305
  #   end
  #   unless self.microonde == nil
  #      self.microonde * 100
  #   end
  #   unless self.smartphone == nil
  #      self.smartphone * 15
  #   end
  #   unless self.ordinateur == nil
  #      self.ordinateur * 150
  #   end
  #   unless self.tgv == nil
  #      self.tgv * 0.00369
  #   end
  #   unless self.terelectrique == nil
  #      self.terelectrique * 0.00891
  #   end
  #   unless self.terthermique == nil
  #      self.terthermique * 0.0798
  #   end
  #   unless self.intercite == nil
  #      self.intercite * 0.0056
  #   end
  #   unless self.metro == nil
  #      self.metro * 0.0057
  #   end
  #   unless self.bus == nil
  #      self.bus * 0.09216
  #   end
  #   unless self.avion == nil
  #      self.avion * 0.258
  #   end
  #   unless self.avionregional == nil
  #      self.avionregional * 0.453
  #   end
  #   unless self.essence == nil
  #      self.essence * 2.8
  #   end
  #   unless self.gazole == nil
  #      self.gazole * 3.16
  #   end
  #   unless self.gpl == nil
  #      self.gpl * 1.86
  #   end
  #   unless self.e85 == nil
  #      self.e85 * 1.68
  #   end
  #   unless self.electrique == nil
  #      self.electrique * 0.0571
  #   end
  #   unless self.autre == nil
  #      self.autre * 1
  #   end
  #   unless self.valeur2 == nil
  #      self.valeur2 * 1
  #   end
  # end




end
