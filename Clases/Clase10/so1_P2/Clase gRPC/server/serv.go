package main

import (
	"context"
	"database/sql"
	"fmt"
	pb "golangSocket/grpc-server"
	"log"
	"net"

	_ "github.com/go-sql-driver/mysql"
	"google.golang.org/grpc"
)

var ctx = context.Background()
var db *sql.DB

type server struct {
	pb.UnimplementedGetInfoServer
}

const (
	port = ":3001"
)

type Data struct {
	Album  string
	Year   string
	Artist string
	Ranked string
}

func mysqlConnect() {
	// Cambia las credenciales según tu configuración de MySQL
	dsn := "root:S|D>Q9R,zB(OR%H7@tcp(35.245.72.83:3306)/music"

	var err error
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		log.Fatalln(err)
	}

	err = db.Ping()
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println("Conexión a MySQL exitosa")
}

func (s *server) ReturnInfo(ctx context.Context, in *pb.RequestId) (*pb.ReplyInfo, error) {
	fmt.Println("Recibí de cliente: ", in.GetArtist())
	data := Data{
		Year:   in.GetYear(),
		Album:  in.GetAlbum(),
		Artist: in.GetArtist(),
		Ranked: in.GetRanked(),
	}
	insertMySQL(data)
	return &pb.ReplyInfo{Info: "Hola cliente, recibí el comentario"}, nil
}

func insertMySQL(rank Data) {
	// Prepara la consulta SQL para la inserción en MySQL
	query := "INSERT INTO ranking (artist, year, album, ranked) VALUES (?, ?, ?, ?)"
	_, err := db.ExecContext(ctx, query, rank.Artist, rank.Year, rank.Album, rank.Ranked)
	if err != nil {
		log.Println("Error al insertar en MySQL:", err)
	}
}

func main() {
	listen, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalln(err)
	}
	s := grpc.NewServer()
	pb.RegisterGetInfoServer(s, &server{})

	mysqlConnect()

	if err := s.Serve(listen); err != nil {
		log.Fatalln(err)
	}
}
