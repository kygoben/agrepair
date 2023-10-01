<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
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
    .menu {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        display: none;
    }
    .menu.open {
        display: block;
    }
    .menu-option {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border-top: 1px solid #ccc;
        transition: background-color 0.3s ease;
    }
    .menu-option:last-child {
        border-top: none;
    }
    .menu-option:hover {
        background-color: #f5f5f5;
    }
    .button-icon {
        margin-left: 1rem;
        font-size: 1.25rem;
    }
    .button-text {
        flex-grow: 1;
        font-weight: bold;
    }

    /* Additional styles to make menu options look more like buttons */
    .menu-option.button-style {
        color: white; /* Text color */
        border-radius: 8px; /* Rounded corners */
        margin: 8px; /* Spacing around each button */
    }
    .menu-option.button-style:hover {
        background-color: #2DC891; /* A slightly darker green for hover effect */
    }
    .menu-option.button-style .button-icon {
        color: white;
    }
</style>

<div class="navbar fixed bottom-0 left-0 w-full z-10 flex items-center justify-around p-4">
    <a href="/" class="nav-icon">
        <i class="fas fa-search"></i>
    </a>
    <button class="nav-icon" on:click={toggleMenu}>
        <i class="fas fa-plus"></i>
    </button>
    <a href="/profile" class="nav-icon">
        <i class="fas fa-user"></i>
    </a>
    <a href="/inbox" class="nav-icon">
        <i class="fas fa-envelope"></i>
    </a>
    <a href="/settings" class="nav-icon">
        <i class="fas fa-cog"></i>
    </a>
</div>

<div class="menu pb-20" class:open={isMenuOpen}>
    <!-- Updated menu options to include button styling -->
    <div class="menu-option button-style bg-green-500" on:click={closeMenu}>
        <span class="button-text">Create New Contract</span>
        <i class="fas fa-file-contract button-icon"></i>
    </div>
    <div class="menu-option button-style bg-green-500" on:click={closeMenu}>
        <a class="button-text" href="/equipment/add">Add Equipment</a>
        <i class="fas fa-tools button-icon"></i>
    </div>
    <div class="menu-option mr-2" on:click={closeMenu}>
        <span class="button-text text-green-500">Cancel</span>
        <i class="fas fa-times button-icon text-green-500"></i>
    </div>
</div>
