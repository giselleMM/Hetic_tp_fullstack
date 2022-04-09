<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: authorization');

//var_dump(getallheaders());

$dsn = "mysql:host=db;dbname=data";
$user = "root";
$pwd = "password";
$pdo = new PDO($dsn, $user, $pwd);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$pdo->query("CREATE TABLE IF NOT EXISTS`users` ( 
    `id` INT NOT NULL AUTO_INCREMENT
    , `nom` VARCHAR(50) NOT NULL
    , `password`VARCHAR(100) NOT NULL
    , `token` VARCHAR(100) NOT NULL
    , PRIMARY KEY (`id`)  ) ENGINE = InnoDB;");

$token = str_replace('Basic ', '', getallheaders()['authorization']);

$data = [
    'userName' => $_POST['name'],
    'password' => $_POST['password'],
    'token' => $token
];

if($data['userName']!="undefined"){

    print_r(json_encode($data));

    $request = $pdo->prepare("INSERT INTO `users`(`id`, `nom`, `password`, `token`) VALUES (0, :nom, :password, :token)");
    $request->execute(array(
            'nom'=>$data['userName'],
            'password'=>$data['password'],
            'token' => $data['token']
        )
    );
}


