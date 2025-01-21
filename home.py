import datetime

# Get the current date and time
now = datetime.datetime.now()

#Create a datetime object represnting the current date and time

# Display a message indicating what is being printed 
print("Current date and time :")

# Print the current data and time  in a specific formate
print(now.strftime("%Y-%m-%d %H:%M:%S"))

# Use the 'strftime' method to format the datetime object as a string with the desired format