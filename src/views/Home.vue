<template>
	<div class="d-flex flex-column align-items-center justify-content-center">
		<h2 class="text-align-center">Hi, on that dev server you can navigate under next UIs:</h2>
		<div class="d-flex flex-column">
			<a class="ui-link" href="https://31.43.122.153:40443" target="_blank">
				<span class="ui-link-name">Kibana Logs</span>
				<br/>
				<span class="ui-link-description">
					Logs of all applications are shrefred here. Logs don't contains sensitive data (at least should not contains:)).
				</span>
			</a>
			<a class="ui-link" href="https://31.43.122.153:41443" target="_blank">
				<span class="ui-link-name">Identity Server</span>
				<br/>
				<span class="ui-link-description">
					Admin UI for simplify maintaining identity server data.
				</span>
			</a>
			<a class="ui-link" href="https://31.43.122.153:42443" target="_blank">
				<span class="ui-link-name">NextCloud</span>
				<br/>
				<span class="ui-link-description">
					Just for fun my own cloud shrefrage.
				</span>
			</a>
		</div>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
@import "@/styles/colors.scss";

.ui-link {
	color: $base-text-color;
	padding: 10px;

	.ui-link-name {
		font-size: 1rem;
		font-weight: bolder;
	}

	.ui-link-description {
		font-size: 0.75rem;
		font-weight: 200;
	}
}

@media (hover: hover) {
	.ui-link { background-color: $white; }
	.ui-link:hover { background-color: $base-hover-color; }
}
</style>