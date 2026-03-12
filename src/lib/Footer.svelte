<script lang="ts">
	const repoUrl = 'https://github.com/stevestrebl/cantabnv';
</script>

<footer class="footer">
	<div class="footer-inner">
		<p class="copyright">
			© {new Date().getFullYear()} Cambridge Alumni Society of Nevada. Licensed under
			<a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener noreferrer"
				>GNU GPL v3</a
			>.
		</p>
		<p class="repo">
			<a href={repoUrl} target="_blank" rel="noopener noreferrer">Source on GitHub</a>
		</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-footer-bg);
		border-top: none;
		margin-top: auto;
		padding: var(--space-2xl) var(--space-md);
		color: var(--color-footer-text);
	}

	.footer-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		text-align: center;
		font-size: 0.875rem;
		opacity: 0.9;
	}

	.copyright,
	.repo {
		margin: 0 0 var(--space-sm);
	}

	.repo:last-child {
		margin-bottom: 0;
	}

	.footer a {
		color: var(--color-footer-link);
	}

	.footer a:hover {
		color: var(--color-footer-link-hover);
	}
</style>
