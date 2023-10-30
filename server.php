<?php

$task = [
  [
    'text' => 'Fare la spesa',
    'doneTask' => 'true'

  ],

  [
    'text' => 'Pagare Assicurazione',
    'doneTask' => 'true'

  ],

  [
    'text' => 'Allenamento',
    'doneTask' => 'true'

  ],
  

];

$taskString = json_encode($task,true);

header('Content-Type: application/json');

echo $taskString;

