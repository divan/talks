// A concurrent prime sieve

package main

import "fmt"

// Send the sequence 2, 3, 4, ... to channel 'ch'.
func Generate(ch chan<- int) {
	for i := 2; ; i++ {
		ch <- i
	}
}

// Copy the values from channel 'in' to channel 'out',
// removing those divisible by 'prime'.
func Filter(ch <-chan int, out chan<- int, prime int) {
	for {
		i := <-ch
		if i%prime != 0 {
			out <- i
		}
	}
}

// The prime sieve: Daisy-chain Filter processes.
func main() {
	ch := make(chan int) // Create a new channel.
	go Generate(ch)      // Launch Generate goroutine.
	for i := 0; i < 10; i++ {
		prime := <-ch
		fmt.Println(prime)
		out := make(chan int)
		go Filter(ch, out, prime)
		ch = out
	}
}
