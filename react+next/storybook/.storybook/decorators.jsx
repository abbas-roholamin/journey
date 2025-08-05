export const ContainerDecorator = (storyFn) => (
    <div className="max-w-2xl mx-auto">{storyFn()}</div>
);

