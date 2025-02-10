<?php

namespace Enum;

enum Status: int
{
    case SUCCESS = 1;
    case FIELD = 2;

    public function message(): string
    {
        return match ($this) {
            self::SUCCESS => 'Status is success',
            self::FIELD => 'Status is field',
        };
    }
}
