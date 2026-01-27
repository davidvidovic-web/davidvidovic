
const PostboxDetailsCode = () => {
    return (
        <pre>
            <code>
                {`li:not(.old)::after {
    content: "New!";
    color: deepPink;
}`}
            </code>
        </pre>
    );
};

export default PostboxDetailsCode;