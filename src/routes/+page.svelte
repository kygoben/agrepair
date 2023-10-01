<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";

    let contractors = [
        {
            id: 1,
            name: "John Doe",
            specialty: "CAT Heavy Equipment",
            location: "Texas, USA",
            rating: 4.5,
            ratingCount: 10,
            image: "https://i.ytimg.com/vi/v8lAZZcUEjw/maxresdefault.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            specialty: "John Deere Tractors",
            location: "California, USA",
            rating: 4.7,
            ratingCount: 12,
            image: "https://ogden_images.s3.amazonaws.com/www.farm-news.com/images/2015/11/01014704/521745_1.jpg"
        },
        {
            id: 3,
            name: "Mike Johnson",
            specialty: "Komatsu Excavators",
            location: "New York, USA",
            rating: 4.2,
            ratingCount: 8,
            image: "https://www.leavittmachinery.com/images/default-source/service/maintenance-programs/planned-maintenance-service.jpg?sfvrsn=1b7212a3_4"
        },
        {
            id: 4,
            name: "Sarah Lee",
            specialty: "Hitachi Machinery",
            location: "Florida, USA",
            rating: 4.6,
            ratingCount: 15,
            image: "https://www.hitachi.com/products/construction-machinery/global/images/photo1.jpg"
        },
        {
            id: 5,
            name: "David Wilson",
            specialty: "CNH Tractors",
            location: "Illinois, USA",
            rating: 4.4,
            ratingCount: 11,
            image: "https://www.cnhindustrial.com/en-US/brands/_jcr_content/root/responsivegrid_545c/image.img.jpg/1622551910552.png"
        },
        {
        id: 6,
        name: "Emma Thompson",
        specialty: "John Deere Tractors",
        location: "Washington, USA",
        rating: 4.8,
        ratingCount: 16,
        image: "https://example.com/volvo-construction.jpg"  // You'll need to replace this with an actual image URL
    },
    {
        id: 7,
        name: "Liam Walker",
        specialty: "CAT Mini Excavators",
        location: "Georgia, USA",
        rating: 4.3,
        ratingCount: 9,
        image: "https://example.com/kubota-mini.jpg"  // You'll need to replace this with an actual image URL
    },
    {
        id: 8,
        name: "Olivia Brown",
        specialty: "John Deere Combines",
        location: "Nevada, USA",
        rating: 4.9,
        ratingCount: 19,
        image: "https://example.com/case-backhoes.jpg"  // You'll need to replace this with an actual image URL
    },
    {
        id: 9,
        name: "Noah White",
        specialty: "John Deere Tractors",
        location: "Colorado, USA",
        rating: 4.5,
        ratingCount: 13,
        image: "https://example.com/jcb-loaders.jpg"  // You'll need to replace this with an actual image URL
    },
    {
        id: 10,
        name: "Ava Johnson",
        specialty: "CAT Excavators",
        location: "Oregon, USA",
        rating: 4.6,
        ratingCount: 17,
        image: "https://example.com/hyundai-excavators.jpg"  // You'll need to replace this with an actual image URL
    }
    ];

    let currentPage: string = 'search'; // Default view

    function handleNavigation(event: CustomEvent<{ page: string }>) {
        currentPage = event.detail.page;
    }

    let contractorMode: boolean = false; // Default: toggle off

    let searchTerm: string = '';

    $: filteredContractors = contractors.filter(contractor =>
        contractor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
        <div class="flex items-center justify-between mb-6">
            <input bind:value={searchTerm} type="text" placeholder="🔍 Search Contractors..." class="flex-grow p-3 bg-white border rounded-full shadow-sm focus:outline-none focus:border-green-300 mr-4">
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each filteredContractors as contractor}
              <div class="bg-white rounded-lg overflow-hidden card-shadow">
                  <img src="{contractor.image}" alt="{contractor.name}" class="w-full h-48 object-cover">
                  <div class="p-4">
                      <h2 class="text-xl mb-2 font-semibold">{contractor.name}</h2>
                      <p class="text-gray-500 text-sm mb-2 truncate"><strong>Specialty:</strong> {contractor.specialty}</p>
                      <p class="text-gray-500 text-sm mb-4 truncate"><strong>Location:</strong> {contractor.location}</p>
                      <div class="flex items-center mb-3">
                          <span class="text-yellow-400 mr-2">⭐ {contractor.rating}</span>
                          <span class="text-gray-500 text-sm">({contractor.ratingCount} reviews)</span>
                      </div>
                      <button class="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full w-full text-center">Contact</button>
                  </div>
              </div>
          {/each}
      </div>
  </div>
</div>

<Navbar on:navigate={handleNavigation} />
