# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_16_151858) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "footprints", force: :cascade do |t|
    t.float "ble"
    t.float "carotte"
    t.float "boeuf"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.float "riz"
    t.float "patate"
    t.float "saladesaison"
    t.float "saladess"
    t.float "tomatesfr"
    t.float "tomatesfrss"
    t.float "veau"
    t.float "laitvache"
    t.float "poulet"
    t.float "oeufs"
    t.float "electricite"
    t.float "gazkwh"
    t.float "gazm"
    t.float "fioul"
    t.float "granulebois"
    t.float "buchebois"
    t.float "eau"
    t.float "aspirateur"
    t.float "congelateur"
    t.float "refrigerateur250l"
    t.float "fourelectrique"
    t.float "lavelinge"
    t.float "microonde"
    t.float "smartphone"
    t.float "ordinateur"
    t.float "tgv"
    t.float "terelectrique"
    t.float "terthermique"
    t.float "intercite"
    t.float "metro"
    t.float "bus"
    t.float "avion"
    t.float "avionregional"
    t.float "essence"
    t.float "gazole"
    t.float "gpl"
    t.float "e85"
    t.float "electrique"
    t.string "title"
    t.float "autre"
    t.float "valeur2"
    t.float "streaming"
    t.float "lessence"
    t.float "kmessence"
    t.float "gazolel"
    t.float "kmgazolel"
    t.float "lgpl"
    t.float "kmgpl"
    t.float "le85"
    t.float "kme85"
    t.float "lelectrique"
    t.float "kmelectrique"
    t.float "person"
    t.index ["user_id"], name: "index_footprints_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "footprints", "users"
end
