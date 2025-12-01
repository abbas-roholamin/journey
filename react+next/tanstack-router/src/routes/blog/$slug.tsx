import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/$slug")({
	component: RouteComponent,
	notFoundComponent: () => (
		<div className="text-white text-4xl font-bold h-1/2">not found</div>
	),
	errorComponent: ({ error }) => (
		<div className="text-red-600 text-4xl font-bold h-1/2">{error.message}</div>
	),
	pendingComponent: () => (
		<div className="text-white text-4xl font-bold h-1/2">Loading</div>
	),
	loader: async ({ params }) => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts/${params.slug}`,
		);
		const post = await res.json();

		if (!res.ok) {
			throw new Error("Feild to fetch posts");
		}

		if (Object.entries(post).length === 0) {
			throw notFound();
		}

		return post;
	},
});

function RouteComponent() {
	const { slug } = Route.useParams();
	const post = Route.useLoaderData();

	return (
		<article
			key={post.id}
			className="flex max-w-xl flex-col items-start justify-between"
		>
			<div className="flex items-center gap-x-4 text-xs">
				<time
					dateTime={post.datetime}
					className="text-gray-500 dark:text-gray-400"
				>
					2023
				</time>
				<p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">
					BLOG
				</p>
			</div>
			<div className="group relative grow">
				<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
					<span className="absolute inset-0" />
					{post.title}
				</h3>
				<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
					{post.body}
				</p>
			</div>
		</article>
	);
}
