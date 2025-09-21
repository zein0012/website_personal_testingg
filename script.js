document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll('a[href]');
  links.forEach(link => {
    link.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith('#') || href === '') return;
      e.preventDefault();
      document.body.classList.remove('fade-in');
      document.body.classList.add('fade-out');
      setTimeout(()=>{window.location=href;},500);
    });
  });

  const skillBoxes = document.querySelectorAll('.skill-box');
  skillBoxes.forEach(box=>{
    box.addEventListener('click', ()=>{
      const images = box.getAttribute('data-images').split(',');
      showSkillGallery(images, box.innerText);
    });
  });
});

document.write(`
<style>
#skill-gallery{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:none;justify-content:center;align-items:center;z-index:9999;}
#skill-gallery img{max-width:80%;max-height:80%;margin:0 15px;border-radius:15px;box-shadow:0 5px 25px rgba(0,0,0,0.7);transition:transform 0.3s;}
#skill-gallery img:hover{transform:scale(1.05);}
#skill-gallery .close{position:absolute;top:20px;right:30px;font-size:40px;color:#f39c12;cursor:pointer;}
</style>
<div id="skill-gallery"><span class="close">&times;</span><div id="gallery-images" style="display:flex;justify-content:center;align-items:center;"></div></div>
`);

function showSkillGallery(images,title){
  const gallery=document.getElementById('skill-gallery');
  const container=document.getElementById('gallery-images');
  container.innerHTML='';
  images.forEach(src=>{
    const img=document.createElement('img'); img.src=src;
    container.appendChild(img);
  });
  gallery.style.display='flex';
  const closeBtn=gallery.querySelector('.close');
  closeBtn.onclick=()=>gallery.style.display='none';
  gallery.onclick=(e)=>{if(e.target===gallery) gallery.style.display='none';}
}
