<div class="text-sm breadcrumbs">
  <ul>
    <li><a href="/">Home</a></li> 
    <li><a href={`/books/${book.id}`}>{book.id}</a></li> 
  </ul>
</div>

<h1 class="text pb-2 text-2xl">{book.title}</h1>

{#if promise != null}
  {#await promise}
    <Spinner />
  {:then book}
    <div class="alert alert-success mb-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Book {book.title} with id <span data-test="id">{book.id}</span> successfully updated.</span>
    </div>
  {:catch error}
    <Error />
  {/await}
{/if}

<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
  <div class="form-control w-full">
    <label class="label">Title</label>
    <input type="text" name="title" disabled={disabled} bind:value={book.title} class="input input-bordered focus:outline-none w-full" />
  </div>
  <div class="form-control w-full">
    <label class="label">Description</label>
    <input type="text" name="description" disabled={disabled} bind:value={book.description} class="input input-bordered focus:outline-none w-full" />
  </div>
  <div class="form-control w-full">
    <label class="label">No. of pages</label>
    <input type="number" name="no_of_pages" disabled={disabled} bind:value={book.no_of_pages} class="input input-bordered focus:outline-none w-full" />
  </div>
  <div class="form-control w-full">
    <label class="label">Year</label>
    <input type="number" name="year" disabled={disabled} bind:value={book.year} class="input input-bordered focus:outline-none w-full" />
  </div>
</div>

<div class="mt-6">
  <button data-test="btn-edit-cancel" class="btn btn-primary pr-6 pl-6" on:click={() => toggleDisabled()}>{disabled ? 'Edit' : 'Cancel'}</button>

  {#if disabled}
    <button data-test="btn-delete" class="btn pr-6 pl-6 btn-error" on:click={async () => deleteBook()}>Delete</button>
  {:else}
    <button data-test="btn-update" class="btn pr-6 pl-6 btn-success" on:click={() => handleClick()}>Update</button>
  {/if}
</div>

<script lang="ts">
  import Error from '$lib/components/Error.svelte';
  import Spinner from '$lib/components/Spinner.svelte';
  import { api } from '$lib'
  import { goto } from '$app/navigation';
  import { redirect, error } from '@sveltejs/kit';

  let disabled = true;

  export let data;
  export let book = { ...data.book }

  const toggleDisabled = () => {
    if (!disabled) {
      book = { ...data.book }
    }
    disabled = !disabled;
  }

  const deleteBook = () => {
    api.deleteBook(book.id).then(() => {
      goto('/')
    }).catch(() => {
      throw error(500, 'Delete failed')
    });
  }

  const updateBook = async () => {
    const { data, status } = await api.updateBook(book.id, book)

    if (status != 200) {
      throw new error(status)
    }

    disabled = true

    return data
  }

  let promise;
  function handleClick() {
    promise = updateBook()
  }
</script>
