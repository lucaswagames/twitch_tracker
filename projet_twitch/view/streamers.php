<!-- ~/php/tp1/view/cities.php -->
<!DOCTYPE HTML>
<html>

<head>
    <meta http-equiv="content-type" content="text/html;
            charset=utf-8" />
</head>
<title>All Streamers</title>

<body>
    <h1>All Streamers</h1>
    <table>
        <?php foreach ($streamers as $streamerId => $streamer) : ?>
            <tr>
                <td><a href="/streamer.php?id=<?= $streamerId; ?>"><?=
                                                                    $streamer['name']; ?></a></td>

            </tr>

        <?php endforeach; ?>
    </table>


</body>

</html>