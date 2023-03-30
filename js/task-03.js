const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery')

  images.forEach(image=>{
const img=document.createElement('img')

img.classList.add('image_CFH')
img.src=image.url;
img.alt=image.alt

const listItem=document.createElement('li')
galleryList.appendChild(listItem)
listItem.appendChild(img)
});
// listItem.insertAdjacentHTML("afterend", string);
galleryList.style.listStyle='none'
galleryList.style.display='flex'
// listItem.style.width='30%'

