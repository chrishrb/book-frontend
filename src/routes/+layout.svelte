<script lang="ts">
  import "../app.css";
  import { Icon, BookOpen, QueueList, PlusCircle, Sun, Moon } from "svelte-hero-icons";
</script>

<div class="navbar bg-primary text-primary-content">
  <div class="flex-none">
    <label for="my-drawer" class="btn btn-primary btn-square btn-ghost drawer-button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </label>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">
      <Icon src="{BookOpen}" class="h-6 w-6"/>
      books serverless
    </a>
  </div>
</div>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />

  <div class="drawer-content">
    <!-- Page content here -->
    <div class="container mx-auto pt-4">
      <slot />
    </div>
  </div> 

  <div class="drawer-side z-50">
    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a on:click={() => {document.getElementById('my-drawer').click()}} href="/"><Icon src="{QueueList}" class="h-6 w-6"/> List all</a></li>
      <li><a on:click={() => {document.getElementById('my-drawer').click()}} href="/books/create"><Icon src="{PlusCircle}" class="h-6 w-6"/> Create</a></li>
    </ul>
  </div>
</div>
