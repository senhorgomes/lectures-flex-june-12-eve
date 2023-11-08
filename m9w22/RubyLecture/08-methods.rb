def hello_world
    hello_world_string = "Hello, World!"
    hello_world_string
    # console.log(hello_world_string)
    # return hello_world_string

    # hello_world_string # Last line returns by default!
end
# function, and we dont need to invoke it, just by referencing it, it will invoke the function
# functionName -> reference
# functionName() -> invoke
puts hello_world

# def hello_world
#     puts "Hello, World!"
#     "Hello, World"
# end

#In javascript, if we invoke a function, we won't see the value returned unless we console.log it
#console.log(hello_world)
# p hello_world


=begin
function get_difference(num_1, num_2){
    return num_1 - num_2
}
no arrow, no anon, no function declartion
=end
def get_difference num_1, num_2
    num_1 - num_2 # Returns result of expression
end
# console.log(get_difference(15,3))
p get_difference(15, 3)

