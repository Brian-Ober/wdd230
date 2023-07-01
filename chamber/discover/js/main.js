const date_now = new Date();
console.log(date_now)
const full_date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full'}).format(date_now)
console.log(full_date)
document.querySelector('.dateformat').textContent = full_date;

function togglemenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

currDate =Date.now();
let prevDate = localStorage.getItem('lastvisit');
if (!localStorage.getItem('lastvisit')) {
    localStorage.setItem('lastvisit', Date.now());
    document.querySelector('.visitdays').textContent = "This is your 1st visit"
}
else {
    prevDate = localStorage.getItem('lastvisit')
    days= (Math.floor((currDate - prevDate) /1000/60/60/24))
    console.log(days);
    document.querySelector('.visitdays').textContent = "Days since last visit " +days;
    localStorage.setItem('lastvisit', Date.now());
}
const options = {
    threshold:1,
    rootMargin: "0px 0px 100px 0px"
}
const pimages = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source =img.getAttribute('data-src');
    if (!source) {
        return;
    }
    img.src= source;
}

const io = new IntersectionObserver ( 
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target)
            }
        });
    }, options);

    pimages.forEach(image => {
        io.observe(image);
        })
        
let updated = document.lastModified;
document.querySelector('.lastupdated').textContent = updated;