# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: Object-oriented programming focuses on the objects that hold data, classes, and their behavior. It is basically the blueprint that defines the attributes and methods of the object. Functional programming focuses on our functions. In OOP, the objects are like characters in a video game. They all have their own behavior and their and the data that comes with the behavior. In functional programming, the input produces an output. This is similar to a user pushing buttons on the gaming controller. A certain combination of buttons produces a specific output, which results in the character on the video gaming doing certain things.

Researched answer: Object-Oriented Programming is all about using “objects.” Objects decide the whole framework of this programming language. Unlike Functional Programming, which is more of a result-oriented programming concept, the Object-Oriented Programming approach is concerned with how you end up at a result rather than the result itself.

1. What is the difference between a Float and an Integer in Ruby?

Your answer: A float is a numerical value with decimal places, meaning that it is not a whole number. An example of a float is 4.64.
An integer is a whole number without any decimal places. An example of an integer is 5. The difference between the 2 is a float can represent a fraction; however, an integer can ony represent whole numbers.

Researched answer: Integers and floats are two different kinds of numerical data. An integer is a number without a decimal point. A float is a number that has a decimal place. Floats are used when more precision is needed.

1. Ruby has an implicit return. What does that mean?

Your answer: Ruby having an implicit return means that when a method reaches the end of its execution, it implicitly return the value of the last executed expression. Such as
def subtract(num1, num2)
num1 - num2
end

result = subtract(10, 5)
p result #output: 12

Researched answer: In Ruby, there's a rule that says if you write a math problem in a box called a "method," Ruby will give you the answer that you get when you solve the problem in the box.

1. What is a block in Ruby?

Your answer: A block is a chunk of code that can be passed to a method in order to execute it. It is enclosed in curly braces or starts with a "do" statement and ends with an "end" statement. A block encased in curly braces would look like the following.
block_name {
    statement1
    statement2
}

Researched answer: In Ruby, a block is a chunk of code that can be passed as an argument to a method. A block is defined using curly braces {} or the do-end keywords. The code within the block is executed when the method is called, and the block is usually used to customize the behavior of the method.

1. How do you extract a value in a Ruby hash?

Your answer: You extract data using bracket notation. As an example, if we have a hash like this. 
veteran = { name: "Nikki", age: 30, service: "Navy" }
We would extract the data using the below bracket notation, and it would return the key and values below.
veteran[:name] # "Nikki"
veteran[:age] # 30
veteran[:service] # "Navy"

Researched answer: You can extract data from a hash using square bracket notation and by using the fetch method. By using the square bracket notation, you are able to reference each element in a key and pull out the value by placing brackets around the key. The fetch method would be coded like this below.
veteran.fetch(:name) # "Nikki"
veteran.fetch(:age) # 30
veteran.fetch(:service) # "Navy"

## Looking Ahead: Terms for Next Week

1. RSpec: is a testing tool for Ruby. In two different worlds, it is to Ruby what Jest is to JavaScript.

2. Test-driven development: development that instructs developers to write new code every time a test fails before the official development of the application, rather than having duplicated code. 

3. PostgreSQL: used for Django projects. It is open-source database, meaning that the original source code is available for free and may be modified by developers. 

4. CRUD: CRUD stands for Create, Read, Update, and Delete. We use this to manipulate data in a PostgreSQL database.

5. HTTP: HTTP stands for Hypertext Transfer Protocol. It is used to transfer data over the internet. It establishes a connect between a web browser and a server.

