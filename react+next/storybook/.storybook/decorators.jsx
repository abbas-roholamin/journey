
export const ContainerDecorator = (storyFn, context) => {
    const theme = context.parameters.theme || context.globals.theme
    return (
        <div className={`max-w-7xl  mx-auto ${theme === 'dark' ? ' text-white' : ' text-gray-900`'}`}>
            {storyFn()}
        </div>
    )
};


export const innderDecorator = (storyFn, context) => {
    return (
        <div>{storyFn()}</div>
    )
};
