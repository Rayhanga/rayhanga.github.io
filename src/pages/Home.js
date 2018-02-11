import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js'
import './Home.css';

class Home extends Component {
  componentDidMount() {
    document.title='Rayhan Gusty Alif';
  }

  render() {
    return(
      <div>
        <Header />
        <div className='container'>
          <div id="lipsum">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus libero sed ipsum molestie tincidunt. Maecenas tristique ornare magna, ac posuere est consequat at. Curabitur ultricies elit mauris, id fermentum arcu tempor eget. Donec porttitor, massa vitae lacinia mattis, ante leo congue purus, eget congue odio nunc auctor metus. Ut ex enim, suscipit sit amet sem in, varius ullamcorper urna. Proin eu dapibus dolor, sagittis vestibulum tortor. Curabitur pellentesque tellus pretium, imperdiet urna nec, congue mauris. Vestibulum eu sem vitae quam rhoncus iaculis. Nullam quis velit augue.
            </p>
            <p>
              Cras aliquam mi sed neque bibendum, in sollicitudin diam condimentum. Quisque sapien erat, iaculis ac risus sit amet, euismod euismod lacus. Donec id mollis neque. Fusce lacus ligula, elementum eu condimentum in, condimentum sit amet mauris. Aenean turpis nibh, dictum nec eleifend at, faucibus at velit. Nulla vel metus pretium, molestie leo ac, vulputate risus. Pellentesque vulputate et leo a volutpat. Phasellus condimentum aliquam erat aliquam ultricies. Maecenas lacinia est id porta tristique. Duis lobortis laoreet lectus. Nulla iaculis augue nec erat sagittis vulputate. Suspendisse potenti. Proin quis lacinia orci. Vivamus nisi dui, auctor non venenatis ut, blandit sit amet nibh.
            </p>
            <p>
              Nulla felis nulla, volutpat id velit sed, rutrum dignissim orci. Integer nec luctus orci. Maecenas sit amet rutrum felis. Vivamus tempus malesuada dictum. Donec viverra sem nec tincidunt ullamcorper. Mauris commodo, velit maximus hendrerit facilisis, leo ante sodales nunc, a aliquam sapien nunc at mi. Sed sed efficitur risus. In et neque facilisis libero tempus pharetra. Cras imperdiet lectus lectus, eget consectetur erat dapibus at. Nullam eu vehicula felis. Quisque pretium diam mi, eget mollis ipsum ultricies non. Donec lacinia, diam et finibus gravida, lectus risus ultrices est, quis luctus ante magna at massa.
            </p>
            <p>
              Aliquam vel dolor ut nisi gravida ullamcorper eget id justo. Vestibulum tempor venenatis pellentesque. Duis lectus quam, ornare sed imperdiet et, pharetra id erat. Duis efficitur quam at eros condimentum ultricies. Proin placerat, magna pharetra consequat cursus, odio quam pulvinar nisi, ut facilisis orci mi ut quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin eu velit facilisis, congue libero ut, scelerisque arcu. Pellentesque ut vehicula erat, et congue tellus. Nullam vel accumsan erat, sed interdum arcu.
            </p>
            <p>
              Ut et sem rhoncus, aliquet dolor vel, bibendum nibh. Nunc at tincidunt nulla, sit amet elementum ex. Phasellus sit amet augue velit. Etiam felis mi, pulvinar in ex non, dignissim interdum erat. Phasellus sed ullamcorper arcu, at suscipit quam. Duis purus orci, placerat sed mauris in, vehicula egestas ante. Pellentesque ac nisi blandit, varius velit in, tristique enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In euismod est metus. Aliquam erat volutpat. Donec dapibus est purus, vitae porttitor lectus interdum blandit. Vestibulum ut dolor semper dui ornare placerat id ac tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus libero sed ipsum molestie tincidunt. Maecenas tristique ornare magna, ac posuere est consequat at. Curabitur ultricies elit mauris, id fermentum arcu tempor eget. Donec porttitor, massa vitae lacinia mattis, ante leo congue purus, eget congue odio nunc auctor metus. Ut ex enim, suscipit sit amet sem in, varius ullamcorper urna. Proin eu dapibus dolor, sagittis vestibulum tortor. Curabitur pellentesque tellus pretium, imperdiet urna nec, congue mauris. Vestibulum eu sem vitae quam rhoncus iaculis. Nullam quis velit augue.
            </p>
            <p>
              Cras aliquam mi sed neque bibendum, in sollicitudin diam condimentum. Quisque sapien erat, iaculis ac risus sit amet, euismod euismod lacus. Donec id mollis neque. Fusce lacus ligula, elementum eu condimentum in, condimentum sit amet mauris. Aenean turpis nibh, dictum nec eleifend at, faucibus at velit. Nulla vel metus pretium, molestie leo ac, vulputate risus. Pellentesque vulputate et leo a volutpat. Phasellus condimentum aliquam erat aliquam ultricies. Maecenas lacinia est id porta tristique. Duis lobortis laoreet lectus. Nulla iaculis augue nec erat sagittis vulputate. Suspendisse potenti. Proin quis lacinia orci. Vivamus nisi dui, auctor non venenatis ut, blandit sit amet nibh.
            </p>
            <p>
              Nulla felis nulla, volutpat id velit sed, rutrum dignissim orci. Integer nec luctus orci. Maecenas sit amet rutrum felis. Vivamus tempus malesuada dictum. Donec viverra sem nec tincidunt ullamcorper. Mauris commodo, velit maximus hendrerit facilisis, leo ante sodales nunc, a aliquam sapien nunc at mi. Sed sed efficitur risus. In et neque facilisis libero tempus pharetra. Cras imperdiet lectus lectus, eget consectetur erat dapibus at. Nullam eu vehicula felis. Quisque pretium diam mi, eget mollis ipsum ultricies non. Donec lacinia, diam et finibus gravida, lectus risus ultrices est, quis luctus ante magna at massa.
            </p>
            <p>
              Aliquam vel dolor ut nisi gravida ullamcorper eget id justo. Vestibulum tempor venenatis pellentesque. Duis lectus quam, ornare sed imperdiet et, pharetra id erat. Duis efficitur quam at eros condimentum ultricies. Proin placerat, magna pharetra consequat cursus, odio quam pulvinar nisi, ut facilisis orci mi ut quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin eu velit facilisis, congue libero ut, scelerisque arcu. Pellentesque ut vehicula erat, et congue tellus. Nullam vel accumsan erat, sed interdum arcu.
            </p>
            <p>
              Ut et sem rhoncus, aliquet dolor vel, bibendum nibh. Nunc at tincidunt nulla, sit amet elementum ex. Phasellus sit amet augue velit. Etiam felis mi, pulvinar in ex non, dignissim interdum erat. Phasellus sed ullamcorper arcu, at suscipit quam. Duis purus orci, placerat sed mauris in, vehicula egestas ante. Pellentesque ac nisi blandit, varius velit in, tristique enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In euismod est metus. Aliquam erat volutpat. Donec dapibus est purus, vitae porttitor lectus interdum blandit. Vestibulum ut dolor semper dui ornare placerat id ac tellus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus libero sed ipsum molestie tincidunt. Maecenas tristique ornare magna, ac posuere est consequat at. Curabitur ultricies elit mauris, id fermentum arcu tempor eget. Donec porttitor, massa vitae lacinia mattis, ante leo congue purus, eget congue odio nunc auctor metus. Ut ex enim, suscipit sit amet sem in, varius ullamcorper urna. Proin eu dapibus dolor, sagittis vestibulum tortor. Curabitur pellentesque tellus pretium, imperdiet urna nec, congue mauris. Vestibulum eu sem vitae quam rhoncus iaculis. Nullam quis velit augue.
            </p>
            <p>
              Cras aliquam mi sed neque bibendum, in sollicitudin diam condimentum. Quisque sapien erat, iaculis ac risus sit amet, euismod euismod lacus. Donec id mollis neque. Fusce lacus ligula, elementum eu condimentum in, condimentum sit amet mauris. Aenean turpis nibh, dictum nec eleifend at, faucibus at velit. Nulla vel metus pretium, molestie leo ac, vulputate risus. Pellentesque vulputate et leo a volutpat. Phasellus condimentum aliquam erat aliquam ultricies. Maecenas lacinia est id porta tristique. Duis lobortis laoreet lectus. Nulla iaculis augue nec erat sagittis vulputate. Suspendisse potenti. Proin quis lacinia orci. Vivamus nisi dui, auctor non venenatis ut, blandit sit amet nibh.
            </p>
            <p>
              Nulla felis nulla, volutpat id velit sed, rutrum dignissim orci. Integer nec luctus orci. Maecenas sit amet rutrum felis. Vivamus tempus malesuada dictum. Donec viverra sem nec tincidunt ullamcorper. Mauris commodo, velit maximus hendrerit facilisis, leo ante sodales nunc, a aliquam sapien nunc at mi. Sed sed efficitur risus. In et neque facilisis libero tempus pharetra. Cras imperdiet lectus lectus, eget consectetur erat dapibus at. Nullam eu vehicula felis. Quisque pretium diam mi, eget mollis ipsum ultricies non. Donec lacinia, diam et finibus gravida, lectus risus ultrices est, quis luctus ante magna at massa.
            </p>
            <p>
              Aliquam vel dolor ut nisi gravida ullamcorper eget id justo. Vestibulum tempor venenatis pellentesque. Duis lectus quam, ornare sed imperdiet et, pharetra id erat. Duis efficitur quam at eros condimentum ultricies. Proin placerat, magna pharetra consequat cursus, odio quam pulvinar nisi, ut facilisis orci mi ut quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin eu velit facilisis, congue libero ut, scelerisque arcu. Pellentesque ut vehicula erat, et congue tellus. Nullam vel accumsan erat, sed interdum arcu.
            </p>
            <p>
              Ut et sem rhoncus, aliquet dolor vel, bibendum nibh. Nunc at tincidunt nulla, sit amet elementum ex. Phasellus sit amet augue velit. Etiam felis mi, pulvinar in ex non, dignissim interdum erat. Phasellus sed ullamcorper arcu, at suscipit quam. Duis purus orci, placerat sed mauris in, vehicula egestas ante. Pellentesque ac nisi blandit, varius velit in, tristique enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In euismod est metus. Aliquam erat volutpat. Donec dapibus est purus, vitae porttitor lectus interdum blandit. Vestibulum ut dolor semper dui ornare placerat id ac tellus.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home
