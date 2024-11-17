<script lang="ts">
  
  import logo from "assets/SpaceX_logo.png";
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';


  export let data;

  const {landPads} = data
  console.log(landPads)

</script>

<header>
  <img src={logo} alt="SpaceX Logo">
</header>
<main>
  <Table>
    <TableHead>
      <TableHeadCell>Product name</TableHeadCell>
      <TableHeadCell>Color</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      {#each landPads as item}
        <TableBodyRow>
          <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
          <TableBodyCell>Sliver</TableBodyCell>
          <TableBodyCell>Laptop</TableBodyCell>
          <TableBodyCell>$2999</TableBodyCell>
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</main>