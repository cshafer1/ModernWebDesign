<?php
    if (sizeof($_POST) > 0){
        $new_data = array(
                'projectName' => $_POST['projectName'],
                'projectMaxMembers' => $_POST['projectMaxMembers'],
                'projectCategory' => $_POST['projectCategory'],
                'projectImage' => $_POST['projectImage'],
                'projectDesc' => $_POST['projectDesc'],
                'projectPrivate' => $_POST['projectPrivate']
            );
        if(file_exists('project_data.json')){
            $current = file_get_contents('project_data.json');
            $current_arr = json_decode($current, true);
            $current_arr[] = $new_data;
            $final_data = json_encode($current_arr);
            file_put_contents('project_data.json', $final_data);
        } else {
            $data = json_encode($new_data);
            file_put_contents('project_data.json', $final_data);
        }
    }
    header("Location: /index.html", true, 301);
?>
