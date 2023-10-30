<?php

$json_string = file_get_contents('todo-list.json');

$task = json_decode($json_string);

// ADD
if(isset($_POST['todoItem']) && !empty($_POST['todoItem'])){
  $posted_task =$_POST['todoItem'];
  $newTask = [
    'text' => "$posted_task",
    'doneTask' => 'false'
  ];
  $task[] = $newTask;
  file_put_contents('todo-list.json', json_encode($task,true));
}

// DELETE 
if(isset($_POST['delIndex'])){
  $delTask = $_POST['delIndex'];
  array_splice($task,$delTask,1);
  file_put_contents('todo-list.json', json_encode($task,true));
}



header('Content-Type: application/json');
$taskString = json_encode($task,true);

echo $taskString;

// [{"text":"Allenamento","doneTask":"false"},{"text":"Aggiornare status Linkedin","doneTask":"false"},{"text":"Comprare crocchette","doneTask":"false"}]