import React from 'react';

import WhyUsItem from "./WhyUsItem";

export default function WhyUsList(){
    return (

        <div className="row gy-4">
            <WhyUsItem class="bi-clipboard-data" name="Culinary Diversity" desc="Explore an endless array of flavors. From comforting classics to avant-garde creations, 
                      TasteIT takes you on a culinary journey that celebrates gastronomic diversity."/>
            <WhyUsItem class="bi-gem" name="Active Community" desc="Join a passionate community. Share, comment, and connect with home chefs and food enthusiasts worldwide. 
                      In TasteIT, food brings people together."/>
            <WhyUsItem class="bi-inboxes" name="Daily Inspiration" desc="Find inspiration for every meal. With fresh recipes, culinary trends, and unique tips, 
                      TasteIT is your daily source for culinary creativity."/>
        </div>
    )

}