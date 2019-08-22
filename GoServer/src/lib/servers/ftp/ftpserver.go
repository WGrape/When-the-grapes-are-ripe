package ftp

import (
	"fmt"
	"net/http"
)

func myHandler(w http.ResponseWriter, r *http.Request) {

	if _, err := fmt.Fprintf(w, "Hello World"); err != nil {
		panic(err.Error())
	}
}

func Server() {

	http.HandleFunc("/", myHandler)
	if err := http.ListenAndServe(":7778", nil); err != nil {
		panic(err.Error())
	}
}
