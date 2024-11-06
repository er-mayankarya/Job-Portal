export const catchAsyncErrors = (theFunctions) => {
    return (req , res , next) => {
        Promise.resolve(theFunctions(req , res , next)).catch(error);
    }
}