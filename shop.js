document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        {title: 'Chicken Biriyani', image:'https://recipes.net/wp-content/uploads/2023/05/air-fryer-chicken-biryani-recipe_6968eb6ab4a5ae22d136dab86c9ea8af.jpeg', url: 'https://recipes.net/cuisine/indian-recipes/air-fryer-indian/air-fryer-chicken-biryani-recipe/'},
        {title: 'Pasta', image: 'https://assets.epicurious.com/photos/5988e3458e3ab375fe3c0caf/1:1/w_3607,h_3607,c_limit/How-to-Make-Chicken-Alfredo-Pasta-hero-02082017.jpg', url: 'https://www.epicurious.com/recipes/food/views/simple-one-skillet-chicken-alfredo-pasta'},
        {title: 'Dosa Batter', image: 'https://www.theculinarypeace.com/wp-content/uploads/2019/08/eZy-Watermark-26-08-2019-02-16-43PM.jpg', url: 'https://www.theculinarypeace.com/dosa-batter-mysore-dosa/'},
        {title: 'Chicken Hakka Noodles', image:'https://www.whiskaffair.com/wp-content/uploads/2018/03/Chicken-Hakka-Noodles-2-3.jpg', url: 'https://www.whiskaffair.com/chicken-hakka-noodles-recipe/'},
        {title: 'Meat Balls', image: 'https://media.istockphoto.com/id/175542555/photo/meatballs.jpg?s=612x612&w=0&k=20&c=osKQ8xcbqe0ot-XqpxXVXURpulnHKKQ09gs1-dqPMCk=', url: 'https://www.myrecipes.com/recipe/beyond-meat-balls'},
        {title: 'Veg Soup', image: 'https://www.sharmispassions.com/wp-content/uploads/2022/12/VegClearSoup4.jpg', url: 'https://www.sharmispassions.com/clear-veg-soup-recipe/'},
        {title: 'Pizza', image:'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg', url: 'https://www.southernliving.com/recipes/supreme-pizza'},
        {title: 'Sandwich', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/sandwich-recipes-swasthi.jpg', url: 'https://indianhealthyrecipes.com/sandwich-recipes/'},
        {title: 'Biseble Bath', image: 'https://www.theculinarypeace.com/wp-content/uploads/2019/09/eZy-Watermark-24-09-2019-01-35-05PM-2-1.jpg', url: 'https://www.theculinarypeace.com/bisi-bele-bath-recipe/'},
        {title: 'Matar panner', image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/02/Matar-Paneer.jpg', url: 'https://www.cubesnjuliennes.com/matar-paneer-recipe/'},
        {title: 'Chana masala', image: 'https://www.sharethespice.com/wp-content/uploads/2022/07/Chana-Masala-Featured.jpg', url: 'https://www.sharethespice.com/chana-masala-recipe/'},
        {title: 'Chocolate Cheese Cake', image: 'https://houseofnasheats.com/wp-content/uploads/2022/01/Best-Chocolate-Cheesecake-1.jpg', url: 'https://houseofnasheats.com/chocolate-cheesecake-recipe/'}

    ];
   

    const recipeContainer = document.getElementById("recipe-container");

    recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");

        const image = document.createElement("img");
        image.src = recipe.image;
        image.alt = recipe.title;
        image.classList.add("recipe-image");

        const title = document.createElement("h2");
        title.textContent = recipe.title;

        const url = document.createElement("a");
        url.href = recipe.url;
        url.textContent = "View Recipe";
        url.classList.add("recipe-url");

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(url);

        recipeContainer.appendChild(card);
    });
});