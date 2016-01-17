import "time"

ch := time.After(1 * time.Second)
<-ch

c := time.Tick(100 * time.Millisecond)
<-c
