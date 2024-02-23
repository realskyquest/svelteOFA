<script lang="ts">
    import "tailwindcss/tailwind.css"
</script>

<div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="/">App</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/blog">Blog</a></li>
        <li><a href="/docs">Docs</a></li>
      </ul>
    </div>
  </div>

<slot/>