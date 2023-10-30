<?php

$json_string = file_get_contents('todo-list.json');

$task = json_decode($json_string);

if(isset($_POST['todoItem']) && !empty($_POST['todoItem'])){
  $newTask = $_POST['todoItem'];
  $task[] = $newTask;
  file_put_contents('todo-list.json', json_encode($task,true));
}

if(isset($_POST['delIndex'])){
  $delTask = $_POST['delIndex'];
  array_splice($task,$delTask,1);
  file_put_contents('todo-list.json', json_encode($task,true));
}



header('Content-Type: application/json');
$taskString = json_encode($task,true);

echo $taskString;

