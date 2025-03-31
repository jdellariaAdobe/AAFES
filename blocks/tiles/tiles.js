import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    const link = row.querySelector('a');
    const picture = row.querySelector('picture');
    if (link) {
      link.innerText = '';
      link.append(picture);
      li.textContent = '';
      li.append(link);
    } else {
      li.append(picture);
    }
    ul.append(li);
  });
  ul.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
