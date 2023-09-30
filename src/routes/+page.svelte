<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";

  // Hardcoded contractors list for demonstration purposes
  let contractors = [
      {
          id: 1,
          name: "John Doe",
          specialty: "John Deere Tractors",
          location: "Texas, USA",
          rating: 4.5,
          image: "path_to_image_1.jpg"
      },
      {
          id: 2,
          name: "Jane Smith",
          specialty: "CAT Heavy Equipment",
          location: "California, USA",
          rating: 4.7,
          image: "path_to_image_2.jpg"
      },
      // ... Add more contractors as needed
  ];

  let currentPage: string = 'search'; // Default view

function handleNavigation(event: CustomEvent<{ page: string }>) {
    currentPage = event.detail.page;
}
</script>

<style>
  /* Custom styling for modern feel */
  .card-shadow {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
    .content {
        padding-bottom: 80px; /* Adjust depending on the height of your navbar to prevent overlap */
    }
</style>

<div class="p-4 bg-gray-100 h-full min-h-screen content">
    <div class="max-w-screen-lg mx-auto">
      <input type="text" placeholder="🔍 Search Contractors..." class="p-3 bg-white border rounded-full mb-6 w-full shadow-sm focus:outline-none focus:border-indigo-300">

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {#each contractors as contractor}
              <div class="bg-white rounded-lg overflow-hidden card-shadow">
                  <img src="{contractor.image}" alt="{contractor.name}" class="w-full h-48 object-cover">
                  <div class="p-4">
                      <h2 class="text-xl mb-2 font-semibold">{contractor.name}</h2>
                      <p class="text-gray-500 text-sm mb-2 truncate"><strong>Specialty:</strong> {contractor.specialty}</p>
                      <p class="text-gray-500 text-sm mb-4 truncate"><strong>Location:</strong> {contractor.location}</p>
                      <div class="flex items-center mb-3">
                          <span class="text-yellow-400 mr-2">⭐ {contractor.rating}</span>
                          <span class="text-gray-600 text-sm">({contractor.rating} Rating)</span>
                      </div>
                      <button class="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full w-full text-center">Contact</button>
                  </div>
              </div>
          {/each}
      </div>
  </div>
</div>

<Navbar on:navigate={handleNavigation} />
