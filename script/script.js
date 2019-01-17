var goods=[];
var curr_page = 0;

function runScript(e) {
    if (e.keyCode == 13) {
        add();
    }
}

function runScript1(e) {
    if (e.keyCode == 13) {
        btnSearch();
    }
}


function add(){
    var input = document.getElementById('add');
    var p = document.getElementById('count');
    if( input.value != '' ){
        goods.push(input.value);
        alertify.success( input.value+" Added");
        p.innerHTML = "Total Items: "+goods.length;
        console.log(goods);
        pagination(curr_page);
    }
    else{
        alert('Enter Something');
    }
    document.getElementById('add').value = '';
}

function pagination(current_page){
    var ul = document.getElementById("mainList");
    var div = document.getElementById("page");
    ul.innerHTML = '';
    div.innerHTML = '';
    var pages = Math.ceil(goods.length / 10);
    for(var i = current_page*10 ; i < (current_page*10)+10 ;i++){
        var li = document.createElement('li');
        if(typeof goods[i] !== 'undefined' && goods[i] !== null) 
        {li.innerHTML = goods[i];
        li.id = "li"+i;
        ul.appendChild(li);
        }
        
    }
    for (var i = 1; i <= pages; i++) {
        var a = document.createElement('button');
        a.onclick = function(){ pagination((this.innerHTML)-1);}
        a.innerHTML = i;
        div.appendChild(a);   
    }
}

function search(){
    var input = document.getElementById("search");
    if( input.value == '') {alertify.alert("Enter a Search Item."); return; }
    var filter = input.value.toUpperCase();
    var ul = document.getElementById("mainList");
    var li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
}

function btnSearch(){
    var input = document.getElementById("search");
    if( input.value == '') {alertify.alert("Enter a Search Item."); return; }
    var filter = input.value.toUpperCase();
    for(var j=0;j<goods.length;j++){
        txtValue = goods[j];
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            j=j+1;
            alertify.alert("Item Found on Page: " + Math.ceil(j/10) +".")
            return;
        }      
    }
    alertify.error("Item Not Found");
}
