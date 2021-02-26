
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreate = (dogs) => {
  let links = Object.values(dogs);
  let names = Object.keys(dogs);
  const doggies = [];
  names.forEach( (dog, i) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.innerHTML = dog;
    a.href = links[i];
    li.className = 'dog-link';
    li.appendChild(a);
    doggies.push(li);
  });

  return doggies;
} 

const attachDogLinks = () => {
  const dropDown = document.querySelector(".drop-down-dog-list");
  const links = dogLinkCreate(dogs);

  links.forEach(link => dropDown.appendChild(link));
}
attachDogLinks();

const handleEnter = () => {
  const links = document.querySelectorAll('.dog-link');

  links.forEach(link => {
    link.classList.add('show-link');
  });
}

const handleLeave = () => {
  const links = document.querySelectorAll('.dog-link');

  links.forEach(link => {
    link.classList.remove('show-link');
  });
}

const dropDownNav = document.querySelector('.drop-down-dog-nav');

dropDownNav.addEventListener('mouseenter', handleEnter);
dropDownNav.addEventListener('mouseleave', handleLeave);
