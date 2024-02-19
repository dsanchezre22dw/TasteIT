<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>¡Nuevo seguidor!</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333333;
        }
        p {
            color: #666666;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: rgb(220, 38, 38);
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: red;
        }
        img{
            display: flex;
            margin: 0px auto;
        }
    </style>
</head>
<body>
    <div class="container">
        <img src="{{ $message->embed(public_path('assets/img/logo.png')) }}" width="200" height="200">
        <h1>¡Nuevo seguidor!</h1>
        <p>Hola,</p>
        <p>¡Te informamos de que el usuario {{$followingUser->username}} ha empezado a seguirte! Esperamos que disfrutes de nuestra comunidad.</p>
        <p>Puedes iniciar sesión en tu cuenta para ver las recetas de este usuario y explorar más.</p>
        <a href="http://localhost:8000/dashboard/profile" class="button" style="background-color: rgb(220, 38, 38); color: #ffffff; text-decoration: none; border-radius: 5px; padding: 10px 20px;">Iniciar sesión</a>
        <p>¡Gracias!</p>
    </div>
</body>
</html>
