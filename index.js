const news=document.getElementById('news')
const container=document.getElementsByClassName('container')[1];
console.log(container);
fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=21&context=embed')
.then((data)=>data.json())
.then((data)=>{
    data.forEach(element => {
        console.log(element);
        
       let div= document.createElement('div');
       const image=document.createElement('img')
       let a=document.createElement('a')
       let p=document.createElement('p')
        image.src=element.jetpack_featured_media_url
        a.innerText=element.slug
        a.href=element.link

        p.innerText=element.yoast_head_json.description
        div.append(image,a,p)
        div.classList.add("element")
        container.append(div);
    });
})

