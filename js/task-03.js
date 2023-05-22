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
const galery = document.querySelector(".gallery") 

images.forEach (({url, alt}) => {
  const imageElement= `<li><img src="${url}" alt="${alt}"/></li>`
  galery.insertAdjacentHTML('beforeend', imageElement);
  console.log (imageElement)
});

const insert = document.querySelector('images');
/*insert.addEventListener('click', () => {
  const gallerySelect = document.querySelector('.gallery');
  subject.insertAdjacentHTML(gallerySelect.value, '<strong>inserted text</strong>');
});*/

 /*const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  document.location.reload()*/
