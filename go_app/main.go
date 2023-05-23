// Created by: Jakub Malhotra
// Created on: May 2023
//
// This program calculates the volume of a pyramid

package main

import (
	"fmt"
)

func calculate() {
	var input int
	fmt.Print("Enter a number: ")
	fmt.Scanln(&input)

	number := input

	digitCount := 0
	for number != 0 {
		number /= 10
		digitCount++
	}

	fmt.Println("Total number of digits:", digitCount)
}

func main() {
	calculate()

	fmt.Println("\nDone.")
}
