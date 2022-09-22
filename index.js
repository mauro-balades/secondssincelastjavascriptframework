window.onload = () => {
    const RESULT_ELEMENT = document.getElementById("result");
    var has_new_js_framework = true;

    setInterval(function () {
        if (Math.random()>0.5) {
            has_new_js_framework = !has_new_js_framework;
        } else {
            has_new_js_framework++;
        }

        RESULT_ELEMENT.innerHTML = `${+has_new_js_framework}s`
    }, 1000);
}