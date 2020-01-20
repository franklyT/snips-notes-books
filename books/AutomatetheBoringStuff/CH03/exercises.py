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
