def collatz(number):
    numberParsed = int(number)
    if numberParsed == 1:
        return
    elif numberParsed % 2 == 0:
        val = int(numberParsed/2)
        print(val)
        collatz(val)
    else:
        val = int(3*numberParsed+1)
        print(val)
        collatz(val)

numberInput = input("Enter number: ")
collatz(numberInput)

# less pure function

def collatz(n):
    number = int(n)
    if number % 2 == 0:
        val = int(number/2)
        print(val)
        return val
    else:
        val = int(3*number+1)
        print(val)
        return val

numberInput = input("Enter number: ")

while numberInput != 1:
    numberInput = collatz(numberInput)
