function Web (id, title, createDate, linkGithub, linkWeb) {
    this.id = id 
    this.createDate = createDate
    this.title = title
    this.linkGithub = linkGithub
    this.linkWeb = linkWeb
}



var webs = [
    new Web("2","Build a basic web using Java servlet - How to do it?", 
        "4th September,2024",
        "https://github.com/t9tieanh/basic-web",
        "https://tieanh19-basicweb.up.railway.app"), 

    new Web("1","Build a basic web introduce myself - How to do it?",
        "18th July, 2024 - now",
        "https://github.com/t9tieanh/tieanh19-infomation",
        "https://t9tieanh.github.io/tieanh19-infomation")
]

var buttons = document.querySelectorAll('[name="detail-web-button"]')

buttons.forEach(function(button) {
    button.addEventListener('click', function() {

        const width = window.innerWidth;
        web = findWeb(button.id)
        
        if (width <= 992) {
            $('#exampleModal').modal('show'); // Hiển thị modal khi nhấp vào

            document.getElementById("exampleModalLabel").innerHTML = web.title
            document.getElementById("createDate-modal").innerHTML = web.createDate

            document.querySelector("#linkGithub-modal a").setAttribute("href", web.linkGithub);
            document.querySelector("#linkGithub-modal cite").innerHTML = web.linkGithub;

            document.querySelector("#linkWeb-modal a").setAttribute("href", web.linkWeb);
            document.querySelector("#linkWeb-modal cite").innerHTML = web.linkWeb;

            return
        }
        
        document.getElementById("title").innerText = web.title
        document.getElementById("createDate").innerHTML = web.createDate

        document.querySelector("#linkGithub a").setAttribute("href", web.linkGithub);
        document.querySelector("#linkGithub cite").innerHTML = web.linkGithub;

        document.querySelector("#linkWeb a").setAttribute("href", web.linkWeb);
        document.querySelector("#linkWeb cite").innerHTML = web.linkWeb;
    });
});

function findWeb(id) {
    return webs.find(function(web) {
      return web.id === id;
    });
}




  