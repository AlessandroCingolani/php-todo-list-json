<?php

$task = [
  'Fare la spesa',
  'Pagare Assicurazione',
  'Allenamento'
];

if(isset($_POST['todoItem'])){
  $newTask = $_POST['todoItem'];
  $task[] = $newTask;
  file_put_contents('server.php', json_encode($task,true));
}


header('Content-Type: application/json');
$taskString = json_encode($task,true);

echo $taskString;

