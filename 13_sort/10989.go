package main

import (
	"bufio"
	"bytes"
	"fmt"
	"os"
	"strconv"
)

func main() {
	sc := bufio.NewScanner(os.Stdin)

	// input의 갯수가 최대 100000000 이므로
	// 전부 하나에 몰아주면 arr1[num]값이 uint16으로는 핸들링 불가

	arr1 := make([]uint32, 10001)
	sc.Scan()
	for sc.Scan() {
		num, _ := strconv.Atoi(sc.Text())
		arr1[num]++
	}

	var buffer bytes.Buffer
	for i := 1; i < len(arr1); i++ {
		for j := arr1[i]; j > uint32(0); j-- {
			buffer.WriteString(strconv.Itoa(i))
			buffer.WriteString("\n")
		}
	}

	fmt.Print(buffer.String())
}
