<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";

    let equipmentToAdd = {
        make: "",
        model: "",
        year: ""
    };

    function addEquipment() {
        // Logic to add the equipment to the user's list
    }
</script>

<style>
    /* You can expand upon these styles as needed. */
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
        <h1 class="text-2xl font-bold">Add Equipment</h1>
        <form on:submit|preventDefault={addEquipment}>
            <label for="make">Make</label>
            <input id="make" bind:value={equipmentToAdd.make} required />

            <label for="model">Model</label>
            <input id="model" bind:value={equipmentToAdd.model} required />

            <label for="year">Year</label>
            <input type="number" id="year" bind:value={equipmentToAdd.year} required />

            <button type="submit" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                Add Equipment
            </button>
        </form>
    </div>
    <Navbar />
</div>
