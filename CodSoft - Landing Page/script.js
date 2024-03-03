    var header = document.querySelector('#header')
    async function getHeader(){
        var headerText = await fetch('header.html')
        var content  = await headerText.text()
        header.innerHTML = content
    }
    getHeader()

    var mainContent = document.querySelector('#main-content') 
    async function getMaincontent(){
        var mainContentText = await fetch('main-content.html')
        var content  = await mainContentText.text()
        mainContent.innerHTML = content
    }
    getMaincontent()

    var serviceContent = document.querySelector('#service-content')
    async function getServiceContent(){
        var serviceContentText = await fetch('service-content.html')
        var content = await serviceContentText.text()
        serviceContent.innerHTML = content
    }
    getServiceContent()

    var aboutContent = document.querySelector('#about-content')
    async function getAboutContent(){
        var aboutContentText = await fetch('about-content.html')
        var content = await aboutContentText.text()
        aboutContent.innerHTML = content
    }
    getAboutContent()

    var testimonialContent = document.querySelector('#testimonial-content')
    async function getTestimonial(){
        var testimonialContentText = await fetch('testimonial.html')
        var content = await testimonialContentText.text()
        testimonialContent.innerHTML = content
    }
    getTestimonial()

    var footer = document.querySelector('#footer')
    async function getFooter(){
        var footerText = await fetch('footer.html')
        var content  = await footerText.text()
        footer.innerHTML = content
    }
    getFooter()

    const testimonial = [
        {
            id:1,
            name:'Vaishnavi Dhulam',
            image:'https://htmldemo.zcubethemes.com/decare/img/testimonial/testi_avatar.png'
        },
        {
            id:2,
            name:'Jhon Doe',
            image:'https://htmldemo.zcubethemes.com/decare/img/testimonial/testi_avatar_02.png'
        },
        {
            id:3,
            name:'Ariana Gomez',
            image:'https://htmldemo.zcubethemes.com/decare/img/testimonial/testi_avatar.png'
        },
        {
            id:4,
            name:'Edwin Cena',
            image:'https://htmldemo.zcubethemes.com/decare/img/testimonial/testi_avatar_02.png'
        } 
    ];

    const profile = document.querySelector('.review #profile');
    const author = document.querySelector('.author h1');
    const authorIndex = document.querySelector('.author p');

    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');

    let currentItem = 0;

    window.addEventListener("DOMContentLoaded",function(){
        perform(currentItem);
        console.log("dksjdhkj")
    })

    function perform(person){
        const item = testimonial[person];
        profile.src = item.image; 
        authorIndex.innerHTML = item.id;
        author.innerHTML = item.name;
    }

    console.log(nextBtn)
    nextBtn.addEventListener("click",function(){
        currentItem++;
        if(currentItem > testimonial.length - 1){
            alert("No Next Review")
            currentItem = 0;
        }
        perform(currentItem);
    });

    prevBtn.addEventListener("click",function(){
        currentItem--;
        if(currentItem < 0){
            alert("No Previous Review");
        }
        perform(currentItem);
    })


    // main content reveal //
    var creveals = document.querySelectorAll('.creveal')
    console.log(creveals)
    window.addEventListener('DOMContentLoaded',function(){
        for(i=0;i<creveals.length;i++){
            let windowHeight = this.window.innerHeight;
            let topReveal = creveals[i].getBoundingClientRect().top;
            let revealPoint = 100;
            if(topReveal<windowHeight-revealPoint){
                creveals[i].classList.remove('creveal');
                creveals[i].classList.add('active');
            }else{
                creveals[i].classList.remove('creveal');
                creveals[i].classList.add('reveal');
            }
        }
    })

    // service content reveal //
    var sreveal = document.querySelectorAll('.sreveal')
    console.log(sreveal)
    window.addEventListener('scroll',function(){
        for(i=0;i<sreveal.length;i++){
            let windowHeight = this.window.innerHeight;
            let topReveal = sreveal[i].getBoundingClientRect().top;
            let revealPoint = 50;
            if(topReveal<windowHeight-revealPoint){
                sreveal[i].classList.remove('sreveal');
                sreveal[i].classList.add('actives');
            }else{
                sreveal[i].classList.remove('sreveal');
                sreveal[i].classList.add('sreveal');
            }
        }
    })

    // about content reveal //
    var areveal = document.querySelectorAll('.areveal')
    console.log(areveal)
    window.addEventListener('scroll',function(){
        for(i=0;i<areveal.length;i++){
            let windowHeight = this.window.innerHeight;
            let topReveal = areveal[i].getBoundingClientRect().top;
            let revealPoint = 50;
            if(topReveal<windowHeight-revealPoint){
                areveal[i].classList.remove('areveal');
                areveal[i].classList.add('activea');
            }else{
                areveal[i].classList.remove('areveal');
                areveal[i].classList.add('areveal');
            }
        }
    })

    // testimonial content reveal //
    var treveal = document.querySelectorAll('.treveal')
    console.log(treveal)
    window.addEventListener('scroll',function(){
        for(i=0;i<treveal.length;i++){
            let windowHeight = this.window.innerHeight;
            let topReveal = treveal[i].getBoundingClientRect().top;
            let revealPoint = 50;
            if(topReveal<windowHeight-revealPoint){
                treveal[i].classList.remove('treveal');
                treveal[i].classList.add('activet');
            }else{
                treveal[i].classList.remove('treveal');
                treveal[i].classList.add('treveal');
            }
        }
    })


    // footer content reveal //
    var freveal = document.querySelectorAll('.freveal')
    console.log(freveal)
    window.addEventListener('scroll',function(){
        for(i=0;i<freveal.length;i++){
            let windowHeight = this.window.innerHeight;
            let topReveal = freveal[i].getBoundingClientRect().top;
            let revealPoint = 50;
            if(topReveal<windowHeight-revealPoint){
                freveal[i].classList.remove('freveal');
                freveal[i].classList.add('activef');
            }else{
                freveal[i].classList.remove('freveal');
                freveal[i].classList.add('freveal');
            }
        }
    })