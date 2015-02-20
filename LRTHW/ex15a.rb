puts "Type the file name:"
filename = STDIN.gets.chomp()

#starts the prompt; not sure what the > does.
prompt = "> "
#opens a the file from filename and puts it into txt
txt = File.open(filename)

#Tells the user the name of the file.
puts "Here's your file: #{filename}"
#read and displays the text file.
puts txt.read()

#Asks the user to enter the filename again.
puts "I'll also ask you to type it again:"
#I think this ends the prompt.
print prompt
#takes the user input and gives it a name.
file_again = STDIN.gets.chomp()

#Takes second file name, opens it and puts it into txt_again
txt_again = File.open(file_again)

#displays the second named file
puts txt_again.read()