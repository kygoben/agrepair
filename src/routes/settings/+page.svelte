<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import type { PageData } from "../$types";
    import { goto } from "$app/navigation";

    let notificationsEnabled = true;

    export let data: PageData;
    let { supabase } = data;
    $: ({ supabase } = data);

    const signOut = async () => {
      await supabase.auth.signOut();
      goto('/auth/login');
    }
</script>

<style>
.content {
    padding-bottom: 80px; /* Adjust based on the height of the navbar */
}
</style>

<div class="p-4 bg-gray-100 h-full min-h-screen content">
    <div class="mx-auto max-w-screen-sm lg:max-w-screen-lg">
        <!-- Profile Settings -->
        <div class="bg-white rounded-lg shadow-lg p-5 mb-5">
            <h2 class="text-xl font-bold mb-4">Profile Settings</h2>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-semibold">Profile Picture:</label>
                <button class="text-green-500">Change Picture</button>
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-semibold">Name:</label>
                <input type="text" placeholder="Your Name" class="w-full p-2 rounded border shadow-sm" />
            </div>
            <div class="mb-4">
                <label class="block mb-2 text-sm font-semibold">Username:</label>
                <input type="text" placeholder="@username" class="w-full p-2 rounded border shadow-sm" />
            </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white rounded-lg shadow-lg p-5 mb-5">
            <h2 class="text-xl font-bold mb-4">Notification Settings</h2>
            <div class="flex items-center">
                <label for="notifications" class="mr-3 text-sm font-semibold">Enable Notifications:</label>
                <input id="notifications" type="checkbox" bind:checked={notificationsEnabled} class="rounded shadow-sm accent-green-500">
            </div>
        </div>

        <!-- Privacy Settings (Placeholder for future expansion) -->
        <div class="bg-white rounded-lg shadow-lg p-5 mb-5">
            <h2 class="text-xl font-bold mb-4">Privacy Settings</h2>
            <!-- Placeholder content for Privacy settings -->
            <p class="text-sm text-gray-600">Manage your privacy preferences here.</p>
        </div>

        <!-- Account Settings -->
        <div class="bg-white rounded-lg shadow-lg p-5 mb-5">
            <h2 class="text-xl font-bold mb-4">Account Settings</h2>
            <button class="text-blue-700 mb-3" on:click={signOut}>Sign Out</button>
            <br>
            <button class="text-green-500 mb-3">Change Password</button>
            <br />
            <button class="text-red-500">Delete Account</button>
        </div>
    </div>
</div>

<Navbar />
