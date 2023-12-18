import React from 'react';
import StatsItem from '@/Pages/Landing/StatsSection/StatsItem';

export default function StatsList(){
    return (
        <div className="row gy-4">
            <StatsItem count={1048} name="Recipes"/>
            <StatsItem count={344} name="Users"/>
            <StatsItem count={7} name="Chefs"/> 
            <StatsItem count={24869} name="Comments"/>       
        </div>
    )

}