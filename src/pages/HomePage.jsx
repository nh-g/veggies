import { getCategories } from '../data/categoryMasonry.js';

import MappingList from '../components/atoms/MappingList.jsx';
import Hero from '../components/sections/Hero.jsx';
import Masonry from '../components/sections/Masonry.jsx';
export default function HomePage() {
    return (
      <div className="home">
        <Hero />
        <div className="spacer intro"/>
        <MappingList getData={getCategories()} Component={Masonry} />
        <div className="spacer intro"/>

      </div>
    );
}
