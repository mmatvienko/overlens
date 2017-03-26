<?php
$myfile = "tracking1.json";
$fh1 = fopen($myfile, 'w');
$stringData = $_GET["data"];
fwrite($fh1, $stringData);
fclose($fh1);
?>