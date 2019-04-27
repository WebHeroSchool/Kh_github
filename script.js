const ul = document.querySelector('.container');
const url = new URL(window.location);
const username = url.searchParams.get('username');
console.log(username);

fetch(`https://api.github.com/users/${username}`)
	.then( res => res.json())
  .then( res => {
    ul.innerHTML =  `
      <li><a href="${res.html_url}">${res.name}</a></li>
      <li><img src="${res.avatar_url}"</li>
      <li>${res.bio}</li>
    `;
  })
  .catch( err => alert('Информация о пользователе не доступна'))