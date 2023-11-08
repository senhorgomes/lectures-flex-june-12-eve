# Objects = Hashes


=begin
JS key-value pairs:

{
    key: "value"
}
=end

student = {
    "first_name" => "Adam",
    "last_name" => "Duyvestyn",
    "school" => "Lighthouse Labs"
}

puts student["first_name"]

student = {
    :first_name => "Adam",
    :last_name => "Duyvestyn",
    :school => "Lighthouse Labs"
}
student[:first_name] = "Bryan"
# student[:cohort] = "June 12"
puts student[:cohort]
# nil == javascripts undefined

# student = {
#     first_name: "Adam",
#     last_name: "Duyvestyn",
#     school: "Lighthouse Labs"
# }

# puts student[:first_name]
