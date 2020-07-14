class Footprint < ApplicationRecord
  belongs_to :user
  before_save :default_values

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
  end

  def total_score
    self.ble + self.boeuf + self.carotte + self.riz + self.patate + self.saladesaison + self.saladess + self.tomatesfr + self.tomatesfrss + self.veau + self.laitvache + self.poulet + self.oeufs + self.electricite + self.gazkwh + self.gazm + self.fioul + self.granulebois + self.buchebois + self.eau + self.aspirateur + self.congelateur + self.refrigerateur250l + self.fourelectrique + self.lavelinge + self.microonde + self.smartphone + self.ordinateur + self.tgv + self.terelectrique + self.terthermique + self.intercite + self.metro + self.bus + self.avion + self.avionregional + self.essence + self.gazole + self.gpl + self.e85 + self.electrique + self.autre
  end

  def total_voiture
    self.essence + self.gazole + self.gpl + self.e85 + self.electrique
  end

  def total_autre_transport
    self.tgv + self.terelectrique + self.terthermique + self.intercite + self.metro + self.bus + self.avion + self.avionregional
  end

  def total_logement
    self.electricite + self.gazkwh + self.gazm + self.fioul + self.granulebois + self.buchebois + self.eau
  end

  def total_alimentation
    self.ble + self.boeuf + self.carotte + self.riz + self.patate + self.saladesaison + self.saladess + self.tomatesfr + self.tomatesfrss + self.veau + self.laitvache + self.poulet + self.oeufs
  end

  def total_autres
    self.aspirateur + self.congelateur + self.refrigerateur250l + self.fourelectrique + self.lavelinge + self.microonde + self.smartphone + self.ordinateur
  end

  def total_valeur
    self.autre + self.valeur2
  end





end
