import FunctionalityItem from "./FunctionalityItem";

export default function FunctionalityList(){
    return (
        <div className="content_functionalities ps-0 ps-lg-5">
            <FunctionalityItem src="assets/img/recipes2.png" name="Recipes" desc="There are more than 1000 recipes available for you."/>
            <FunctionalityItem src="assets/img/shopping_list.png" name="Shopping list" desc="You can make your own shopping list to never forget to buy your food."/>
            <FunctionalityItem src="assets/img/frigorifico.png" name="Inventory" desc="You can register all the food you have available"/>
            <FunctionalityItem src="assets/img/users.png" name="Users" desc="There are more than 1000 recipes available for you."/>
        </div>
    )

}