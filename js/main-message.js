document.getElementById('exampleCheck1').addEventListener('change', function() {
    const element = document.getElementById('input-name');
    if (element.classList.contains('fade-out')) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    } else {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    }

    var img = document.getElementById('myImage');
    if (this.checked) {
        img.src = 'image/giphy.webp'; // Thay đổi đường dẫn hình ảnh ở đây
    } else {
        img.src = 'image/giphy (1).webp'; // Đường dẫn hình ảnh ban đầu
    }
});

document.querySelector('#submitForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    var elements = document.querySelectorAll('.alert.alert-danger');
        
    elements.forEach(function(element) {
        element.remove();
    });

    let nameoObj = document.querySelector('input[name="name"]'); 
    let messageObj = document.querySelector('textarea[name="message"]');

    let name = "hidden";
    if (!document.getElementById('exampleCheck1').checked) {
        if (nameoObj.value.trim() === "") {
            document.getElementById("message-div").innerHTML +=
            '<div class="alert alert-danger" role="alert" style="margin: 10px;">' +
            "You haven't entered your name yet!</div>";
            return;
        }
        name = nameoObj.value;
    }

    let message = messageObj.value.trim();
    if (message === "") {
        document.getElementById("message-div").innerHTML +=
            '<div class="alert alert-danger" role="alert" style="margin: 10px;">' +
            'Message is empty!</div>';
        return;
    }

    let data = {
        'entry.5126401': name, 
        'entry.937891274': message
    };

    let queryString = new URLSearchParams(data).toString();

    let xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSecyw_F651dFU8kqfr-bHOJQEm99gIDzgN1i2zbKzdFgOfH8A/formResponse', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    document.getElementById("submitForm").innerHTML = 
        '<div class="alert alert-success" role="alert" style="margin-top: 20px;">' +
        'Sent successfully, I will see your message soon, thank you very much!</div>';

    xhr.send(queryString);
});