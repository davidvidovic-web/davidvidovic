import { CommentArrowIcon } from "@/svg/ArrowIcon";
import Image from "next/image";
import Link from "next/link";

type Comment = {
    id: number;
    author: string;
    date: string;
    text: string;
    avatar: string;
    isChild?: boolean;
};

const comments: Comment[] = [
    {
        id: 1,
        author: "Harun Rashid",
        date: "January 2, 2025",
        text: "I love this theme. Sometimes it’s difficult to work with some themes, because even if they are created with Elementor, you can’t edit all the things with Elementor.",
        avatar: "/assets/img/blog/blog-details/blog-details-sm-2.jpg",
    },
    {
        id: 2,
        author: "Oliver Williams",
        date: "January 2, 2025",
        text: "They have really taken their time to work on the appearance of the theme, also, they have a very interactive client assistance service, I like it!",
        avatar: "/assets/img/blog/blog-details/blog-details-sm-1.jpg",
        isChild: true,
    },
    {
        id: 3,
        author: "James Taylor",
        date: "January 2, 2025",
        text: "They have really taken their time to work on the appearance of the theme, also, they have a very interactive client assistance service, I like it!",
        avatar: "/assets/img/blog/blog-details/blog-details-sm-2.jpg",
    },
];

const PostboxComments = () => {
    return (
        <ul>
            {comments.map((comment) => (
                <li key={comment.id} className={comment.isChild ? "children" : ""}>
                    <div className="postbox__comment-box d-flex">
                        <div className="postbox__comment-info">
                            <div className="postbox__comment-avater mr-30">
                                <Image width={70} height={70} src={comment.avatar} alt={comment.author}/>
                            </div>
                        </div>
                        <div className="postbox__comment-text">
                            <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                                <h5>By {comment.author}</h5>
                                <span className="post-meta">{comment.date}</span>
                            </div>
                            <p>{comment.text}</p>
                            <div className="postbox__comment-reply">
                                <Link href="#">
                                    Reply
                                    <span><CommentArrowIcon/></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PostboxComments;
