<!-- ~/php/tp1/view/city.php -->
<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="content-type" content="text/html;
            charset=utf-8" />
</head>
<title>One streamer</title>

<body>
    <h1>Streamer <?= $streamer['name'] ?></h1>
    <p>
        Name of the streamer : <?= $streamer['name']; ?>
    </p>
    <p>
        Numbre of view this month : <?= $streamer_stats; ?>
    </p>
    <a href="/streamers.php">
        Back to list of streamers
    </a>
</body>

<!-- http://localhost:8000/streamers.php -->

</html>