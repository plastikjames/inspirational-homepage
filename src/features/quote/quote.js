import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectQuote, loadDailyQuote } from './quoteSlice';

const Quote = () => {
    const quote = useSelector(selectQuote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDailyQuote());
    }, [dispatch]);

    return (
        <div id="quote" className="col-8 text-white py-2">
            <q>{quote.quote}</q><p> - {quote.author}</p>
        </div>
    )
}

export default Quote;