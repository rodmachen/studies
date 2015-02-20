# Building and sorting an array. Write the program we talked about at the
# beginning of this chapter, one that asks us to type as many words as we want
# (one word per line, continuing until we just press Enter on an empty line) and
# then repeats the words back to us in alphabetical order. Make sure to test
# your program thoroughly; for example, does hitting Enter on an empty line
# always exit your program? Even on the first line? And the second? Hint:
# There’s a lovely array method that will give you a sorted version of an array:
# sort. Use it!

# request input
puts "Give me one word at a time."
# make a basically empty variable just for the while command
word = ''
# make a blank array to which words will be added
words = []
# start the loop
while true
# get response and call it word
	word = gets.chomp
# add word to the end of the words array
	words.push word
# if no word is returned, then break
else word.empty
	break
end
# give back the words array alphabetized
puts words.sort
