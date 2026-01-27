import { PaginationArrowIcon } from '@/svg/ArrowIcon';
import Link from 'next/link';

const PaginationArea = () => {
    return (
        <div className="tp-pagination-wrap pt-30">
            <ul>
                <li>
                    <Link href="#"><PaginationArrowIcon direction='left' /></Link>
                </li>
                <li>
                    <Link className="active" href="#">1</Link>
                </li>
                <li>
                    <Link href="#">2</Link>
                </li>
                <li>
                    <Link href="#">...</Link>
                </li>
                <li>
                    <Link href="#">4</Link>
                </li>
                <li>
                    <Link href="#"><PaginationArrowIcon direction='right' /></Link>
                </li>
            </ul>
        </div>
    );
};

export default PaginationArea;