function Web (id, title, createDate, linkGithub, linkWeb) {
    this.id = id 
    this.createDate = createDate
    this.title = title
    this.linkGithub = linkGithub
    this.linkWeb = linkWeb
}



var webs = [

    new Web("7","Simple java mail project to send emails - How to do it ?", 
        "25th October,2024",
        "https://github.com/t9tieanh/javamail",
        "https://tieanh-javamail-production.up.railway.app"), 

    new Web("6","Build a JPA project - How to do it ?", 
        "18th October,2024",
        "https://github.com/t9tieanh/jpa-project",
        "https://tieanh-jpaproject-production.up.railway.app"), 

    new Web("5","Implement connection pool to create connection in jdbc - How to do it ?", 
        "9th October,2024",
        "https://github.com/t9tieanh/Connection-pool",
        "https://tieanh-connectionpool-production.up.railway.app"), 

    new Web("4","Create a jdbc application project to execute sql statements - How to do it ?", 
        "3th October,2024",
        "https://github.com/t9tieanh/SqlQuery",
        "https://tieanh-sqlquerry-production.up.railway.app/home"), 

    new Web("3","Use session in java servlet to create basic shopping cart functionality - How to do it?", 
        "26th September,2024",
        "https://github.com/t9tieanh/shopping-cart",
        "https://tieanh-deploywebsite-production.up.railway.app/shop"), 

    new Web("2","Build a basic web using Java servlet - How to do it?", 
        "4th September,2024",
        "https://github.com/t9tieanh/basic-web",
        "https://tieanh-deploywebsite-production.up.railway.app/trang-chu"), 

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




  