<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";

    let selectedEquipment = null;
    let updatedEquipment = {
        make: "",
        model: "",
        year: ""
    };

    let equipment = [
        { make: "John Deere", model: "X300", year: 2022 },
        { make: "Kubota", model: "BX23S", year: 2021 }
    ];

    function updateEquipment() {
        // Logic to update the selected equipment with updatedEquipment data
    }

    function deleteEquipment() {
        // Logic to delete the selected equipment from the list
    }
</script>

<style>
    /* Same styles from the AddEquipment page, plus any additional as needed. */
    input, select {
        display: block;
        width: 100%;
        padding: 8px 16px;
        margin-bottom: 16px;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
    label {
        display: block;
        margin-bottom: 8px;
    }
</style>

<div class="p-4 bg-gray-100 h-full min-h-screen">
    <div class="max-w-screen-sm mx-auto bg-white rounded-lg shadow-md p-6 space-y-8">
        <h1 class="text-2xl font-bold">Edit Equipment</h1>

        <!-- Dropdown to select equipment -->
        <label for="equipmentSelect">Select Equipment</label>
        <select bind:value={selectedEquipment} id="equipmentSelect">
            {#each equipment as item (item)}
                <option value={item}>{item.make} {item.model} - {item.year}</option>
            {/each}
        </select>

        <!-- Form to edit the selected equipment -->
        <form on:submit|preventDefault={updateEquipment}>
            <label for="make">Make</label>
            <input id="make" bind:value={updatedEquipment.make} />

            <label for="model">Model</label>
            <input id="model" bind:value={updatedEquipment.model} />

            <label for="year">Year</label>
            <input type="number" id="year" bind:value={updatedEquipment.year} />

            <div class="flex space-x-4">
                <button type="submit" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                    Update Equipment
                </button>
                <button type="button" on:click={deleteEquipment} class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50">
                    Delete Equipment
                </button>
            </div>
        </form>
    </div>
    <Navbar />
</div>
