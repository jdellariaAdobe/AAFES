import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const title = document.createElement('h2');
  title.textContent = 'Find Your Opportunity';
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const img = row.querySelector('picture');
    const a = row.querySelector('a');
    img.alt = a.textContent;
    a.setAttribute('title', a.textContent);
    a.textContent = '';
    a.classList = '';
    a.append(img);
    li.append(a);
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(title, ul);
}
