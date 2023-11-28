<form>
  <div class="text-sm breadcrumbs">
    <ul>
      <li><a href="/">Home</a></li> 
      <li><a href="/books/create">Create</a></li> 
    </ul>
  </div>

  {#if promise != null}
    {#await promise}
      <Spinner />
    {:then book}
      <div class="alert alert-success mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Book {book.title} with id <span data-test="id">{book.id}</span> successfully created. See the details <a class="font-bold" href={`/books/${book.id}`}>here</a>.</span>
      </div>
    {:catch error}
      <Error />
    {/await}
  {/if}

  <h1 class="text pb-2 text-2xl">Create new book</h1>

  <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
    <div class="form-control w-full">
      <label class="label">Title</label>
      <input type="text" name="title" placeholder="Title.." bind:value={book.title} class="input input-bordered w-full" />
    </div>
    <div class="form-control w-full">
      <label class="label">Description</label>
      <input type="text" name="description" placeholder="Description.." bind:value={book.description} class="input input-bordered w-full" />
    </div>
    <div class="form-control w-full">
      <label class="label">No. of pages</label>
      <input type="number" name="no_of_pages" placeholder="No. of pages.." bind:value={book.no_of_pages} class="input input-bordered w-full" />
    </div>
    <div class="form-control w-full">
      <label class="label">Year</label>
      <input type="number" name="year" placeholder="Year.." bind:value={book.year} class="input input-bordered w-full" />
    </div>
  </div>

  <button class="btn btn-primary mt-6 pr-6 pl-6" data-test="btn-create" on:click={() => handleClick()}>Create</button>

</form>

<script lang="ts">
  import Error from '$lib/components/Error.svelte';
  import Spinner from '$lib/components/Spinner.svelte';
  import { goto } from '$app/navigation';
  import { api } from '$lib'
  import { error } from '@sveltejs/kit';

  const book: api.BaseBook = {
    title: '',
    description: '',
    no_of_pages: undefined,
    year: undefined,
  }

  const createBook = async () => {
    const { data, status } = await api.createBook(book)

    if (status != 201) {
      throw new error(status)
    }

    return data
  };

  let promise;
  function handleClick() {
    promise = createBook()
  }
</script>
