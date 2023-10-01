<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";

    // Mock data
    let profile = {
        picture: "https://upload.wikimedia.org/wikipedia/commons/6/6e/John_Deere_portrait.jpg", // Placeholder image
        name: "John Deere",
        username: "@internationalharvester",
    };

    let equipment = [
        { make: "John Deere", model: "X300", year: 2022 },
        { make: "Kubota", model: "BX23S", year: 2021 }
    ];

    let contracts = [
        { 
            contractor: "Anna Smith", 
            status: "Ongoing", 
            equipment: "John Deere X300", 
            repairType: "Engine Maintenance" 
        },
        { 
            contractor: null, // No contractor selected yet
            status: "Awaiting Contractor", 
            equipment: "Kubota BX23S", 
            repairType: "Tire Replacement" 
        },
        { 
            contractor: "Sophie Turner", 
            status: "Completed", 
            equipment: "John Deere X300", 
            repairType: "Oil Change" 
        },
        { 
            contractor: "Jane Smith", 
            status: "Completed", 
            equipment: "Kubota BX23S", 
            repairType: "Transmission Repair" 
        }
    ];

</script>

<style>
    .container {
        margin-bottom: 60px;
    }
</style>

<div class="p-4 bg-gray-100 h-full min-h-screen">
    <div class="max-w-screen-sm mx-auto bg-white rounded-lg shadow-md p-6 space-y-8">
        <!-- User Profile Information -->
        <div class="flex items-center space-x-4">
            <img src="{profile.picture}" alt="{profile.name}" class="w-24 h-24 rounded-full object-cover shadow-lg">
            <div>
                <h1 class="text-2xl font-bold">{profile.name}</h1>
                <p class="text-sm text-gray-500">{profile.username}</p>
            </div>
        </div>

        <!-- Equipment List -->
        <div>
            <h2 class="text-xl font-semibold mb-4">Equipment</h2>
            <div class="divide-y divide-gray-200">
                {#each equipment as item}
                    <div class="py-2">
                        <p><strong>{item.make} {item.model}</strong></p>
                        <p class="text-sm text-gray-500">Year: {item.year}</p>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Contracts List -->
        <div>
            <h2 class="text-xl font-semibold mb-4">Contracts</h2>
            <div class="p-4 bg-gray-100 container">
                {#each contracts as contract}
                    <div class="py-2 flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div class="mb-2 md:mb-0">
                            <p class="font-medium">
                                {#if contract.contractor}
                                    {contract.contractor}
                                {:else}
                                    <span class="text-red-500">No contractor selected</span>
                                {/if}
                            </p>
                            <p class="text-sm text-gray-500">{contract.equipment}</p>
                            <p class="text-xs text-gray-400">{contract.repairType}</p>
                            <p class="text-xs text-gray-400">Status: {contract.status}</p>
                        </div>
                        
                        <!-- View Details Button -->
                        <button class="bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                            View Details
                        </button>
                    </div>
                    <!-- Horizontal Black Line to Seperate each Contract -->
                    <div class="border-b border-gray-400 my-4"></div>
                {/each}
            </div>
        </div>



    </div>
    <Navbar />
</div>
