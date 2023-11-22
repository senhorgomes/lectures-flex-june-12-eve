# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding data..."

puts "Creating Authors"

20.times do 
    Author.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name
    )
end

puts "Creating books"
# This references all the authors that can be used as a reference to the Books table
authors = Author.all

250.times do
    Book.create(
        author: authors.sample,
        title: Faker::Book.title,
        publisher: Faker::Book.publisher,
        genre: Faker::Book.genre,
        # rand(1..400)
        page_count: Faker::Number.between(from: 100, to: 1000),
        isbn: Faker::Barcode.isbn,
        price: Faker::Number.between(from: 20, to: 50),
        year_of_publication: Faker::Number.between(from: 1600, to: 2023),
    )
end
puts "Jobs done!"