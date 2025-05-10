import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import './ReviewCard.css';

function ReviewCard ({review}) {

    return (

        <article className='review card'>
            <section className='review-data'>

                <h4 className='review-title'>{review.title}</h4>

                <ul className='review-attributes'>

                    <li className='attribute date'>
                        Date: {review.date}
                    </li>
                    <li className='attribute name'>
                        Media: {review.media_name}
                    </li>
                    <li className='attribute type'>
                        Type: {review.media_type}
                    </li>

                </ul>

                <p className='review-text'>{review.review}</p>

            </section>
            <section className='review-buttons'>

                <button className='editButton'>
                    <EditNoteOutlinedIcon fontSize='medium'/>
                </button>

                <button className='deleteButton'>
                    <DeleteOutlinedIcon fontSize='medium'/>
                </button>

            </section>
        </article>

    )

}

export default ReviewCard;