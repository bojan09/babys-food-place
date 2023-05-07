import React from "react";
import { Link } from "react-router-dom";

// RoutePath
import { updateRecipe } from "../../constants";

// jsx code based on media query
import { useMediaQuery } from "react-responsive";

// react-carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// assets
import { meal_1 } from "../../assets";

// components
import { RecipePosts, RecipeComments } from "../../components/Recipes";

const RecipePage = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      {/* Container */}
      <div className="md:flex justify-center xs:mx-2 md:mx-[9.4rem]">
        {/* Heading & Category - Container */}
        <div>
          {/* Heading - Container */}
          <h1 className="textSubHead xs:text-[26px] sm:text-[32px] robotoSlab xs:ml-4 md:ml-5 mb-[2rem] ">
            Recipe Title
          </h1>

          {/* Recipe Picture - Container */}
          {isMobile && (
            <img
              src={meal_1}
              alt="meal_1"
              className="xs:w-[92vw] rounded-lg mx-auto mb-[1.5rem]"
            />
          )}

          {/* Category - Container */}
          <span className="rounded-[15px] bg-color_green text-white font-bold robotoSlab px-3 py-1 capitalize xs:ml-3 md:ml-5">
            category
          </span>
          {/* Recipe Paragraph - Container */}
          <p className="py-2 px-4 text-color_midgray md:px-5 md:text-[20px] xs:text-[18px] my-4 md:w-[90%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam
            doloribus saepe ipsa, quam ex, porro libero, praesentium velit omnis
            eveniet error repellendus. Voluptates aspernatur temporibus dolore.
            Quas quaerat illo, accusantium cumque at necessitatibus minus
            pariatur labore ratione, odio enim quos maxime. Doloribus dolores
            voluptate, culpa similique rem natus fugit itaque ea nihil, minus
            voluptas laboriosam repellat exercitationem expedita officiis aut
            sed enim eos laudantium mollitia. Voluptate nisi itaque commodi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            magnam temporibus ullam quae quo laudantium! Necessitatibus error
            itaque ipsum? Explicabo voluptas veritatis dolor aut ipsam tempora
            exercitationem quae fugiat Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sunt repellat quod amet molestiae consequatur
            reiciendis alias placeat temporibus, voluptas repudiandae asperiores
            laudantium id aperiam necessitatibus! Facere tenetur facilis
            doloremque voluptates quas! Temporibus veniam minus quo eos magni,
            autem laborum inventore beatae ea, neque non maiores corrupti atque
            consectetur porro? Facilis.
          </p>

          {/*----------- Add ternary here, only if user is logged in this will show, otherwise hidden -----------*/}
          {/* Recipe Made By - Container */}
          <p className="robotoSlab text-color_orange font-bold mb-4 ml-4">
            Recipe Made By: John Smith
          </p>

          {/* Edit Recipe - Container */}
          <div className="xs:flex md:block flex-col justify-center items-center md:mt-[3rem] md:ml-4">
            <p className="robotoSlab text-color_orange font-bold">
              Hi John. Does the recipe need any changes?
            </p>
            <Link to={updateRecipe}>
              <button className="xs:mt-10 md:mt-5 xs:w-[175px] md:w-[210px] h-[45px] rounded-lg bg-color_green uppercase text-white font-bold text-[18px] ">
                Edit Recipe
              </button>
            </Link>
          </div>
        </div>
        {/* Recipe Picture - Container */}
        {isDesktopOrLaptop && (
          <img
            src={meal_1}
            alt="meal_1"
            className="md:w-[700px] md:h-[500px] rounded-lg mx-auto mt-[2rem]"
          />
        )}
      </div>

      {/* !---------- Recipe Comments ----------! */}
      <div className="flex justify-center items-center mb-[2rem] mt-[8rem]">
        <RecipeComments />
      </div>

      {/* You might also like - Container */}
      <div className="xs:mt-[5rem]">
        <h1 className="textMainHead md:after:w-[75vw] xs:after:w-[15vw] xs:my-4  xs:text-[28px] sm:text-[36px] text-center">
          You might also like
        </h1>

        {/* Recipes Posts - Container */}
        {isDesktopOrLaptop && (
          <div className="md:flex xs:grid justify-center items-center gap-8">
            <RecipePosts />
            <RecipePosts />
            <RecipePosts />
            <RecipePosts />
          </div>
        )}
      </div>

      {/* Recipes Posts Carousel - Container */}
      {isMobile && (
        <Carousel
          swipeable={true}
          draggable={false}
          infinite={true}
          keyBoardControl={true}
          customTransition="all .8"
          transitionDuration={700}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          responsive={responsive}
        >
          <div className="grid justify-center items-center">
            <RecipePosts />
          </div>
        </Carousel>
      )}
    </div>
  );
};

export default RecipePage;
