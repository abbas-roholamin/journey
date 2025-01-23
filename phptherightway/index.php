<?php


// Get the list of files and directories in the current directory
$dir = scandir(__DIR__);

foreach ($dir as $file) {
    if (is_file($file)) {
        echo 'File name:' . $file . '<br>';
    }
}




// make directory
// if (!file_exists('newdir')) {
//     mkdir('newdir');
// }

// mkdir('newdir2');
// rmdir('newdir2');

// mkdir('newdir3/newdir4', recursive: true);


// text file (stream)
if (file_exists('newfile.txt')) {
    $FILE_SIZE = filesize('newfile.txt');

    if ($FILE_SIZE == 0) {
        file_put_contents('newfile.txt', 'Hello World!');
        clearstatcache();
    }


    $file = fopen('newfile.txt', 'r');
    while (($line = fgets($file)) !== false) {
        echo $line . '<br>';
    }

    fclose($file);
}

// csv file (stream)
if (file_exists('newcsvfile.txt')) {

    $file = fopen('newcsvfile.txt', 'r');
    while (($line = fgetcsv($file)) !== false) {
        echo 'Name: ' . $line[0] . ' Age: ' . $line[1] . '<br>';
    }

    fclose($file);
}


// read file content
if (file_exists('newfile.txt')) {
    $content = file_get_contents('newfile.txt', offset: 5, length: 4);
    echo $content;
}

// write file content  
file_put_contents('newfile.txt', 'Hello World2!', FILE_APPEND);

// copy
if (file_exists('newfile.txt')) {
    copy('newfile.txt', 'copy-newfile.txt');
}

// delete file
if (file_exists('newfile.txt')) {
    unlink('newfile.txt');
}


// rename file  
if (file_exists('copy-newfile.txt')) {
    rename('copy-newfile.txt', 'rename-newfile.txt');
}


// file info
$file_info = pathinfo('rename-newfile.txt');
echo 'File name: ' . $file_info['basename'] . '<br>';
echo 'File extension: ' . $file_info['extension'] . '<br>';
echo 'File name without extension: ' . $file_info['filename'] . '<br>';
echo 'File path: ' . $file_info['dirname'] . '<br>';
echo 'File size: ' . filesize('rename-newfile.txt') . '<br>';
echo 'File type: ' . filetype('rename-newfile.txt') . '<br>';
echo 'File permissions: ' . fileperms('rename-newfile.txt') . '<br>';
