<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";

    let contractToCreate = {
        equipmentMake: "",
        equipmentModel: "",
        date: "",
        repairRequest: "",
        duration: "", // Assuming duration in days for simplicity.
        description: ""
    };

    function createContract() {
        // Logic to create and store the contract
    }
</script>

<style>
    /* Existing styles */
    input, select, textarea {
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
        <h1 class="text-2xl font-bold">Create Contract</h1>
        <form on:submit|preventDefault={createContract}>

            <label for="equipmentMake">Equipment Make</label>
            <input id="equipmentMake" bind:value={contractToCreate.equipmentMake} required />

            <label for="equipmentModel">Equipment Model</label>
            <input id="equipmentModel" bind:value={contractToCreate.equipmentModel} required />

            <label for="date">Date</label>
            <input type="date" id="date" bind:value={contractToCreate.date} required />

            <!-- Repair Request Dropdwon -->
            <label for="repairRequest">Repair Request</label>
            <select id="repairRequest" bind:value={contractToCreate.repairRequest} required>
                <option value="repair">Repair</option>
                <option value="maintenance">Maintenance</option>
                <option value="other">Other</option>
            </select>

            <label for="description">Description of Work</label>
            <textarea id="description" bind:value={contractToCreate.description} rows="4" required></textarea>

            <button type="submit" class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
                Create Contract
            </button>
        </form>
    </div>
    <Navbar />
</div>
