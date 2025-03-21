<script setup>
const links = [
	{
		name: 'main',
		link: '/',
	},
	{
		name: 'about',
		link: '/about',
	},
	{
		name: 'gallery',
		link: '/gallery',
	},
];
</script>

<template>
	<header class="header">
		<div class="l-wrapper">
			<div class="header__inner">
				<nuxt-link to="/" class="header__logo">iind</nuxt-link>
				<nav class="header__nav">
					<ul class="header__nav-list">
						<li v-for="(link, i) in links" :key="i">
							<nuxt-link :to="link.link" class="hover-fadein" style="padding: 14px 0">
								{{ link.name }}
							</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	z-index: $z-header;
	&__logo {
		font-size: 24px;
		font-weight: 700;
		color: $color-white;
		&.router-link-active {
			opacity: unset;
			pointer-events: all;
		}
	}
	&__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	&__nav {
		&-list {
			list-style: none;
			display: flex;
			align-items: center;
			gap: 16px;
		}
	}
}

.page_white .header {
	background: $color-white;
}
.page_black .header {
	background: $color-black;
}
</style>
