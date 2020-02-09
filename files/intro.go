package main

import "fmt"

// func main() {
// 	fmt.Println(5 + 5)
// }

// decalring variables
// var num int = 0
// num := 0
// var i, j = 1, 3

// Go only has for loops. Runs as long as a scenatio is true (sounds like a while loop)

// func main() {
// 	for number := 0; number <= 100; number++ {
// 		fmt.Println(number)
// 	}
// }

// funcrtions. After writing the function, one needs to state the data type that will be retuned
// golang needs a main function. Everything inside of that will be run.

// func test() string {
// 	return ("Hello There")
// }

// func input(something string) string {
// 	return something + " foo bar"
// }

// func main() {
// 	fmt.Println(test())
// 	fmt.Println(input("hello"))
// }

//fiz buzz fun. if the number is divisible by 3 print 3. if its divisible by 5, print buzz, diviible by 3 and 5, print fiz buzz!!

func fizzbuzz() {
	var count int = 100

	for num := 0; num <= count; num++ {
		if num%15 == 0 { // This needs to be first. Condition gets evaluated first then loop starts again.
			fmt.Println("Fizz Buzz")
		} else if num%3 == 0 { // if the remainder is 0, then the number is divisible by it.
			fmt.Println("Buzz")

		} else if num%5 == 0 {
			fmt.Println("Fizz")
		} else {
			fmt.Println(num)
		}

	}

}

func main() {
	fizzbuzz()

}
