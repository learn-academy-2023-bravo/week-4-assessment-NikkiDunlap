# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

    # Pseudocode:
        # Create Ruby method named 'even_odd'
        # Use the '.even?' method that checks to see if given number is even. If given number is even, method will return a string that says "is even."
        # Use the '.odd?' method that checks to see if a given number is odd. If given number is odd, method will return a string that says "is odd."
        # Output will be the given number using string interpolation with saying "#{number} is even" or "#{number is odd}"

            def even_odd(number)
                if number.even? 
                    "#{number} is even"
                else number.odd? 
                    "#{number} is odd"
                end
            end

            p even_odd(7) # output: "7 is odd"
            p even_odd(42) # output: "42 is even"
            p even_odd(221) # output: "221 is odd"



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
    # Pseudocode:
            # Create Ruby method named 'remove_vowels' that takes in a string as the parameter
            # Use '.delete' method to delete all uppercase and lowercase vowels within given string
            # Output will be the given strings with all vowels removed
    
                def remove_vowels(string)
                    string.delete("aeiou" || "AEIOU")
                end
                p remove_vowels('Rubber Soul')
                p remove_vowels('Sgt Pepper')
                p remove_vowels('Abbey Road')



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.
    # Pseudocode:
        # Create Ruby method named 'is_it_a_palindrome'
        # Convert string to lowercase using '.downcase' method in parameter
        # Use '.reverse' method to see if string is a palindrome, meaning it is the same spelling and word whether it is in reverse or read left to right
        # If given string is a palindrome, method will return a string that says "is a palindrome." If given string is a not a palindrome, method will return string that says "is not a palindrome."
        # Output will be the given string using string interpolation with saying "#{string} is a palindrome" or "#{string} is not a palindrome"

            def is_it_a_palindrome(string)
                if string.downcase == string.downcase.reverse
                    "#{string} is a palindrome"
                else
                    "#{string} is not a palindrome"
                end
            end
            p is_it_a_palindrome("Racecar")
            p is_it_a_palindrome("LEARN")
            p is_it_a_palindrome("Rotator")
    
