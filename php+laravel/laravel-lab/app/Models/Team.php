<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Team extends Model
{

    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
    ];



    public function projects()
    {
        return $this->hasMany(Project::class);
    }


    public function tasks()
    {
        return $this->hasManyThrough(Task::class, Project::class);

        // return $this->through($this->projects())
        //     ->has(fn($project) => $project->tasks());

        // return $this->through('projects')->has('tasks');

        // return $this->throughProjects()->hasTasks();
    }
}
