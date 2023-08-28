<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>laravel form </title>
</head>
<body>
    {{-- @if ($errors->any())
    @foreach ($errors ->all() as $err)
        <li> {{$err}} </li>
    @endforeach
    @endif --}}
    <h1> Html form to display data </h1>
    <form action="users" method="POST">
        @csrf    
        name:
        <input type="text" name="username" placeholder='enter user id'><br>
        <span style="color:red";> @error('username'){{$message}}@enderror</span> <br>
        password:
        <input type="password" name="userpassword" placeholder="enter user password"/> <br>
        <span style="color:red";> @error('userpassword'){{$message}}@enderror</span> <br>

        <button type="submit"> Login</button>
    </form>
</body>
</html>



