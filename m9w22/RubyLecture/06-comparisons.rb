# In JS we had: == / ===
# Just like javascript, if we want to exist the file/function/code ctrl+C
p (true == true) # true
p (true == false) # false
p ("true" == true) # false
p (3 == 3) # true
p (3 == "3") # false
p (3 == 3.000) # true
p 3.class


user_num = 4
=begin
if(user_num > 10){
    console.log("user_num is greater than 10")
}else if (user_num < 5){
    console.log("user_num is less than 5")
}
=end

if user_num > 10 
    puts "user_num is greater than 10"
elsif user_num < 5
    puts "user_num is less than 5"
end


# Short circuiting
puts "It is greater" if 5 > 10

snowing = true

puts "We can go out and have some fun!" unless snowing #if snowing is false