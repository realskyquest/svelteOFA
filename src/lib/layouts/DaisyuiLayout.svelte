<div class="dui-drawer lg:dui-drawer-open">
	<input id="my-drawer" type="checkbox" class="dui-drawer-toggle" />
	<div class="dui-drawer-content">
		<!-- Page content here -->
		<div class="dui-navbar bg-neutral text-neutral-content">
			<label for="my-drawer" class="dui-btn dui-btn-primary dui-drawer-button lg:hidden">Open drawer</label>
			<a class="dui-btn dui-btn-ghost text-xl" href="/docs">Docs</a>
		</div>
		<slot />
	</div>
	<div class="dui-drawer-side">
		<label for="my-drawer" aria-label="close sidebar" class="dui-drawer-overlay"></label>
		<ul class="dui-menu p-4 w-80 min-h-full bg-base-200 text-base-content">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
