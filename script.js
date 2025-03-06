const pets = [
  {
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"
  },
  {
    "petId": 2,
    "breed": "Siamese",
    "category": "Cat",
    "date_of_birth": "2022-09-05",
    "price": 800,
    "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
    "gender": "Female",
    "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
    "vaccinated_status": "Fully",
    "pet_name": "Mia"
  },
  {
    "petId": 3,
    "category": "Rabbit",
    "date_of_birth": "2022-04-20",
    "price": 1500,
    "image": "https://i.ibb.co.com/s3PXSwD/pet-3.jpg",
    "gender": "Male",
    "pet_details": "This male African Grey rabbit is a small, friendly companion born on April 20, 2022. He prefers a calm environment and enjoys gentle handling. Partially vaccinated, he's a great choice for rabbit lovers who want a peaceful, easygoing pet. Priced at $1500, he's perfect for a quiet home environment.",
    "vaccinated_status": "Partially",
    "pet_name": "Coco"
  },
  {
    "petId": 4,
    "breed": "Holland Lop",
    "category": "Rabbit",
    "date_of_birth": "2023-06-30",
    "price": 200,
    "image": "https://i.ibb.co.com/4g3Jrjf/pet-4.jpg",
    "gender": "Female",
    "pet_details": "This adorable female Holland Lop rabbit, born on June 30, 2023, is known for her calm and gentle nature. She thrives in quiet environments and enjoys being handled with care. Priced at $200, she is an ideal pet for those looking for a low-maintenance, friendly rabbit. Note that she is not vaccinated.",
    "vaccinated_status": "Not",
    "pet_name": "Nibbles"
  },
  {
    "petId": 5,
    "breed": "Beagle",
    "category": "Dog",
    "date_of_birth": null,
    "price": 900,
    "image": "https://i.ibb.co.com/BwnvDMY/pet-5.jpg",
    "gender": "Female",
    "pet_details": "This curious female Beagle was born on March 22, 2023, and loves to explore and play. She is great with kids and enjoys outdoor adventures. Fully vaccinated and priced at $900, she's perfect for an active family looking for a loyal, energetic companion.",
    "vaccinated_status": "Fully",
    "pet_name": "Bella"
  },
  {
    "petId": 6,
    "breed": "Bengal",
    "category": "Cat",
    "price": 950,
    "image": "https://i.ibb.co.com/PFbWMGk/pet-6.jpg",
    "gender": "Male",
    "pet_details": "This playful male Bengal cat, born on November 10, 2022, is full of energy and loves to climb and engage with toys. Fully vaccinated and priced at $950, he's ideal for active households looking for a curious and adventurous feline friend.",
    "vaccinated_status": "Fully",
    "pet_name": "Leo"
  },
  {
    "petId": 7,
    "breed": "Bengal",
    "category": "Cat",
    "date_of_birth": "2022-11-10",
    "price": 950,
    "image": "https://i.ibb.co.com/QXbXctF/pet-7.jpg",
    "gender": "Male",
    "pet_details": "This male Bengal cat, born on November 10, 2022, is energetic and playful. He loves exploring, climbing, and playing with interactive toys. Fully vaccinated and priced at $950, he's perfect for anyone looking for an active, intelligent, and lively cat.",
    "vaccinated_status": null,
    "pet_name": "Max"
  },
  {
    "petId": 8,
    "breed": "Beagle",
    "category": "Dog",
    "date_of_birth": "2023-03-22",
    "price": 1200,
    "image": "https://i.ibb.co.com/MCDfNqN/pet-8.jpg",
    "pet_details": "Born on March 22, 2023, this female Beagle is curious and loves outdoor adventures. Fully vaccinated, she enjoys playing with children and exploring new places. Priced at $1200, she's a perfect fit for families looking for a playful and affectionate dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Luna"
  },
  {
    "petId": 9,
    "breed": "Beagle",
    "category": "Dog",
    "date_of_birth": "2023-03-22",
    "price": null,
    "image": "https://i.ibb.co.com/XyXBtb8/pet-9.jpg",
    "gender": "Male",
    "pet_details": "This male Beagle, born on March 22, 2023, is curious, playful, and great with children. Fully vaccinated and priced at $1900, he is perfect for families looking for an active, adventurous companion that loves to explore.",
    "vaccinated_status": "Fully",
    "pet_name": "Buddy"
  },
  {
    "petId": 10,
    "breed": "Labrador Retriever",
    "category": "Dog",
    "date_of_birth": "2023-05-15",
    "price": 1100,
    "image": "https://i.ibb.co.com/hg9XBJV/pet-10.jpg",
    "gender": "Female",
    "pet_details": "This cheerful female Labrador is a playful bundle of joy. Born on May 15, 2023, she loves water and outdoor activities. Fully vaccinated and priced at $1100, she's perfect for families who enjoy active lifestyles.",
    "vaccinated_status": "Fully",
    "pet_name": "Daisy"
  },
  {
    "petId": 11,
    "breed": "French Bulldog",
    "category": "Dog",
    "date_of_birth": "2023-07-20",
    "price": 2500,
    "image": "https://i.ibb.co.com/47Sxf3X/pet-11.jpg",
    "gender": "Male",
    "pet_details": "This adorable male French Bulldog, born on July 20, 2023, is known for his playful and affectionate nature. Fully vaccinated and priced at $2500, he makes a perfect companion for apartment living.",
    "vaccinated_status": "Fully",
    "pet_name": "Ollie"
  },
  {
    "petId": 12,
    "breed": "Poodle",
    "category": "Dog",
    "date_of_birth": "2023-08-10",
    "price": 1500,
    "image": "https://i.ibb.co.com/R9ZHvDD/pet-12.jpg",
    "gender": "Female",
    "pet_details": "This elegant female Poodle, born on August 10, 2023, is intelligent and eager to learn. Fully vaccinated and priced at $1500, she's perfect for families looking for a trainable and loving companion.",
    "vaccinated_status": "Fully",
    "pet_name": "Chloe"
  },
  {
    "petId": 13,
    "breed": "Netherland Dwarf",
    "category": "Rabbit",
    "date_of_birth": "2023-05-10",
    "price": 180,
    "image": "https://i.ibb.co.com/f4MRfWZ/pet-13.jpg",
    "gender": "Male",
    "pet_details": "This tiny male Netherland Dwarf rabbit, born on May 10, 2023, is perfect for small spaces. He enjoys gentle handling and loves to explore. Priced at $180, he's great for first-time rabbit owners.",
    "vaccinated_status": "Not",
    "pet_name": "Pip"
  },
  {
    "petId": 14,
    "breed": "Mini Rex",
    "category": "Rabbit",
    "date_of_birth": "2023-06-01",
    "price": 220,
    "image": "https://i.ibb.co.com/MPJmYwc/pet-14.jpg",
    "gender": "Female",
    "pet_details": "This sweet female Mini Rex rabbit, born on June 1, 2023, is known for her soft fur and friendly personality. Priced at $220, she's a great choice for families looking for a cuddly companion. Note that she is not vaccinated.",
    "vaccinated_status": "Not",
    "pet_name": "Fluffy"
  },
  {
    "petId": 15,
    "breed": "Holland Lop",
    "category": "Rabbit",
    "date_of_birth": "2023-07-15",
    "price": 200,
    "image": "https://i.ibb.co.com/RQ6smFK/pet-15.jpg",
    "gender": "Male",
    "pet_details": "This charming male Holland Lop rabbit, born on July 15, 2023, is playful and enjoys hopping around. Priced at $200, he makes a wonderful pet for children. He is not vaccinated.",
    "vaccinated_status": "Not",
    "pet_name": "Binky"
  },
  {
    "petId": 16,
    "breed": "English Angora",
    "category": "Rabbit",
    "date_of_birth": "2023-08-05",
    "price": 300,
    "image": "https://i.ibb.co.com/zZHPJNh/pet-16.jpg",
    "gender": "Female",
    "pet_details": "This fluffy female English Angora rabbit, born on August 5, 2023, is known for her long, luxurious fur. Priced at $300, she's perfect for families who enjoy grooming and cuddling. She is not vaccinated.",
    "vaccinated_status": "Not",
    "pet_name": "Snowball"
  },
  {
    "petId": 17,
    "breed": "Maine Coon",
    "category": "Cat",
    "date_of_birth": "2022-12-01",
    "price": 1200,
    "image": "https://i.ibb.co.com/85w4kSt/pet-17.jpg",
    "gender": "Male",
    "pet_details": "This majestic male Maine Coon, born on December 1, 2022, is known for his gentle demeanor and friendly personality. Fully vaccinated and priced at $1200, he's great with families and other pets.",
    "vaccinated_status": "Fully",
    "pet_name": "Thor"
  }
]


for (let pet of pets) {
  const parent = document.getElementById("push-cointainer");
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="shadow-sm p-3 border border-bordercolor rounded-lg">
            <!-- image  -->
            <div class="rounded-lg"><img src=${pet.image} alt=""></div>
            <!-- text content  -->
            <div class="my-3 ">
                <h3 class="font-bold text-lg">${pet.breed}</h3>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/diversity.png" alt="">Breed : <span id="bread-name">${pet.breed}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/material-two-tone/24/calendar--v1.png" alt="">Birth: <span id="date-of-birth">${pet.date_of_birth}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/gender.png" alt="">Male : <span id="male-info">${pet.gender}</span></p>
                <p class="my-3 text-gray-500 flex gap-2">$ Price : <span id="price-info">${pet.price}</span></p>
            </div>
            <!-- button  -->
            <div class="my-3 flex justify-center my-3 border-t-2 pt-5 gap-4 ">
                <button class="border rounded-lg py-1 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                </button>
                <button class="text-primary border px-2 py-1 rounded-lg">Adopt</button>
                <button onclick="details(${pet.petId})" class="text-primary border px-2 py-1 rounded-lg">Details</button>
            </div>
        </div>`;
  parent.append(div);
}

function details(petId) {
  const pet = pets.find(p => p.petId === petId);
  const detailsCard = document.getElementById("details-card");
  detailsCard.classList.remove("hidden");
  detailsCard.classList.add("block");
  detailsCard.innerHTML = `
        <div class="fixed inset-0 z-10 bg-black bg-opacity-20 flex justify-center itmes-center h-max ">
            <div class="max-w-lg p-2 rounded-xl border border-bordercolor bg-white">
                <div class="rounded-lg p-2 w-full"><img src=${pet.image} class="w-full" alt=""></div>
                <!-- text content  -->
                <div class=" ">
                    <h3 class="font-bold text-lg">${pet.breed}</h3>
                    <p class="my-1 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/diversity.png"
                            alt="">Breed : <span id="bread-name">${pet.breed}</span></p>
                    <p class="my-1 text-gray-500 flex gap-2"><img
                            src="https://img.icons8.com/material-two-tone/24/calendar--v1.png" alt="">Birth: <span
                            id="date-of-birth">${pet.date_of_birth}</span></p>
                    <p class="my-1 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/gender.png"
                            alt="">Male : <span id="male-info">${pet.gender}</span></p>
                    <p class="my-1 text-gray-500 flex gap-2">$ Price : <span id="price-info">${pet.price}</span></p>
                    <h3 class="font-bold text-lg my-1 ">Details</h3>
                    <p class="text-gray-500">${pet.pet_details}</p>
                    <div class="w-full mx-auto my-1"><button onclick="goBack()" class="py-2 px-4 rounded-lg text-primary w-full border">Go Back</button></div> 
                </div>
            </div>
        </div>`;
}

function goBack() {
  const detailsCard = document.getElementById("details-card");
  detailsCard.classList.remove("block");
  detailsCard.classList.add("hidden");
}
// only cat catgory 
const catCatagory = document.getElementById("cat-catagory");
catCatagory.addEventListener("click", event => {
  // filter only cat 
  const cat = pets.filter(p => p.category === "Cat");
  const parent = document.getElementById("push-cointainer");
  // append korar age sob faka koire nilam 
  parent.innerHTML = '';
  // console.log(parent);
  for (let pet of cat) {
    // parent.innerHTML=""
    const div = document.createElement("div");
    // console.log(div);
    // console.log(pet);
    div.innerHTML = `
        <div class="shadow-sm p-3 border border-bordercolor rounded-lg">
            <!-- image  -->
            <div class="rounded-lg"><img src=${pet.image} alt=""></div>
            <!-- text content  -->
            <div class="my-3 ">
                <h3 class="font-bold text-lg">${pet.breed}</h3>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/diversity.png" alt="">Breed : <span id="bread-name">${pet.breed}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/material-two-tone/24/calendar--v1.png" alt="">Birth: <span id="date-of-birth">${pet.date_of_birth}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/gender.png" alt="">Male : <span id="male-info">${pet.gender}</span></p>
                <p class="my-3 text-gray-500 flex gap-2">$ Price : <span id="price-info">${pet.price}</span></p>
            </div>
            <!-- button  -->
            <div class="my-3 flex justify-center my-3 border-t-2 pt-5 gap-4 ">
                <button class="border rounded-lg py-1 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                </button>
                <button class="text-primary border px-2 py-1 rounded-lg">Adopt</button>
                <button onclick="details(${pet.petId})" class="text-primary border px-2 py-1 rounded-lg">Details</button>
            </div>
        </div>`;
    parent.appendChild(div);
  }

});
const dogCatgory = document.getElementById("dog-catgory");
dogCatgory.addEventListener("click", event => {
  // filter dog 
  const dog = pets.filter(p => p.category === "Dog");
  const parent = document.getElementById("push-cointainer");
  // append korar age sob faka koire nilam 
  parent.innerHTML = '';
  // console.log(parent);
  for (let pet of dog) {
    // parent.innerHTML=""
    const div = document.createElement("div");
    // console.log(div);
    // console.log(pet);
    div.innerHTML = `
        <div class="shadow-sm p-3 border border-bordercolor rounded-lg">
            <!-- image  -->
            <div class="rounded-lg"><img src=${pet.image} alt=""></div>
            <!-- text content  -->
            <div class="my-3 ">
                <h3 class="font-bold text-lg">${pet.breed}</h3>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/diversity.png" alt="">Breed : <span id="bread-name">${pet.breed}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/material-two-tone/24/calendar--v1.png" alt="">Birth: <span id="date-of-birth">${pet.date_of_birth}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/gender.png" alt="">Male : <span id="male-info">${pet.gender}</span></p>
                <p class="my-3 text-gray-500 flex gap-2">$ Price : <span id="price-info">${pet.price}</span></p>
            </div>
            <!-- button  -->
            <div class="my-3 flex justify-center my-3 border-t-2 pt-5 gap-4 ">
                <button class="border rounded-lg py-1 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                </button>
                <button class="text-primary border px-2 py-1 rounded-lg">Adopt</button>
                <button onclick="details(${pet.petId})" class="text-primary border px-2 py-1 rounded-lg">Details</button>
            </div>
        </div>`;
    parent.appendChild(div);
  }

})
const rabbitCatagory = document.getElementById("rabbit-catagory");
rabbitCatagory.addEventListener("click", event => {
  const rabit = pets.filter(p => p.category === "Rabbit");
  const parent = document.getElementById("push-cointainer");
  // append korar age sob faka koire nilam 
  parent.innerHTML = '';
  // console.log(parent);
  for (let pet of rabit) {
    // parent.innerHTML=""
    const div = document.createElement("div");
    // console.log(div);
    // console.log(pet);
    div.innerHTML = `
        <div class="shadow-sm p-3 border border-bordercolor rounded-lg">
            <!-- image  -->
            <div class="rounded-lg"><img src=${pet.image} alt=""></div>
            <!-- text content  -->
            <div class="my-3 ">
                <h3 class="font-bold text-lg">${pet.breed}</h3>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/diversity.png" alt="">Breed : <span id="bread-name">${pet.breed}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/material-two-tone/24/calendar--v1.png" alt="">Birth: <span id="date-of-birth">${pet.date_of_birth}</span></p>
                <p class="my-3 text-gray-500 flex gap-2"><img src="https://img.icons8.com/ios/20/gender.png" alt="">Male : <span id="male-info">${pet.gender}</span></p>
                <p class="my-3 text-gray-500 flex gap-2">$ Price : <span id="price-info">${pet.price}</span></p>
            </div>
            <!-- button  -->
            <div class="my-3 flex justify-center my-3 border-t-2 pt-5 gap-4 ">
                <button class="border rounded-lg py-1 px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                </button>
                <button class="text-primary border px-2 py-1 rounded-lg">Adopt</button>
                <button onclick="details(${pet.petId})" class="text-primary border px-2 py-1 rounded-lg">Details</button>
            </div>
        </div>`;
    parent.appendChild(div);
  }
});
const birdCatagory = document.getElementById("bird-catagory");
birdCatagory.addEventListener("click", () => {
  const parent = document.getElementById("push-cointainer");
  parent.innerHTML = ""
  const div = document.createElement("div");
  div.classList.add("col-span-4")
  div.innerHTML = `<div class="rounded-lg border border-bordercolor bg-[#efebeb] py-10 my-3">
            <!-- image  -->
            <div class="flex justify-center"><img src="./images/error.webp" alt=""></div>
            <!-- text  -->
            <div class="space-y-3 flex flex-col items-center">
                <h3 class="text-3xl font-bold text-center">No Information Available</h3>
                <p class="text-gray-500 max-w-lg text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ipsum incidunt molestiae neque et nobis? Et iusto adipisci eum libero, quasi nostrum quia, quae
                    voluptatum, odio itaque molestias perferendis numquam delectus!</p>
            </div>
        </div>`
parent.appendChild(div)
})



