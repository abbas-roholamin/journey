import Review from "./Review";

export default {
    title: "Components/Review",
    component: Review,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        rating: { control: "range", min: 0, max: 5, step: 1 },
    },
}

export const Default = {
    args: {
        rating: 3,
    },
}

export const Empty = {
    parameters: {
        theme: "dark",
    },
    args: {
        rating: 0,
    },
}

export const Full = {
    args: {
        rating: 5,
    },
}

