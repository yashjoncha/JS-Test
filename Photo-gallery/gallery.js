var artworks = [
    {
      description: "A lake in Norway in autumn.",
      address: "https://picsum.photos/id/123/400"
    },
    {
      description: "A Red flower",
      address: "https://picsum.photos/id/234/400"
    },
    {
      description: "A House in the US",
      address: "https://picsum.photos/id/809/400"
    },
    {
      description: "Happiness and peace",
      address: "https://picsum.photos/id/635/400"
    },
    {
      description: "My Batman action figure",
      address: "IMG_1981.JPG"
    }
  ]
  
  var feed = document.getElementById('art-feed');
  
  for (var i = 0; i < artworks.length; i++) {
    var feedBox = document.createElement('div');
    feedBox.setAttribute('class', 'feed-box');
  
    var feedImage = document.createElement('div');
    feedImage.setAttribute('class', 'feed-image');
  
    var img = document.createElement('img');
    img.setAttribute('src', artworks[i].address);
  
    var feedDescription = document.createElement('div');
    feedDescription.setAttribute('class', 'feed-description');
  
    var text = document.createTextNode(artworks[i].description)
  
    feedImage.appendChild(img);
    feedDescription.appendChild(text);
  
    feedBox.appendChild(feedImage);
    feedBox.appendChild(feedDescription);
  
    feed.appendChild(feedBox);
  }