<?php
// ~/php/tp1/public/cities.php
// include model
include __DIR__ . '/../model/streamers.php';
if (!key_exists('id', $_GET)) {
    page_not_found();
}

$id = $_GET['id'];
$streamer = $streamers[$id];
$streamer_stats = $streamers_stats[$id]["streamer"];
foreach ($streamers_stats[$id] as $v) {

    echo $v['datas']['category'];
};

// include view
include __DIR__ . '/../view/streamer.php';

function page_not_found()
{
    header("HTTP/1.0 404 Not Found"); //On définit la page comme étant une page 404 au sein de l’entête
    include __DIR__ . '/../view/404.html'; // On ajoute la vue de la page 404
    die(); // arrête l’exécution du script
}
