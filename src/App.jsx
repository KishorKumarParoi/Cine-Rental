import { useContext, useState } from 'react';
import { places } from './components/data.js';
import { ImageSizeContext } from './contexts/Context.jsx';
import { getImageUrl } from './utility/utils.jsx';

// In this example, toggling the checkbox changes the imageSize prop passed 
// to each <PlaceImage>. The checkbox state is held in the top-level App component, 
// but each <PlaceImage> needs to be aware of it.

// Currently, App passes imageSize to List, which passes it to each Place,
//  which passes it to the PlaceImage. Remove the imageSize prop, and instead 
//  pass it from the App component directly to PlaceImage.

// You can declare context in Context.js.

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;


  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
