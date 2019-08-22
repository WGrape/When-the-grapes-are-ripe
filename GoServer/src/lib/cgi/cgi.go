package cgi

import (
	"../servers/ftp"
	"../servers/http"
)

func Init(){

	// 启动所有的 Protocol Server

	// 启动 HTTP Server
	http.Server()

	// 启动 FTP Server
	ftp.Server()


}
