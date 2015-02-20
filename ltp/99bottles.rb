# “99 Bottles of Beer on the Wall.” Write a program that prints out the lyrics
# to that beloved classic, 99 Bottles of Beer on the Wall.”

x = 99
	while x <= 99
		puts "#{x} bottles of beer on the wall, #{x} bottles of beer."
		puts "You take one down, you pass it around,"
		puts "#{x-1} bottles of beer on the wall."
	x = x - 1
	if x == 2
		puts "#{x} bottles of beer on the wall, #{x} bottles of beer."
		puts "You take one down, you pass it around,"
		puts "#{x-1} bottle of beer on the wall."
	end
	if x == 1
		puts "#{x} bottle of beer on the wall, #{x} bottles of beer."
		puts "You take one down, you pass it around,"
		puts "#{x-1} bottles of beer on the wall."
		break
	end
	end

	#getting an extra "2" line