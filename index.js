let freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

function updateFreelancerList() {
  const freelancerListContainer = document.getElementById("freelancerList");
  freelancerListContainer.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const freelancerElement = document.createElement("div");
    freelancerElement.classList.add("freelancer");
    freelancerElement.textContent = `${freelancer.name} - ${freelancer.occupation} - Starting Price: $${freelancer.price}`;
    freelancerListContainer.appendChild(freelancerElement);
  });
}

function updateAveragePrice() {
  const averagePriceContainer = document.querySelector("#averagePrice");
  const totalStartingPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const averagePrice = totalStartingPrice / freelancers.length || 0;
  averagePriceContainer.textContent = `Average Starting Price: $${averagePrice.toFixed(
    2
  )}`;
}

function getRandomOccupation() {
  const occupations = ["gardener", "programmer", "teacher", "driver"];
  const randomIndex = Math.floor(Math.random() * occupations.length);
  return occupations[randomIndex];
}

function simulateNewFreelancer() {
  setInterval(() => {
    const newFreelancer = {
      name: getRandomName(),
      occupation: getRandomOccupation(),
      price: getRandomPrice(),
    };
    freelancers.push(newFreelancer);

    updateFreelancerList();
    updateAveragePrice();
  }, 5000);
}

function getRandomName() {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eva",
    "Frank",
    "Grace",
    "Hank",
  ];
  const randomnames = Math.floor(Math.random() * names.length);
  return names[randomnames];
}

function getRandomPrice() {
  // Generate a random price between 20 and 100
  return Math.floor(Math.random() * (100 - 20 + 1)) + 20;
}

// Initial setup
updateFreelancerList();
simulateNewFreelancer();
