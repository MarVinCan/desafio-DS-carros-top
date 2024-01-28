import Comments from '../Comments';
import './styles.css';

export default function CommentCard(){
    return (
        <div className='dsct-comment-card-container'>
            <div className='dsct-comment-title'>O que estão dizendo</div>
            <div className='dsct-comments-container'>
                <Comments/>
                <Comments/>
                <Comments/>
                <Comments/>
                <Comments/>
            </div>
        </div>
    );
}