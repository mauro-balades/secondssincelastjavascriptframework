window.onload = () => {
    const RESULT_ELEMENT = document.getElementById("result");
    var time_counter = 0;
    let time_to_next = 10;
    
    const MAX_TIME = 10;

    setInterval(function () {

        if(time_counter >= time_to_next){
            time_to_next = Math.random() * MAX_TIME;
            time_counter = 0;
        } else{
            time_counter++;
        }

        RESULT_ELEMENT.innerHTML = `${+time_counter}s`
    }, 1000);
}
