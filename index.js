
function AddNewTask(){
    var task = document.getElementById("inputbox").value;
    var htm = '<p>'+ task +'</p>';
    document.getElementById("typeHere").innerHTML += htm;
}