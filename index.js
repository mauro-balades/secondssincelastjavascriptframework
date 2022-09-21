window.onload = () => {
    const RESULT_ELEMENT = document.getElementById("result");
    var has_new_js_framework = 0;
    let current_time_left = 10;
    
    const MAX_TIME = 10;

    setInterval(function () {

        if(has_new_js_framework >= current_time_left){
            current_time_left = Math.random() * MAX_TIME;
            has_new_js_framework = 0;
            //console.log(current_time_left);
        } else{
            has_new_js_framework++;
        }

        RESULT_ELEMENT.innerHTML = `${+has_new_js_framework}s`
    }, 1000);
}
