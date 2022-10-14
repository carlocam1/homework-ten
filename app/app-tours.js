function initListener() {
    $("a").click(function(e){
        let btnId = e.currentTarget.id;
        console.log("click " + btnId);
        MODEL.changePageContent(btnId);
    });
}

$(document).ready(function(){
    initListener();    
})