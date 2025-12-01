import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import z from "zod";

const paramsSchema = z.object({
	search: z.string().nonempty().optional(),
});

type PostType = {
	id: string;
	title: string;
	body: string;
};

export const Route = createFileRoute("/blog/")({
	component: RouteComponent,
	validateSearch: paramsSchema,
	loader: async (): Promise<PostType[]> => {
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const posts = await res.json();

		return posts;
	},
});

function RouteComponent() {
	const navigate = useNavigate();
	const { search } = Route.useSearch();
	const posts = Route.useLoaderData();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const search = e.target.value;
		navigate({ to: "/blog", search: { search } });
	};

	return (
		<>
			<div>
				<input
					type="search"
					value={search}
					onChange={handleChange}
					className="w-full bg-white"
				/>
			</div>
			<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 dark:border-gray-700">
				{posts.map((post) => (
					<article
						key={post.id}
						className="flex max-w-xl flex-col items-start justify-between"
					>
						<div className="flex items-center gap-x-4 text-xs">
							<time className="text-gray-500 dark:text-gray-400">2023</time>
							<p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800">
								BLOG
							</p>
						</div>
						<div className="group relative grow">
							<h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
								<Link to="/blog/$slug" params={{ slug: post.id }}>
									<span className="absolute inset-0" />
									{post.title}
								</Link>
							</h3>
							<p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
								{post.body}
							</p>
						</div>
					</article>
				))}
			</div>
		</>
	);
}
