<div class="overflow-x-auto">
  <Datatable {handler}>
    <table class="table">
      <thead>
        <tr>
          <Th {handler} orderBy="id">ID</Th>
          <Th {handler} orderBy="title">Title</Th>
          <Th {handler} orderBy="description">Description</Th>
          <Th {handler} orderBy="no_of_pages">No. of Pages</Th>
          <Th {handler} orderBy="year">Year</Th>
        </tr>
      </thead>
      <tbody>
        {#each $rows as book, index}
          <tr class="hover cursor-pointer" data-test={'book-' + index} on:click={() => goto(`/books/${book.id}`)}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.description}</td>
            <td>{book.no_of_pages}</td>
            <td>{book.year}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </Datatable>
</div>

<script lang="ts">
  import { goto } from '$app/navigation';

  export let data;

  import { Datatable, Th, DataHandler } from '@vincjo/datatables'

  const handler = new DataHandler(data.books, { rowsPerPage: 20 })
  const rows = handler.getRows()
</script>
