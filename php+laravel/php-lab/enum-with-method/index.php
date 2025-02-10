<?php

require_once './Status.php';

use Enum\Status;

var_dump(Status::SUCCESS->message());
var_dump(Status::FIELD->message());
