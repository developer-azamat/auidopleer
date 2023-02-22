let title = document.querySelector('.music-title')
let cover = document.querySelector('#image')
let audio = document.querySelector('#audio')
let prewBtn = document.querySelector("#prewBtn")
let play = document.querySelector("#play")
let nextBtn = document.querySelector("#nextBtn")
let musics = document.querySelector(".left-musics")
let menu = document.querySelector(".menu")
let musicLeft = document.getElementsByClassName("music-left")



const songs = [
    'Heather - Conan Gray',
    'Billie Eilish - Lovely',
    'Orxan - Unutmak Istiyorum',
    'Rauf Faik - метро'
]
// variables
let index = 0
let isLoading = false

function useData(index) {
   title.textContent = index
   cover.src = `./img/${index}.jpg`
   audio.src = `./musics/${index}.mp3`
//    audio.play()
}

useData(songs[index])

play.addEventListener("click",()=>{
    if(!isLoading){
        isLoading = true
        audio.play()
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`
        cover.classList.add("active")
    }else {
        isLoading = false
        audio.pause()
        play.innerHTML = `<i class="fa-solid fa-play"></i>`
        cover.classList.remove("active")
    }
})



songs.forEach((element) => {
    musics.innerHTML += `<li><i class="fa-solid fa-music"></i><span class="music-left">${element}</span></li>`
});
// console.log(musicLeft);
Array.from(musicLeft).forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        useData(songs[index])
        isLoading = true
        audio.play()
        play.innerHTML = `<i class="fa-solid fa-pause"></i>`
        cover.classList.add("active")
        musics.style.display = "none"
    })
})


menu.addEventListener("click", ()=>{
    if(musics.style.display == "none"){
        musics.style.display = "block"
    }else{
        musics.style.display = "none"
    }
})

function nextMusic(){
    if (index == songs.length-1){
        index = 0
    } else {
        index++
    }
    useData(songs[index])
    audio.play()
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`
    cover.classList.add("active")
}

nextBtn.addEventListener('click', nextMusic)


function prewMusic(){
    if (index == 0){
        index = songs.length-1
    } else {
        index--
    }
    useData(songs[index])
    audio.play()
    play.innerHTML = `<i class="fa-solid fa-pause"></i>`
    cover.classList.add("active")
}

prewBtn.addEventListener('click', prewMusic)
