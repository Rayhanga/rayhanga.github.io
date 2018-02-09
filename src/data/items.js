const initialItems = {
  /*
  ---Item Format---
  title:
  img_source:
  img_alt:
  description:
  link:
  link_description:

  ---Item Types---
  article
  article-link
  article-photo
  article-photo-link OR article-link-photo
  */
  item1: {
    title: "About Me",
    description: "I'm a weird senior high school student, yet a gamer and a programmer. I do really need a proper life to sustain my lifetime as a human being."
  },
  item2: {
    title: "React.js",
    description: "The npm module that i use to make this website."
  },
  item3: {
    title: "About This Website",
    description: "This website is still a work in progress, i'll try to make updates recently."
  }
};

//for main app.js
<div class="row">
  {
    Object
    /*
    This will make the item list from the json file.
    It'll loop to make an object for each "Key" based from the json.
    */
      .keys(this.state.items) //Get "Key" from the items state.
      .map(key => <Item key={key} meta={this.state.items[key]} />) // The loop.
  }
</div>

export {initialItems};
