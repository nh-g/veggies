import { getCategories } from '../data/categoryMasonry.js';

import MappingList from '../components/atoms/MappingList.jsx';
import Hero from '../components/sections/Hero.jsx';
import CategoryMasonry from '../components/sections/CategoryMasonry.jsx';
export default function HomePage() {
    return (
      <div className="home">
        <Hero />
        <div className="spacer intro"/>
        <MappingList getData={getCategories()} Component={CategoryMasonry} />
        <div className="spacer intro"/>

      </div>
    );
}
