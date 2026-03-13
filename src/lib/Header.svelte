<script lang="ts">
	import { page } from '$app/stores';
	import { resolve } from '$app/paths';
	import logo from '$lib/assets/cantabnv_logo.jpg';

	let navOpen = $state(false);

	const navLinks = [
		{ path: '/' as const, label: 'Home' },
		{ path: '/events' as const, label: 'Events' },
		{ path: '/about' as const, label: 'About' },
		{ path: '/join' as const, label: 'Join' }
	];

	function toggleNav() {
		navOpen = !navOpen;
	}

	function closeNav() {
		navOpen = false;
	}
</script>

<header class="header">
	<div class="header-inner">
		<a href={resolve('/')} class="logo">
			<img src={logo} alt="Cambridge Alumni Society of Nevada" />
		</a>
		<button
			type="button"
			class="nav-toggle"
			aria-expanded={navOpen}
			aria-label="Toggle menu"
			onclick={toggleNav}
		>
			<span class="hamburger"></span>
		</button>
		<nav class="nav" class:open={navOpen}>
			{#each navLinks as link (link.path)}
				<a
					href={resolve(link.path)}
					class="nav-link"
					class:current={$page.url.pathname === link.path ||
						(link.path !== '/' && $page.url.pathname.startsWith(link.path))}
					onclick={closeNav}
				>
					{link.label}
				</a>
			{/each}
		</nav>
	</div>
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-nav-bg);
		border-bottom: 1px solid var(--color-border);
		height: var(--header-height);
	}

	.header-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 var(--space-md);
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.logo {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	.logo img {
		height: 4.75rem;
		width: auto;
		display: block;
		max-height: 90px;
	}

	.logo:hover img {
		opacity: 0.9;
	}

	.nav-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		background: none;
		border: none;
		cursor: pointer;
		border-radius: var(--radius);
		color: var(--color-nav-text);
	}

	@media (min-width: 640px) {
		.nav-toggle {
			display: none;
		}
	}

	.hamburger {
		width: 1.25rem;
		height: 2px;
		background: currentColor;
		position: relative;
	}

	.hamburger::before,
	.hamburger::after {
		content: '';
		position: absolute;
		left: 0;
		width: 1.25rem;
		height: 2px;
		background: currentColor;
	}

	.hamburger::before {
		top: -6px;
	}

	.hamburger::after {
		top: 6px;
	}

	.nav {
		position: fixed;
		top: var(--header-height);
		left: 0;
		right: 0;
		background: var(--color-nav-bg);
		border-bottom: 1px solid var(--color-border);
		padding: var(--space-md);
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		transform: translateY(-100%);
		opacity: 0;
		visibility: hidden;
		transition:
			transform 0.2s,
			opacity 0.2s,
			visibility 0.2s;
	}

	.nav.open {
		transform: translateY(0);
		opacity: 1;
		visibility: visible;
	}

	@media (min-width: 640px) {
		.nav {
			position: static;
			flex-direction: row;
			gap: var(--space-lg);
			border: none;
			padding: 0;
			transform: none;
			opacity: 1;
			visibility: visible;
		}
	}

	.nav-link {
		color: var(--color-nav-text);
		padding: var(--space-sm) 0;
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		opacity: 0.9;
	}

	.nav-link:hover,
	.nav-link.current {
		color: var(--amBold);
		opacity: 1;
		text-decoration: none;
	}
</style>
