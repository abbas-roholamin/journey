import { createFileRoute } from "@tanstack/react-router";

interface User {
	id: number;
	name: string;
	email: string;
	username: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export const Route = createFileRoute("/users")({
	component: RouteComponent,
	loader: async (): Promise<User[]> => {
		const users = await fetch("https://jsonplaceholder.typicode.com/users");
		return users.json();
	},
});

function RouteComponent() {
	const users = Route.useLoaderData();

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}
