# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
require 'securerandom'

date = '2017-02-10'
start_time = '2017-02-10 08:00'
finish_time = '2017-02-10 08:30'

Api::Event.delete_all
Api::Event.create!([
  { title: SecureRandom.hex(20), date: date, start_time: start_time, finish_time: finish_time},
  { title: SecureRandom.hex(20), date: date, start_time: start_time, finish_time: finish_time},
  { title: SecureRandom.hex(20), date: date, start_time: start_time, finish_time: finish_time},
  { title: SecureRandom.hex(20), date: date, start_time: start_time, finish_time: finish_time},
  { title: SecureRandom.hex(20), date: date, start_time: start_time, finish_time: finish_time},
  { title: SecureRandom.hex(20), date: date, start_time: start_time, finish_time: finish_time},
  { title: SecureRandom.hex(20), date: date, start_time: start_time, finish_time: finish_time}
])