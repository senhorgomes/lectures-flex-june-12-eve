def block_friendly_method
    puts "Running first line in method."
    yield # Runs a block passed into the method/ Callback
    puts "Running last line in method."
    # yield
end
#block_friendly_method(()=>console.log("Anon block run"))

def inside_block
    puts "Hey there!"
end
def inside_block2
    puts "Hey there!"
end
# block_friendly_method do
#     puts "Inside the original block"
# end
#block_friendly_method(()=>inside_block())
# block_friendly_method do
#     inside_block
# end

block_friendly_method do
    inside_block2
    inside_block
    puts "Different block run 3!"
    puts "Different block run 4!"
end


# lambdas

# Blocks stored in memory
# Arrow functions

function_name = lambda { |x| x * 2 }
# const function_name = (x) => x * 2
puts function_name.call(5)
