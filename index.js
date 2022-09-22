

window.onload = () => {
    const RESULT_ELEMENT = document.getElementById("result");
<<<<<<< HEAD
    var time_counter = 0;
    let time_to_next = 10;
    
    const MAX_TIME = 10;

    setInterval(function () {

        if(time_counter >= time_to_next){
            time_to_next = Math.random() * MAX_TIME;
            time_counter = 0;
        } else{
            time_counter++;
=======
    var has_new_js_framework = true;

    setInterval(function () {
        if (Math.random()>0.5) {
            has_new_js_framework = !has_new_js_framework;
        } else {
            has_new_js_framework++;
>>>>>>> parent of 20fb520... Made it a fixed timer to improve performance.
        }

        RESULT_ELEMENT.innerHTML = `${+time_counter}s`
    }, 1000);
}
