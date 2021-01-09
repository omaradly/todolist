$(function(){
//============================To Do list============================
    $('.container-input .add-data').on('click', function(){
        if($('.container-input .data').val() == ""){
            alert("You Must Enter Value");
        }else{
            var newElement = $('<li></li>').text($('.container-input .data').val());
            var newButtom = $("<button class='remove'>X</button>");
            newElement.append(newButtom);
            newButtom.click(function (){
                $(this).parent().remove();
            })           
            $('.list').append(newElement);
            $('.container-input .data').val("");
        }
    })
   









})