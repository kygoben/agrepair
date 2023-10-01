<script lang="ts">
  import type { PageData } from "./$types";
  import Navbar from "$lib/components/Navbar.svelte";

  export let data: PageData;
  let { supabase, makes, models, session } = data;
  $: ({ session } = data);
  $: ({ supabase } = data);
  $: ({ makes } = data);
  $: ({ models } = data);

  let make = "";
  let model = "";
  let year = new Date().getFullYear();

  $: filteredMakes = makes.filter(m => {
    const a = m.toLowerCase();
    const b = make.toLowerCase();

    return a.includes(b) && a !== b;
  });
  $: filteredModels = models.filter(m => {
    const a = m.toLowerCase();
    const b = model.toLowerCase();

    return a.includes(b) && a !== b;
  });

  async function addEquipment() {
    const { data } = await supabase
      .from('Equipment')
      .insert([{ year, make, model }])
      .select();
    const {id} = (data || [])[0];

    await supabase
      .from('User_owns_equipment')
      .insert([{
        equipment_id: id,
        user_id: session!.user.id
      }]);
  }
</script>

<style>
  input, ul.dropdown {
    display: block;
    width: 100%;
    padding: 8px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  label {
    display: block;
    margin-bottom: 8px;
  }
  ul.dropdown {
    margin: 0;
    padding: 0;
    max-height: 150px;
    overflow-y: auto;
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  li {
    padding: 8px;
    border-bottom: 1px solid #e5e5e5;
    cursor: pointer;
  }
  li:hover {
    background-color: #f5f5f5;
  }
  button {
    display: block;
    width: 100%;
    padding: 8px 16px;
    margin-top: 16px;
    border: none;
    border-radius: 8px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
</style>

<div class="p-4 bg-gray-100 h-full min-h-screen">
  <div class="max-w-screen-sm mx-auto bg-white rounded-lg shadow-md p-6 space-y-8">
    <h1 class="text-2xl font-bold">Add Equipment</h1>
    <form on:submit|preventDefault={addEquipment}>
      <label for="make">Make</label>
      <input id="make" bind:value={make} required />
      {#if make.length > 0}
        <ul class="dropdown">
          {#each filteredMakes as item (item)}
            <li on:click={() => (make = item)}>{item}</li>
          {/each}
        </ul>
      {/if}

      <label for="model">Model</label>
      <input id="model" bind:value={model} required />
      {#if model.length > 0}
        <ul class="dropdown">
          {#each filteredModels as item (item)}
            <li on:click={() => (model = item)}>{item}</li>
          {/each}
        </ul>
      {/if}

      <label for="year">Year</label>
      <input type="number" id="year" bind:value={year} required />

      <button type="submit">
        Add Equipment
      </button>
    </form>
  </div>
  <Navbar />
</div>
