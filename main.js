function Add_Display() {
    var guest_list = [];
    for (i=1; i<=5;i++){
        var a = document.getElementById("input"+i).value;
        guest_list.push(i+". "+a+"<br>");
    }
    var space = guest_list.join(" ");
    document.getElementById("div2"). innerHTML = "Names Of The Guest To The Party" + "<br>" + space;
}

function Check(){
    var Check_1 = document.getElementById("input6").value;
    var found = 0;
    for (j = 1; j<=5;J++){

        if(Check_1 == space){
            found=found+1;
        }
    }
    document.getElementById("div3"). innerHTML = "Name has found" + Check_1 + found;
}