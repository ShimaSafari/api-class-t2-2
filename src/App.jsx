import { useState, useEffect } from "react";
const App = () => {
  const [myCard, setMyCard] = useState([]);

  /* run and comment functions below -one by one- to work well */
  useEffect(() => {
    platziGet();
    // platziDelete();
    // platziPost();
    // platziPut();
  }, []);

  /* You can access the list of 200 products by using the /products endpoint. */
  const platziGet = async () => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const getAllData = await response.json();
    console.log(response.status);
    // console.log(getAllData);
    setMyCard(getAllData);
  };

  /* You can create a new product by sending an object like the following to /products/ */
  const platziPost = async () => {
    const postData = {
      title: "Sleek green sports shoes",
      price: 100,
      description:
        "close up green sports shoes on a blue sea level with blue sky and white clouds bright light background creative advertisement ai generative",
      categoryId: 4,
      images: [
        "https://www.vecteezy.com/photo/31605148-close-up-green-sports-shoes-on-a-blue-sea-level-with-blue-sky-and-white-clouds-bright-light-background-creative-advertisement-ai-generative",
      ],
    };
    const response = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(postData),
    });
    const postjsonData = await response.json();
    console.log(response.status);
    // console.log(postjsonData);
    setMyCard(postjsonData);
  };

  /* You can update a product by sending an object like the following and adding the id as a parameter: /products/<id> */
  const platziPut = async () => {
    const putData = {
      title: "hello guys, title Changed",
      description:
        "Step into the future with this eye-catching high-top sneaker, designed for those who dare to stand out. The sneaker features a sleek silver body with striking gold accents, offering a modern twist on classic footwear. Its high-top design provides support and style, making it the perfect addition to any avant-garde fashion collection. Grab a pair today and elevate your shoe game!",
      price: 100,
    };

    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products/36",
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(putData),
      }
    );
    const postjsonData = await response.json();
    console.log(response.status);
    // console.log(postjsonData);
    setMyCard(postjsonData);
  };

  /* You can delete a product by adding the id as a parameter: /products/<id> */
  const platziDelete = async () => {
    const response = await fetch(
      "https://api.escuelajs.co/api/v1/products/214",
      {
        method: "delete",
      }
    );
    const jsonData = await response.json();
    console.log(response.status);
    // console.log(jsonData);
    setMyCard(jsonData);
  };
  return (
    <div className="flex flex-row flex-wrap justify-center gap-5 m-8">
      <h1 className="block w-full flex flex-row flex-wrap justify-center text-3xl">
        Platzi Docs :
        <a
          className="text-gray-500"
          href="https://fakeapi.platzi.com/en/about/introduction/"
        >
          https://fakeapi.platzi.com/en/about/introduction/
        </a>
      </h1>
      {myCard.map((values) => {
        const imageSrc = values.images[0];
        const imageSrc2 = values.images[0].slice(3, values.images[0].length - 3);
        // console.log(imageSrc);
        console.log(imageSrc2);

        console.log(values.data);
        return (
          <>
            <div class="card w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img
                class="p-8 rounded-t-lg"
                src={values.images[0] ? imageSrc : imageSrc2}
                alt="product image"
              />

              <div class="px-5 pb-5">
                <a href="">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {values.title}
                  </h5>
                </a>
                <h5 class="text-sm font-semibold tracking-tight text-gray-900 my-4 dark:text-white">
                  {values.description}
                </h5>

                <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">
                    ${values.price}
                  </span>
                  <a
                    href=""
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default App;
