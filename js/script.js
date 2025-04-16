$(document).ready(function () {
  const evolutions = [
    {
      name: "Espeon",
      type: "Psychic",
      description: "Espeon is highly intelligent and uses its psychic abilities to predict enemy movements. It’s deeply loyal to its trainer and grows stronger in the sunlight.",
      strongAgainst: ["Fighting", "Poison"],
      weakTo: ["Bug", "Ghost", "Dark"],
      evolutionMethod: "Evolve Eevee with high friendship during the day (without knowing a Fairy-type move).",
      image: "images/espeon.png"
    },
    {
      name: "Flareon",
      type: "Fire",
      description: "Flareon's internal flame burns at over 1600°C. It inhales air and heats it in its flame sac before breathing it out as fire.",
      strongAgainst: ["Grass", "Bug", "Ice", "Steel"],
      weakTo: ["Water", "Rock", "Ground"],
      evolutionMethod: "Use a Fire Stone on Eevee.",
      image: "images/flareon.png"
    },
    {
      name: "Glaceon",
      type: "Ice",
      description: "Glaceon can lower its body temperature to freeze the air around it, creating ice crystals that it uses in battle.",
      strongAgainst: ["Dragon", "Flying", "Grass", "Ground"],
      weakTo: ["Fire", "Fighting", "Rock", "Steel"],
      evolutionMethod: "Level up near an Ice Rock or use an Ice Stone on Eevee.",
      image: "images/glaceon.png"
    },
    {
      name: "Jolteon",
      type: "Electric",
      description: "Jolteon's fur grows sharp like needles and becomes charged with electricity, allowing it to unleash powerful thunderbolts.",
      strongAgainst: ["Flying", "Water"],
      weakTo: ["Ground"],
      evolutionMethod: "Use a Thunder Stone on Eevee.",
      image: "images/jolteon.png"
    },
    {
      name: "Leafeon",
      type: "Grass",
      description: "Leafeon's cells are plantlike, and it performs photosynthesis. It’s known to purify the air around it.",
      strongAgainst: ["Water", "Ground", "Rock"],
      weakTo: ["Fire", "Flying", "Bug", "Ice", "Poison"],
      evolutionMethod: "Level up near a Moss Rock or use a Leaf Stone on Eevee.",
      image: "images/leafeon.png"
    },
    {
      name: "Sylveon",
      type: "Fairy",
      description: "Sylveon uses its ribbon-like feelers to detect emotions and soothe hostility in both humans and Pokémon.",
      strongAgainst: ["Dragon", "Dark", "Fighting"],
      weakTo: ["Poison", "Steel"],
      evolutionMethod: "Evolve Eevee with high friendship while it knows a Fairy-type move.",
      image: "images/sylveon.png"
    },
    {
      name: "Umbreon",
      type: "Dark",
      description: "Umbreon lurks in the shadows and uses its glowing rings to intimidate foes. It’s calm, mysterious, and fiercely protective.",
      strongAgainst: ["Ghost", "Psychic"],
      weakTo: ["Fighting", "Bug", "Fairy"],
      evolutionMethod: "Evolve Eevee with high friendship during the night.",
      image: "images/umbreon.png"
    },
    {
      name: "Vaporeon",
      type: "Water",
      description: "Vaporeon has gills and fins like a fish, allowing it to live underwater. Its body can become as fluid as water itself.",
      strongAgainst: ["Fire", "Rock", "Ground"],
      weakTo: ["Electric", "Grass"],
      evolutionMethod: "Use a Water Stone on Eevee.",
      image: "images/vaporeon.png"
    }
  ];

  let currentIndex = 0;

  function displayEvolution(index) {
    const evo = evolutions[index];
    $('#evo-cards').html(`
      <div class="card animate-entry ${evo.type.toLowerCase()}">
        <img src="${evo.image}" alt="${evo.name}">
        <h2>${evo.name}</h2>
        <p><strong>Type:</strong> ${evo.type}</p>
        <p>${evo.description}</p>
        <p><strong>Strong Against:</strong> ${evo.strongAgainst.join(', ')}</p>
        <p><strong>Weak To:</strong> ${evo.weakTo.join(', ')}</p>
        <p><strong>How to Evolve:</strong> ${evo.evolutionMethod}</p>
        <div class="nav-buttons">
          <button class="prev-evo">⬅ Back</button>
          <button class="next-evo">Next ➡</button>
        </div>
      </div>
    `);
  }

  // Initial display
  displayEvolution(currentIndex);

  // Swipe handling
  $('#evo-cards').on("swipeleft", () => {
    currentIndex = (currentIndex + 1) % evolutions.length;
    displayEvolution(currentIndex);
  });

  $('#evo-cards').on("swiperight", () => {
    currentIndex = (currentIndex - 1 + evolutions.length) % evolutions.length;
    displayEvolution(currentIndex);
  });

  // Button navigation
  $(document).on("click", ".next-evo", () => {
    currentIndex = (currentIndex + 1) % evolutions.length;
    displayEvolution(currentIndex);
  });

  $(document).on("click", ".prev-evo", () => {
    currentIndex = (currentIndex - 1 + evolutions.length) % evolutions.length;
    displayEvolution(currentIndex);
  });
});