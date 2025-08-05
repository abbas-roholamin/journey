export const ContainerDecorator = (storyFn, context) => {
    return (
        <div className="max-w-2xl mx-auto border">{storyFn()}</div>
    )
};


export const innderDecorator = (storyFn, context) => {
    return (
        <div>{storyFn()}</div>
    )
};
