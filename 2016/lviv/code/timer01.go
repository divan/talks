package main

import "time"

func tick(d time.Duration) <-chan int {
	c := make(chan int)
	go func() {
		c <- 1
		time.Sleep(d)
	}()
	return c
}

func main() {
	for i := 0; i < 24; i++ {
		c := tick(1 * time.Second)
		<-c
	}
}
