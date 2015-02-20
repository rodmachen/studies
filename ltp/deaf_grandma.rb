# Deaf grandma. Whatever you say to Grandma (whatever you type in), she should
# respond with this: HUH?! SPEAK UP, SONNY! unless you shout it (type in all
# capitals). If you shout, she can hear you (or at least she thinks so) and
# yells back: NO, NOT SINCE 1938! To make your program really believable, have
# Grandma shout a different year each time, maybe any year at random between
# 1930 and 1950. (This part is optional and would be much easier if you read the
# section on Ruby’s random number generator here .) You can’t stop talking to
# Grandma until you shout BYE. Hint 1: Don’t forget about chomp! 'BYE' with an
# Enter at the end is not the same as 'BYE' without one! Hint 2: Try to think
# about what parts of your program should happen over and over again. All of
# those should be in your while loop. Hint 3: People often ask me, “How can I
# make rand give me a number in a range not starting at zero?” But you don’t
# need it to. Is there something you could do to the number rand returns to you?
# Deaf grandma extended. What if Grandma doesn’t want you to leave? When you
# shout BYE, she could pretend not to hear you. Change your previous program so
# that you have to shout BYE three times in a row. Make sure to test your
# program: if you shout BYE three times but not in a row, you should still be
# talking to Grandma.


puts "Say something to Grandma."
	response = gets.chomp
while response != response.upcase
	puts "HUH?! SPEAK UP, SONNY!"
if response == response.upcase
	puts "No, not since #{1930 + rand(21)}"
elsif response == "BYE"
	puts "BYE"
	break
end
end

