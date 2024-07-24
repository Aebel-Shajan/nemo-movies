import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

/**
 * @component
 * @description This component renders the trailer for a specific movie using the trailer Id taken from the
 * URL parameter.
 * @returns {JSX.Element} - The rendered trailer component with a trailer if Id is present.
 */
const Trailer = () => {
    let params = useParams();
    let key = params.ytTrailerId;

    return (
        <div className='react-player-container'>
            {
                (key!=null) ? 
                <ReactPlayer 
                    controls="true" 
                    playing={true} 
                    url={`https://www.youtube.com/watch?v=${key}`}
                    width='100%'
                    height='100%'
                />
                : null
            }
        </div>
    )
}

export default Trailer;