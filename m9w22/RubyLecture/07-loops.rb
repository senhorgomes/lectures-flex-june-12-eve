=begin
    In JavaScript we had a few loops to pick from:
    * for
    * for...in
    * for...of
    * Array.forEach
    * while
=end

# Ruby Loop
iterator_loop_count = 0
=begin
loop do
    puts "Current iteration: #{iterator_loop_count}"
    iterator_loop_count += 1 # There is no ++ in Ruby :(
        break if iterator_loop_count > 6
    end 
    
    # until iterator_loop_count > 12 do
    while iterator_loop_count < 12 do
        puts "Current WHILE iteration: #{iterator_loop_count}"
        iterator_loop_count += 2
    end
=end


# An array!
# const array = ["Dog", "Cat", "Bird"]
# array[0]

animals = ["Dog", "Cat", "Bird"]
# puts animals[2]

=begin
In JS, foreach:
animals.forEach((animal, index, array) => {
    console.log(`${index}`: ${element});
});
=end
=begin
# Foreach!
puts "animals.each:"
animals.each do |animal|
    puts animal
end

# Foreach!
puts "animals.each_with_index:"
animals.each_with_index do |animal, index|
    puts "#{index}: #{animal}"
end
=end
for animal in animals do
    puts animal
end

# Filter

list = [1,2,3,4,5]
filtered_list = list.select do |num|
    num >= 3
end

puts filtered_list

=begin
#Times will always start at zero
10.times do |num| # |num| is optional, here
    puts "Our times loop has run #{num + 1} times."
end
=end
# Number range
# (30..40).each do |num|
#     puts "30..40 #{num}"
# end

10.times { puts "hello world" }

