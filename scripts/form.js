dataForm.onsubmit = function(ev) {
    ev.preventDefault()
    console.log("enviando...")
    var form = document.getElementById("dataForm");
    var formData = new FormData(form);

    var request = new XMLHttpRequest();
    request.open("POST", "https://httpbin.org/post");
    request.onload = function(){
        console.log(this.responseText)
    }
    request.send(formData);
}