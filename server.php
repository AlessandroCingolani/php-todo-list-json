<?php
$json_string = file_get_contents('todo-list.json');

$task = json_decode($json_string,true);

// ADD
if(isset($_POST['todoItem']) && !empty($_POST['todoItem'])){
  $newTask = $_POST['todoItem'];
  $task[] = array(
    "text" => $_POST["todoItem"],
    "doneTask" => boolval($_POST["doneTask"])
  );
  file_put_contents('todo-list.json', json_encode($task,true));
}

// DELETE 
if(isset($_POST['delIndex'])){
  $delTask = $_POST['delIndex'];
  array_splice($task,$delTask,1);
  file_put_contents('todo-list.json', json_encode($task,true));
}

// TOGGLE DONETASK
if(isset($_POST['toggleSpan'])){
  $toggleTask = $_POST['toggleSpan'];
  $task[$toggleTask]["doneTask"] = !$task[$toggleTask]["doneTask"];
  $newJsonString = json_encode($task);
  file_put_contents('todo-list.json', $newJsonString);
}


header('Content-Type: application/json');
$taskString = json_encode($task,true);

echo $taskString;


