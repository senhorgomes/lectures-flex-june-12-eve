welcome_text = "Hello and welcome, "
visitor_name = "Taylor"

# const string1 = "Hello "
# const string2 = "How is your day?"
# const combinedString = string1 + string2 + "!"
# console.log(combinedString)

full_welcome = welcome_text + visitor_name + "!"

puts full_welcome
# This would work in Javascript
number = 3 #a string

# #{number} and number.to_s do the same thing


# if we want to conver into a number => .to_i
# puts "My favourite number is " + number
# `My favourite number is ${number}`
# Why does this work?
puts "My favourite number is #{number}"
puts "My fav num" + #{number}