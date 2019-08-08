<?php

/**
 * MysqlVS驱动
 * Class MysqlVSDriver
 */
class MysqlVSDriver
{
    /**
     * @var PDO
     */
    private $pdo = null;


    public function __construct()
    {
        $config = [

            "dsn" => "mysql:host=127.0.0.1;port=3306;dbname=lvsi_test",
            "user" => "root",
            "password" => "12345678",

        ];

        try {

            $pdo = new \PDO($config['dsn'], $config["user"], $config["password"], array(\PDO::ATTR_PERSISTENT => true, \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION));

            $pdo->setAttribute(\PDO::ATTR_EMULATE_PREPARES, false);

            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $this->pdo = $pdo;
        } catch (\PDOException $e) {

            throw new Exception($e->getMessage(), 10);
        }
    }
}
