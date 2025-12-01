import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = useNavigate();
	return (
		<div className="bg-white py-24 sm:py-32 dark:bg-gray-900 min-h-screen">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
						From the blog
					</h2>
					<p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
						Learn how to grow your business with our expert advice.
					</p>
				</div>
				<Outlet />

				<button
					type="button"
					onClick={() => navigate({ to: "/" })}
					className="text-white bg-blue-600 px-4 py-2 rounded-2xl grid place-content-center"
				>
					Home
				</button>
			</div>
		</div>
	);
}
