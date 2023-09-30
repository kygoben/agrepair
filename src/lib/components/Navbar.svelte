<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher<{ navigate: { page: string } }>();

    function navigateTo(page: string) {
        dispatch('navigate', { page });
    }
</script>

<style>
    /* Styling for the navbar */
    .navbar {
        background-color: #fff;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    }
    .nav-icon {
        font-size: 1.5rem;
    }
</style>

<div class="navbar fixed bottom-0 left-0 w-full z-10 flex items-center justify-around p-4">
    <button class="nav-icon" on:click={() => navigateTo('search')}>
        <i class="fas fa-search"></i>
    </button>
    <button class="nav-icon" on:click={() => navigateTo('add')}>
        <i class="fas fa-plus"></i>
    </button>
    <button class="nav-icon" on:click={() => navigateTo('profile')}>
        <i class="fas fa-user"></i>
    </button>
    <button class="nav-icon" on:click={() => navigateTo('inbox')}>
        <i class="fas fa-envelope"></i>
    </button>
    <button class="nav-icon" on:click={() => navigateTo('settings')}>
        <i class="fas fa-cog"></i>
    </button>
</div>
