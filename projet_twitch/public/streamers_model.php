<?php
include __DIR__ . '/../database/db.php';


$query = $dbh->prepare('SELECT id, name from streamers'); // $dbh est la connexion initialisée dans le fichier db.php
$query2 = $dbh->prepare('SELECT * from `streamers-stats`'); // $dbh2 est la connexion initialisée dans le fichier db.php

$query->execute();
$query2->execute();

$streamers = $query->fetchAll(\PDO::FETCH_ASSOC);
$streamers_stats = $query2->fetchAll(\PDO::FETCH_ASSOC);

sort($streamers);
sort($streamers_stats);

$streamers_json = json_encode($streamers);
$streamers_stats_json = json_encode($streamers_stats);

echo $streamers_json;
echo "<br><br>";
echo $streamers_stats_json;

file_put_contents('streamers.json', $streamers_json); // Write the JSON in a 
file_put_contents('streamers_stats.json', $streamers_stats_json); // Write the JSON in a
