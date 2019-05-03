const ul = document.querySelector('.container');
const username  = 'defunkt';
const url = `https://api.github.com/users/${username}`;

fetch(url)
	.then( res => res.json())
  .then( res => {
    ul.innerHTML =  `
      <li><a href="${res.html_url}">${res.name}</a></li>
      <li><img src="${res.avatar_url}"</li>
      <li>${res.bio}</li>
    `;
  })
  .catch( err => alert('Информация о пользователе не доступна'))
