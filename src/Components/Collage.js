import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/collage.css'
import AvatarImage from '../images/najs.jpg'
import Mirage from '../images/Mirage_CS2.png'
import Dust from '../images/najs.jpg'
import Vertigo from '../images/Vertigo.png'
import Anubis from '../images/najs.jpg'
import Ancient from '../images/Ancient.png'
import Inferno from '../images/najs.jpg'
import Nuke from '../images/Nuke_map.png'
import Overpass from '../images/overpass.png'


export const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 2
    }
}



export const SingleCard = (props) =>
{
  return (
    <div class="bckgrnd"><img src={props.image} alt='ok'/>
<div class="bckgrnd">
  <h4>{props.map_name}</h4>
  <h4 class='text'>{props.score} </h4>
    </div>
  </div>
  )
}

export const Cards = () => {
  const users = [
    { map_image: Nuke, map_name: 'Nuke', map_score: '13-2' },
    { map_image: Overpass, map_name: 'Overpass', map_score: '13-5' },
    { map_image: Vertigo, map_name: 'Vertigo', map_score: '13-2' },
    { map_image: Mirage, map_name: 'Mirage', map_score: '13-2' },
    { map_image: Ancient, map_name: 'Ancient', map_score: '13-2' },
    { map_image: Ancient, map_name: 'Ancient', map_score: '13-2' },
    { map_image: Ancient, map_name: 'Ancient', map_score: '13-2' },
    { map_image: Ancient, map_name: 'Ancient', map_score: '13-2' },
  ];

  return (
    <Carousel focusOnSelect={true} centerMode={true} responsive={responsive} containerClass="carousel-cont" infinite={false}>
      {users.map((user, key) => (
        <SingleCard image={user.map_image} map_name={user.map_name} score={user.map_score} key={key} />
      ))}
    </Carousel>
  );
};


