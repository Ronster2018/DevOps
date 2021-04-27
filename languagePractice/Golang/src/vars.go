package main

import "fmt"

// Var Types: Statically typed language meaning types do not change. Int cant become a string unless it's destoyed and re-created

//1 uint8: Unsigned 8-bit integers (0 to 255)
// 2 uint16:  Unsigned 16-bit integers (0 to 65535)
// 3 uint32:  Unsigned 32-bit integers (0 to 4294967295)
// 4 uint64:  Unsigned 64-bit integers (0 to 18446744073709551615)
// 5 int8:  Signed 8-bit integers (-128 to 127)
// 6 int16:  Signed 16-bit integers (-32768 to 32767)
// 7 int32:  Signed 32-bit integers (-2147483648 to 2147483647)
// 8 int64:  Signed 64-bit integers (-9223372036854775808 to 9223372036854775807)

//Floating types
// 1 float32:  IEEE-754 32-bit floating-point numbers
// 2 float64:  IEEE-754 64-bit floating-point numbers
// 3 complex64:  Complex numbers with float32 real and imaginary parts
// 4 complex128:  Complex numbers with float64 real and imaginary parts

//Numeric Types

// 1 byte:  same as uint8
// 2 rune:  same as int32
// 3 uint:  32 or 64 bits
// 4 int:  same size as uint
// 5 uintptr:  an unsigned integer to store the uninterpreted bits of a pointer value

func main() {

	// Variables can be delacred in several different ways. Startting with Var, the name, then the type

	//Explicit decloration
	var boy string // = "Billy"
	boy = "Billy"

	// Implicit decoration
	var girl = "Maggie"

	fmt.Println("Hello there,", boy, "and", girl)
}
