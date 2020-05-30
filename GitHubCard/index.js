/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/



/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/



/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/
// 
// 
// 
// 
// bigknell

const followersArray = ['https://api.github.com/users/isaac-gorman','https://api.github.com/users/tetondan', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/justsml','https://api.github.com/users/luishrd','https://api.github.com/users/bigknell' ];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info"> 
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createCard(obj){
  const newCard = document.createElement('div'),
        proImg = document.createElement('img'),
        cardInfo = document.createElement('div'), // all the data bellow needs to be appended within this div
        nameTitle = document.createElement('h3'),
        username = document.createElement('p'),
        locationA = document.createElement('p'),
        profile = document.createElement('p'), // need to append a link within it with the href value of user GitHub-url
        profileLink = document.createElement('a'), // append this link to profile
        followersCount = document.createElement('p'),
        followingCount = document.createElement('p'),
        uBio = document.createElement('p');

        newCard.classList.add('card');
        cardInfo.classList.add('card-info');
        nameTitle.classList.add('name');
        username.classList.add('username');

        proImg.src = obj.data.avatar_url;
        nameTitle.textContent = obj.data.name;
        username.textContent = obj.data.login;
        locationA.textContent = obj.data.location;
        profileLink.href = obj.data.html_url;
        followersCount.textContent = `Followers: ${obj.data.followers}`;
        followingCount.textContent = `Following: ${obj.data.following}`; 
        uBio.textContent = `Bio: ${obj.data.bio}`;

        profile.append(profileLink);
        cardInfo.append(nameTitle);
        cardInfo.append(username);
        cardInfo.append(locationA);
        cardInfo.append(profile);
        cardInfo.append(followersCount);
        cardInfo.append(followingCount);
        cardInfo.append(uBio);
        newCard.append(proImg);
        newCard.append(cardInfo);
  
  return newCard;
}

const cardsContainer = document.querySelector('.cards');
console.log(cardsContainer);



// axios
//   .get('https://api.github.com/users/isaac-gorman')
//   .then(function callback(response){
//     console.log(response.data)
//     console.log(createCard(response)) 
//     return cardsContainer.append(createCard(response));
//     });

// const stringVals = followersArray.map(function callback(crrV){
//   console.log(crrV.toString());
//   return crrV.toString()
// })

function returnCards(){
  return followersArray.map(function callback(crrV){
    axios
      .get(crrV)
      .then(function callback(response){
        console.log(response.data)
        console.log(createCard(response)) 
        return cardsContainer.append(createCard(response));
      });
  })
}

returnCards()

// axios
//   .get(stringVals)
  // .then(function callback(response){
  //   console.log(response.data)
  //   // console.log(createCard(response)) 
  //   // return cardsContainer.append(createCard(response));
  //   });



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
