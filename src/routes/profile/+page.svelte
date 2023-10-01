<script lang="ts">
    import { goto } from "$app/navigation";
  import Navbar from "$lib/components/Navbar.svelte";

  import type { PageServerData, PageData } from "./$types";
  export let data: PageServerData & PageData;

  $: ({props: { uid }} = data);
  $: ({ supabase } = data);

  // Mock data
  let profile = {
    picture:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/John_Deere_portrait.jpg", // Placeholder image
    name: "John Deere",
    username: "@internationalharvester",
  };

  async function deleteEquipment(equipmentId: number) {
    await supabase
      .from('User_owns_equipment')
      .delete()
      .eq('user_id', uid)
      .eq('equipment_id', equipmentId);
  }

  async function signOut() {
    await supabase.auth.signOut();
    goto('/auth/login');
  }
</script>

<div class="p-4 bg-gray-100 h-full min-h-screen">
  <div
    class="max-w-screen-sm mx-auto bg-white rounded-lg shadow-md p-6 space-y-8"
  >
    <!-- User Profile Information -->
    <div class="flex items-center space-x-4" on:click={signOut}>
      <img
        src={data.props.url}
        alt={profile.name}
        class="w-24 h-24 rounded-full object-cover shadow-lg"
      />
      <div>
        <h1 class="text-2xl font-bold">{data.props.user.name}</h1>
        <p class="text-sm text-gray-500">{profile.username}</p>
      </div>
    </div>

    <!-- Equipment List -->
    <div>
      <h2 class="text-xl font-semibold mb-4">Equipment</h2>
      <div class="divide-y divide-gray-200">
        {#each data.props.User_owns_equipment || [] as item}
          <div class="py-2 flex justify-between items-center">
            <div>
              <p>
                <strong>{item.equipment_id.make} {item.equipment_id.model}</strong>
              </p>
              <p class="text-sm text-gray-500">Year: {item.equipment_id.year}</p>
            </div>
            <!-- Delete Equipment Button -->
            <button on:click={() => deleteEquipment(item.equipment_id.id)} class="text-red-500 focus:outline-none">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        {/each}
      </div>
    </div>
    <!-- Div the Centers in Width -->
    <div class="flex justify-sm">
      <!-- Button to Add New Piece of Equipment -->
      <a
        href="/equipment/add"
        class="bg-green-500 hover:bg-green-600 text-white text-base px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mr-2"
      >
        Add Equipment
      </a>
    </div>

    <!-- Contracts List -->
    <div>
      <h2 class="text-xl font-semibold mb-4">Contracts</h2>
      <div class="p-4 bg-gray-100 rounded-lg container">
        {#each data.props.User_repair_contracts as contract}
          <div
            class="py-2 flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <div class="mb-2 md:mb-0">
              <p class="font-medium">
                {#if contract.contractor_id}
                  {contract.contractor_id.name}
                {:else}
                  <span class="text-red-500">No contractor selected</span>
                {/if}
              </p>
              <p class="text-sm text-gray-500">
                {contract.repair_id.equipment_id.year +
                  " " +
                  contract.repair_id.equipment_id.make +
                  " " +
                  contract.repair_id.equipment_id.model}
              </p>
              <p class="text-xs text-gray-400">
                {contract.repair_id.description}
              </p>
              <p class="text-xs text-gray-400">
                Status: {#if contract.completed}
                  Completed
                {:else if contract.contractor_id}
                  Ongoing
                {:else}
                  Awaiting Contractor
                {/if}
              </p>
            </div>

            <!-- View Details Button -->
            <button
              class="bg-green-500 hover:bg-green-600 text-white text-xs px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
            >
              View Details
            </button>
          </div>
          <!-- Horizontal Black Line to Seperate each Contract -->
          <div class="border-b border-gray-400 my-4" />
        {/each}
      </div>
    </div>
  </div>
  <Navbar />
</div>

<style>
  .container {
    margin-bottom: 60px;
  }
</style>
