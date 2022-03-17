const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
      pp =  body.querySelector('.opaci')


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
    pp.classList.toggle('opaci');
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});



(function(){
    var afficherOnglet = function(a){
        var li = a.parentNode;
            var div = a.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

            if(li.classList.contains('actif')){
                return false;
            }
            //on retire la active de l,onglet actif
            div.querySelector('.tabs .actif').classList.remove('actif');
            //on ajoute la class active a l,onglet actuel 
            li.classList.add('actif');

            //on retire la classs active sur le contenu actif
            div.querySelector('.tab-content.actif').classList.remove('actif');

            //on ajoute class active sur le contenu correpondant a mon clic

            div.querySelector(a.getAttribute('href')).classList.add('actif');

    }

    var tabs = document.querySelectorAll('.tabs a');
    for(var i=0; i < tabs.length; i++){
        tabs[i].addEventListener('click', function(e){

           afficherOnglet(this);
           

        })
    }

    var hash = window.location.hash;
    var a = document.querySelector('a[href="'+ hash +'"]');
    if(a !== null && !a.parentNode.classList.contains('actif')){
            afficherOnglet(a)
    }
    
    var afficherOnglet = function(a){
        var li = a.parentNode;
            var div = a.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

            if(li.classList.contains('actif')){
                return false;
            }
            //on retire la active de l,onglet actif
            div.querySelector('.tabs .actif').classList.remove('actif');
            //on ajoute la class active a l,onglet actuel 
            li.classList.add('actif');
            
            //on retire la classs active sur le contenu actif
            div.querySelector('.tab-content.actif').classList.remove('actif');
            

            //on ajoute class active sur le contenu correpondant a mon clic

            div.querySelector(a.getAttribute('href')).classList.add('actif');

    }

    var tabs = document.querySelectorAll('.tabs a');
    for(var i=0; i < tabs.length; i++){
        tabs[i].addEventListener('click', function(e){

           afficherOnglet(this);

        })
    }

    var hash = window.location.hash;
    var a = document.querySelector('a[href="'+ hash +'"]');
    if(a !== null && !a.parentNode.classList.contains('actif')){
            afficherOnglet(a)
    }
   })();


   const h1 = document.querySelectorAll('h1');

   function getChrono(){
       const now = new Date().getTime();
       const countDownDate = new Date('May 1, 2022').getTime();
       const distanceBase = countDownDate - now;

       const days = Math.floor(distanceBase /(1000 * 60 * 60 * 24));
       const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((distanceBase % (1000 * 60 * 60 )) / (1000 * 60));
       const seconde = Math.floor((distanceBase % (1000 * 60)) / 1000);

       for(var i=0; i < h1.length; i++){
        h1[i].innerHTML = `${days}j ${hours}h ${minutes}m ${seconde}s`;
       }


      
   }

  setInterval(()=>{
    getChrono();
  }, 1000);