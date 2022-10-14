function initListener() {
    // $("nav .links a").click(function(e){
    //     let btnId = e.currentTarget.id;
    //     console.log("click " + btnId);
    //     MODEL.changePageContent(btnId);
    // });

    $("a").click(function(e){
        let btnId = e.currentTarget.id;
        console.log("click " + btnId);
        MODEL.changePageContent(btnId);
    });
}

$(document).ready(function(){
    initListener();
    MODEL.changePageContent("home");
    
})