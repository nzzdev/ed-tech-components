<script>
	import Link from "$lib/Link.svelte";
</script>

<Link url="https://google.com">Zum Artikel</Link>
<Link url="https://google.com" elementType="span">Zum Artikel</Link>
<Link --color="salmon" url="https://google.com" elementType="span">Zum Artikel</Link>
<Link --color="blue" --underline-color="salmon" url="https://google.com" elementType="span">Zum Artikel</Link>
<Link --color="blue" --underline-color="salmon" --underline-width="2px" url="https://google.com" elementType="span">Zum Artikel</Link>
<Link --color="blue" --underline-color="salmon" --underline-width="2px" --hover-opacity=0.1 url="https://google.com" elementType="span">Zum Artikel</Link>