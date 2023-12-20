import React from 'react';
import ChefsItem from '@/Pages/Landing/ChefsSection/ChefsItem';

export default function ChefsList(){
    return (
        <div className="row gy-4">
            <ChefsItem src="assets/img/chefs/chefs-4.jpg" href1="karguinano" href2="karguinano" href3="karlosarguinano" name="Karlos Arguiñano" restaurant="Restaurante Karlos Arguiñano" desc="Renowned Spanish chef and TV personality. He is a culinary maestro blending a passion for cooking with infectious charisma. His engaging style and approachable recipes have made his cooking show a television staple in Spain."/>
            <ChefsItem src="assets/img/chefs/chefs-5.jpg" href1="berasategui" href2="martinberasategui" href3="martin.berasategui.olazabal" name="Martín Berasategui" restaurant="Restaurante Martín Berasategui" desc="Acclaimed Spanish chef. He is a culinary virtuoso renowned for his innovative approach to Basque cuisine. With multiple Michelin stars, his restaurants are gastronomic landmarks. Berasategui's culinary artistry reflects a commitment to excellence and a profound appreciation for fine dining."/>
            <ChefsItem src="assets/img/chefs/chefs-6.jpg" href1="GordonRamsay" href2="gordongram" href3="gordonramsay" name="Gordon Ramsay" restaurant="Restaurant Gordon Ramsay" desc="Fiery and iconic British chef. He is a culinary force to be reckoned with. Renowned for his Michelin-starred restaurants and TV shows, Ramsay's dynamic personality and high standards have made him a global culinary icon. His passion for perfection and no-nonsense approach define his unparalleled success in the culinary world."/>
        </div>
    )

}