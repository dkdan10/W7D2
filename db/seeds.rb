# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Todo.destroy_all
ApplicationRecord.connection.reset_pk_sequence!(Todo)

t1 = Todo.create!(title: "Todo 1", body: "This is a todo 1", done: false)
t2 = Todo.create!(title: "Todo 2", body: "This is a todo 2", done: false)
t3 = Todo.create!(title: "Todo 3", body: "This is a todo 3", done: false)
t4 = Todo.create!(title: "Todo 4", body: "This is a todo 4", done: false)
t5 = Todo.create!(title: "Todo 5", body: "This is a todo 5", done: false)
t6 = Todo.create!(title: "Todo 6", body: "This is a todo 6", done: false)
t7 = Todo.create!(title: "Todo 7", body: "This is a todo 7", done: false)