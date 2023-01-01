import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectQuote, isLoadingQuote, loadDailyQuote } from './quoteSlice';

const Quote = () => {
    const quote = useSelector(selectQuote);
    const quoteIsLoading = useSelector(isLoadingQuote);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDailyQuote());
      }, [dispatch]);

    return (
        <div id="quote" className="text-white py-2">
            <q>{quote.quote}</q><p> - {quote.author}</p>
        </div>
    )
}

export default Quote;