$(document).ready(function (){
 
    var weDo = ['design','development','product'];
    weDo.forEach(function(what){
        $("#"+what).click(function (){
            $("#"+what).hide();
            $("#"+what+"-info").show();
        });
        $("#"+what+"-info").click(function (){
            $("#"+what+"-info").hide();
            $("#"+what).show();
        });
    });
    
    var workIds = ['work1','work2','work3','work4','work5','work6','work7','work8'];
    workIds.forEach(function(id){
        $("#"+id).mouseover(function () {
            $("."+id+"-div").show();
        });
        $("#"+id).mouseout(function () {
            $("."+id+"-div").hide();
        });
    });
    
    $("button").click(function(event){
        var name = $("#name").val();
        alert(name + " Thanks. We have received your message.");
        event.preventDefault();
    });
    
    $("button").click(function(event){
        $(".message")[0].reset();
    });
});