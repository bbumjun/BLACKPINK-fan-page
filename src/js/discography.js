import "./common";
import "../scss/discography/discography.scss";
import {serverUrl} from './config'
require.context("../images/common", true);
require.context("../images/discography", true);

window.addEventListener('load',()=>{
        const albumList = document.querySelector('#album-list')
        albumList.addEventListener('click',({target})=>{
            const container = document.querySelector('#album-info')
            container.style.display = 'block';
            if(target.dataset.id){
                fetch(`${serverUrl}/gallery/album-info/${target.dataset.id}`)   
                .then(res=>res.json())
                .then(({albumInfo})=>{
                const coverImage = container.querySelector('.album-info__detail__cover img')
                const title = container.querySelector('.album-info__detail__container__description__title')
                const description =container.querySelector('.album-info__detail__container__description__text')            
                const video = container.querySelector('.album-info__detail__container__video iframe')
                coverImage.src = albumInfo.coverImageSrc
                video.src = albumInfo.videoSrc
                title.textContent = albumInfo.title
                description.textContent = albumInfo.text
                window.scrollTo({top:container.getBoundingClientRect().top,behavior:'smooth'})
            })
        }
    })
})